import { loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver, NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import { viteMockServe } from 'vite-plugin-mock';

// 接口定义
interface ViteConfigOptions {
    command: 'build' | 'serve';
    mode: string;
}

interface DefineConfigOptions {
    command: 'build' | 'serve';
    mode: string;
}

function defineConfig({ command, mode }: DefineConfigOptions) {
    // 获取环境变量
    // 以下env配置是为了在代码中可以直接使用process.env.NODE_ENV,loadEnv是vite提供的一个方法，可以获取到环境变量
    const env: Partial<Record<string, string>> = loadEnv(mode, process.cwd());
    const isProduction: boolean = mode === 'production';
    return {
        plugins: [
            vue(),
            vueJsx(),
            AutoImport({
                imports: ['vue', 'vue-router', 'pinia'],
                // 指定引入根目录下的 requests，config，utils 目录内的所有函数
                dirs: ['./src/requests/', './src/config/', './src/utils/**'],
                // 指定生成的 d.ts 文件位置与文件名
                dts: './src/auto-imports.d.ts',
                // 配置开启 eslint
                eslintrc: { enabled: true },
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                // 指定组件位置，默认是src/components
                dirs: ['src/components'],
                // 配置文件生成位置
                dts: 'src/components.d.ts',
                resolvers: [NaiveUiResolver(), ElementPlusResolver()],
            }),
            // 默认会向 index.html 注入 .env 文件的内容，类似 vite 的 loadEnv函数
            // 还可配置entry入口文件， inject自定义注入数据等
            createHtmlPlugin(),
            // 开启gzip压缩
            viteCompression({
                // 配置压缩文件的大小>1kb
                threshold: 1024,
            }),
            // 打包分析
            visualizer(),
            // mock
            viteMockServe({
                //是否支持ts
                supportTs: true,
                //是否打印日志
                logger: false,
                //mock文件夹路径
                mockPath: './src/mock',
                //是否开启本地mock
                localEnabled: true,
            }),
        ],
        base: env.VITE_PUBLIC_PATH,
        css: {
            preprocessorOptions: {
                // 配置全局scss变量
                scss: {
                    additionalData: '@import "./src/assets/scss/_color.scss";',
                },
            },
        },
        server: {
            host: '0.0.0.0',
            port: 3000,
            // 设为 true 时若端口已会被占用直接退出，而不是尝试下一个可用端口。
            strictPort: false,
            open: true,
            proxy: {
                '/api-dev': {
                    target: 'http://localhost:3000/',
                    changeOrigin: true,
                    rewrite: (path: string) => path.replace(/^\/api-dev/, ''),
                },
                '/api-pro': {
                    target: 'http://www.weather.com.cn',
                    changeOrigin: true,
                    rewrite: (path: string) => path.replace(/^\/api-pro/, ''),
                },
            },
        },
        // resolve是一个对象，里面有一个alias属性，用来配置路径别名,这里配置了@指向src目录
        resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
        // 配置全局变量,这里配置了process.env.NODE_ENV,这样在代码中就可以直接使用process.env.NODE_ENV了
        define: { 'process.env': env },
        // build是一个对象，里面有一个outDir属性，用来配置打包后的文件夹名称
        build: {
            outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
            sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
            // minify默认esbuild，esbuild模式下terserOptions将失效
            // vite3变化：Terser 现在是一个可选依赖，如果你使用的是 build.minify: 'terser'，你需要手动安装它 `npm add -D terser`
            minify: 'terser',
            rollupOptions: {
                output: {
                    manualChunks: (id: string) => {
                        // 将 node_modules 中的代码单独打包成一个 JS 文件
                        if (id.includes('node_modules')) {
                            return 'vendor';
                        }
                    },
                },
            },
            terserOptions: {
                compress: {
                    keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
                    drop_console: isProduction && env.VITE_BUILD_DROP_CONSOLE === 'true', // 去除 console
                    drop_debugger: isProduction, // 去除 debugger
                },
            },
            chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
        },
    };
}

export default ({ command, mode }: ViteConfigOptions) => defineConfig({ command, mode });
