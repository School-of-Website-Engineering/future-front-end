// vite.config.ts
import { loadEnv } from 'file:///D:/future-front-end/node_modules/vite/dist/node/index.js';
import vue from 'file:///D:/future-front-end/node_modules/@vitejs/plugin-vue/dist/index.mjs';
import path from 'path';
import vueJsx from 'file:///D:/future-front-end/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs';
import AutoImport from 'file:///D:/future-front-end/node_modules/unplugin-auto-import/dist/vite.js';
import Components from 'file:///D:/future-front-end/node_modules/unplugin-vue-components/dist/vite.mjs';
import {
    ElementPlusResolver,
    NaiveUiResolver,
} from 'file:///D:/future-front-end/node_modules/unplugin-vue-components/dist/resolvers.mjs';
import { createHtmlPlugin } from 'file:///D:/future-front-end/node_modules/vite-plugin-html/dist/index.mjs';
import viteCompression from 'file:///D:/future-front-end/node_modules/vite-plugin-compression/dist/index.mjs';
import { visualizer } from 'file:///D:/future-front-end/node_modules/rollup-plugin-visualizer/dist/plugin/index.js';
import { viteMockServe } from 'file:///D:/future-front-end/node_modules/vite-plugin-mock/dist/index.js';
import { VitePWA } from 'file:///D:/future-front-end/node_modules/vite-plugin-pwa/dist/index.mjs';
import preload from 'file:///D:/future-front-end/node_modules/vite-plugin-preload/dist/index.mjs';
var __vite_injected_original_dirname = 'D:\\future-front-end';
function defineConfig({ command, mode }) {
    const env = loadEnv(mode, process.cwd());
    const isProduction = mode === 'production';
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
            VitePWA({
                includeAssets: ['favicon.svg'],
                manifest: false,
                registerType: 'autoUpdate',
                workbox: {
                    runtimeCaching: [
                        {
                            // 缓存所有接口
                            urlPattern: /\/api-dev\/|\/api-pro\//,
                            handler: 'CacheFirst',
                            options: {
                                cacheName: 'interface-cache',
                            },
                        },
                        {
                            urlPattern: /(.*?)\.(js|css|ts)/,
                            // js /css /ts静态资源缓存
                            handler: 'CacheFirst',
                            options: {
                                cacheName: 'js-css-cache',
                            },
                        },
                        {
                            urlPattern: /(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,
                            // 图片缓存
                            handler: 'CacheFirst',
                            options: {
                                cacheName: 'image-cache',
                            },
                        },
                    ],
                },
            }),
            preload(),
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
            port: 3e3,
            // 设为 true 时若端口已会被占用直接退出，而不是尝试下一个可用端口。
            strictPort: false,
            open: true,
            proxy: {
                '/api-dev': {
                    target: 'http://localhost:3000/',
                    changeOrigin: true,
                    rewrite: (path2) => path2.replace(/^\/api-dev/, ''),
                },
                '/api-pro': {
                    target: 'http://localhost:3000/',
                    changeOrigin: true,
                    rewrite: (path2) => path2.replace(/^\/api-pro/, ''),
                },
            },
        },
        // resolve是一个对象，里面有一个alias属性，用来配置路径别名,这里配置了@指向src目录
        resolve: { alias: { '@': path.resolve(__vite_injected_original_dirname, 'src') } },
        // 配置全局变量,这里配置了process.env.NODE_ENV,这样在代码中就可以直接使用process.env.NODE_ENV了
        define: { 'process.env': env },
        // build是一个对象，里面有一个outDir属性，用来配置打包后的文件夹名称
        build: {
            outDir: 'dist',
            // 指定打包路径，默认为项目根目录下的 dist 目录
            sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
            // minify默认esbuild，esbuild模式下terserOptions将失效
            // vite3变化：Terser 现在是一个可选依赖，如果你使用的是 build.minify: 'terser'，你需要手动安装它 `npm add -D terser`
            minify: 'terser',
            rollupOptions: {
                output: {
                    manualChunks: (id) => {
                        if (id.includes('node_modules')) {
                            return 'vendor';
                        }
                    },
                },
            },
            terserOptions: {
                compress: {
                    keep_infinity: true,
                    // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
                    drop_console: isProduction && env.VITE_BUILD_DROP_CONSOLE === 'true',
                    // 去除 console
                    drop_debugger: isProduction,
                    // 去除 debugger
                },
            },
            chunkSizeWarningLimit: 1500,
            // chunk 大小警告的限制（以 kbs 为单位）
        },
    };
}
var vite_config_default = ({ command, mode }) => defineConfig({ command, mode });
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxmdXR1cmUtZnJvbnQtZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxmdXR1cmUtZnJvbnQtZW5kXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9mdXR1cmUtZnJvbnQtZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgbG9hZEVudiB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI7XHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCI7XHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBFbGVtZW50UGx1c1Jlc29sdmVyLFxyXG4gICAgTmFpdmVVaVJlc29sdmVyXHJcbn0gZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVyc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLWh0bWxcIjtcclxuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb25cIjtcclxuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjtcclxuaW1wb3J0IHsgdml0ZU1vY2tTZXJ2ZSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1tb2NrXCI7XHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XHJcbmltcG9ydCBwcmVsb2FkIGZyb20gXCJ2aXRlLXBsdWdpbi1wcmVsb2FkXCI7XHJcblxyXG5cclxuLy8gXHU2M0E1XHU1M0UzXHU1QjlBXHU0RTQ5XHJcbmludGVyZmFjZSBWaXRlQ29uZmlnT3B0aW9ucyB7XHJcblx0Y29tbWFuZDogXCJidWlsZFwiIHwgXCJzZXJ2ZVwiO1xyXG5cdG1vZGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIERlZmluZUNvbmZpZ09wdGlvbnMge1xyXG5cdGNvbW1hbmQ6IFwiYnVpbGRcIiB8IFwic2VydmVcIjtcclxuXHRtb2RlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmluZUNvbmZpZyh7IGNvbW1hbmQsIG1vZGUgfTogRGVmaW5lQ29uZmlnT3B0aW9ucykge1xyXG4gICAgLy8gXHU4M0I3XHU1M0Q2XHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHJcbiAgICAvLyBcdTRFRTVcdTRFMEJlbnZcdTkxNERcdTdGNkVcdTY2MkZcdTRFM0FcdTRFODZcdTU3MjhcdTRFRTNcdTc4MDFcdTRFMkRcdTUzRUZcdTRFRTVcdTc2RjRcdTYzQTVcdTRGN0ZcdTc1Mjhwcm9jZXNzLmVudi5OT0RFX0VOVixsb2FkRW52XHU2NjJGdml0ZVx1NjNEMFx1NEY5Qlx1NzY4NFx1NEUwMFx1NEUyQVx1NjVCOVx1NkNENVx1RkYwQ1x1NTNFRlx1NEVFNVx1ODNCN1x1NTNENlx1NTIzMFx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlxyXG4gICAgY29uc3QgZW52OiBQYXJ0aWFsPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKTtcclxuICAgIGNvbnN0IGlzUHJvZHVjdGlvbjogYm9vbGVhbiA9IG1vZGUgPT09IFwicHJvZHVjdGlvblwiO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICAgIHZ1ZSgpLFxyXG4gICAgICAgICAgICB2dWVKc3goKSxcclxuICAgICAgICAgICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgICAgICAgICAgICBpbXBvcnRzICA6IFtcInZ1ZVwiLCBcInZ1ZS1yb3V0ZXJcIiwgXCJwaW5pYVwiXSxcclxuICAgICAgICAgICAgICAgIC8vIFx1NjMwN1x1NUI5QVx1NUYxNVx1NTE2NVx1NjgzOVx1NzZFRVx1NUY1NVx1NEUwQlx1NzY4NCByZXF1ZXN0c1x1RkYwQ2NvbmZpZ1x1RkYwQ3V0aWxzIFx1NzZFRVx1NUY1NVx1NTE4NVx1NzY4NFx1NjI0MFx1NjcwOVx1NTFGRFx1NjU3MFxyXG4gICAgICAgICAgICAgICAgZGlycyAgICAgOiBbXCIuL3NyYy9yZXF1ZXN0cy9cIiwgXCIuL3NyYy9jb25maWcvXCIsIFwiLi9zcmMvdXRpbHMvKipcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBcdTYzMDdcdTVCOUFcdTc1MUZcdTYyMTBcdTc2ODQgZC50cyBcdTY1ODdcdTRFRjZcdTRGNERcdTdGNkVcdTRFMEVcdTY1ODdcdTRFRjZcdTU0MERcclxuICAgICAgICAgICAgICAgIGR0cyAgICAgIDogXCIuL3NyYy9hdXRvLWltcG9ydHMuZC50c1wiLFxyXG4gICAgICAgICAgICAgICAgLy8gXHU5MTREXHU3RjZFXHU1RjAwXHU1NDJGIGVzbGludFxyXG4gICAgICAgICAgICAgICAgZXNsaW50cmMgOiB7IGVuYWJsZWQ6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgICAgICAgICAgLy8gXHU2MzA3XHU1QjlBXHU3RUM0XHU0RUY2XHU0RjREXHU3RjZFXHVGRjBDXHU5RUQ4XHU4QkE0XHU2NjJGc3JjL2NvbXBvbmVudHNcclxuICAgICAgICAgICAgICAgIGRpcnMgICAgIDogW1wic3JjL2NvbXBvbmVudHNcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcdTc1MUZcdTYyMTBcdTRGNERcdTdGNkVcclxuICAgICAgICAgICAgICAgIGR0cyAgICAgIDogXCJzcmMvY29tcG9uZW50cy5kLnRzXCIsXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlcnM6IFtOYWl2ZVVpUmVzb2x2ZXIoKSwgRWxlbWVudFBsdXNSZXNvbHZlcigpXVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgLy8gXHU5RUQ4XHU4QkE0XHU0RjFBXHU1NDExIGluZGV4Lmh0bWwgXHU2Q0U4XHU1MTY1IC5lbnYgXHU2NTg3XHU0RUY2XHU3Njg0XHU1MTg1XHU1QkI5XHVGRjBDXHU3QzdCXHU0RjNDIHZpdGUgXHU3Njg0IGxvYWRFbnZcdTUxRkRcdTY1NzBcclxuICAgICAgICAgICAgLy8gXHU4RkQ4XHU1M0VGXHU5MTREXHU3RjZFZW50cnlcdTUxNjVcdTUzRTNcdTY1ODdcdTRFRjZcdUZGMEMgaW5qZWN0XHU4MUVBXHU1QjlBXHU0RTQ5XHU2Q0U4XHU1MTY1XHU2NTcwXHU2MzZFXHU3QjQ5XHJcbiAgICAgICAgICAgIGNyZWF0ZUh0bWxQbHVnaW4oKSxcclxuICAgICAgICAgICAgLy8gXHU1RjAwXHU1NDJGZ3ppcFx1NTM4Qlx1N0YyOVxyXG4gICAgICAgICAgICB2aXRlQ29tcHJlc3Npb24oe1xyXG4gICAgICAgICAgICAgICAgLy8gXHU5MTREXHU3RjZFXHU1MzhCXHU3RjI5XHU2NTg3XHU0RUY2XHU3Njg0XHU1OTI3XHU1QzBGPjFrYlxyXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAxMDI0XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAvLyBcdTYyNTNcdTUzMDVcdTUyMDZcdTY3OTBcclxuICAgICAgICAgICAgdmlzdWFsaXplcigpLFxyXG4gICAgICAgICAgICAvLyBtb2NrXHJcbiAgICAgICAgICAgIHZpdGVNb2NrU2VydmUoe1xyXG4gICAgICAgICAgICAgICAgLy9cdTY2MkZcdTU0MjZcdTY1MkZcdTYzMDF0c1xyXG4gICAgICAgICAgICAgICAgc3VwcG9ydFRzICAgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy9cdTY2MkZcdTU0MjZcdTYyNTNcdTUzNzBcdTY1RTVcdTVGRDdcclxuICAgICAgICAgICAgICAgIGxvZ2dlciAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvL21vY2tcdTY1ODdcdTRFRjZcdTU5MzlcdThERUZcdTVGODRcclxuICAgICAgICAgICAgICAgIG1vY2tQYXRoICAgIDogXCIuL3NyYy9tb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAvL1x1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRlx1NjcyQ1x1NTczMG1vY2tcclxuICAgICAgICAgICAgICAgIGxvY2FsRW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgVml0ZVBXQSh7XHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlQXNzZXRzOiBbXCJmYXZpY29uLnN2Z1wiXSxcclxuICAgICAgICAgICAgICAgIG1hbmlmZXN0ICAgICA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJUeXBlIDogXCJhdXRvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICB3b3JrYm94ICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVudGltZUNhY2hpbmc6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXHU3RjEzXHU1QjU4XHU2MjQwXHU2NzA5XHU2M0E1XHU1M0UzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXFwvYXBpLWRldlxcL3xcXC9hcGktcHJvXFwvLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgICA6IFwiQ2FjaGVGaXJzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlTmFtZTogXCJpbnRlcmZhY2UtY2FjaGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxQYXR0ZXJuOiAvKC4qPylcXC4oanN8Y3NzfHRzKS8sIC8vIGpzIC9jc3MgL3RzXHU5NzU5XHU2MDAxXHU4RDQ0XHU2RTkwXHU3RjEzXHU1QjU4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICAgOiBcIkNhY2hlRmlyc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgICA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZU5hbWU6IFwianMtY3NzLWNhY2hlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsUGF0dGVybjogLyguKj8pXFwuKHBuZ3xqcGU/Z3xzdmd8Z2lmfGJtcHxwc2R8dGlmZnx0Z2F8ZXBzKS8sIC8vIFx1NTZGRVx1NzI0N1x1N0YxM1x1NUI1OFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAgIDogXCJDYWNoZUZpcnN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVOYW1lOiBcImltYWdlLWNhY2hlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHByZWxvYWQoKVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYmFzZTogZW52LlZJVEVfUFVCTElDX1BBVEgsXHJcbiAgICAgICAgY3NzIDoge1xyXG4gICAgICAgICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBcdTkxNERcdTdGNkVcdTUxNjhcdTVDNDBzY3NzXHU1M0Q4XHU5MUNGXHJcbiAgICAgICAgICAgICAgICBzY3NzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbERhdGE6ICdAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL3Njc3MvX2NvbG9yLnNjc3NcIjsnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcnZlcjoge1xyXG4gICAgICAgICAgICBob3N0ICAgICAgOiBcIjAuMC4wLjBcIixcclxuICAgICAgICAgICAgcG9ydCAgICAgIDogMzAwMCxcclxuICAgICAgICAgICAgLy8gXHU4QkJFXHU0RTNBIHRydWUgXHU2NUY2XHU4MkU1XHU3QUVGXHU1M0UzXHU1REYyXHU0RjFBXHU4OEFCXHU1MzYwXHU3NTI4XHU3NkY0XHU2M0E1XHU5MDAwXHU1MUZBXHVGRjBDXHU4MDBDXHU0RTBEXHU2NjJGXHU1QzFEXHU4QkQ1XHU0RTBCXHU0RTAwXHU0RTJBXHU1M0VGXHU3NTI4XHU3QUVGXHU1M0UzXHUzMDAyXHJcbiAgICAgICAgICAgIHN0cmljdFBvcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBvcGVuICAgICAgOiB0cnVlLFxyXG4gICAgICAgICAgICBwcm94eSAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICBcIi9hcGktZGV2XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgICAgICA6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICByZXdyaXRlICAgICA6IChwYXRoOiBzdHJpbmcpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS1kZXYvLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiL2FwaS1wcm9cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCAgICAgIDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJld3JpdGUgICAgIDogKHBhdGg6IHN0cmluZykgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLXByby8sIFwiXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHJlc29sdmVcdTY2MkZcdTRFMDBcdTRFMkFcdTVCRjlcdThDNjFcdUZGMENcdTkxQ0NcdTk3NjJcdTY3MDlcdTRFMDBcdTRFMkFhbGlhc1x1NUM1RVx1NjAyN1x1RkYwQ1x1NzUyOFx1Njc2NVx1OTE0RFx1N0Y2RVx1OERFRlx1NUY4NFx1NTIyQlx1NTQwRCxcdThGRDlcdTkxQ0NcdTkxNERcdTdGNkVcdTRFODZAXHU2MzA3XHU1NDExc3JjXHU3NkVFXHU1RjU1XHJcbiAgICAgICAgcmVzb2x2ZTogeyBhbGlhczogeyBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIikgfSB9LFxyXG4gICAgICAgIC8vIFx1OTE0RFx1N0Y2RVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRixcdThGRDlcdTkxQ0NcdTkxNERcdTdGNkVcdTRFODZwcm9jZXNzLmVudi5OT0RFX0VOVixcdThGRDlcdTY4MzdcdTU3MjhcdTRFRTNcdTc4MDFcdTRFMkRcdTVDMzFcdTUzRUZcdTRFRTVcdTc2RjRcdTYzQTVcdTRGN0ZcdTc1Mjhwcm9jZXNzLmVudi5OT0RFX0VOVlx1NEU4NlxyXG4gICAgICAgIGRlZmluZSA6IHsgXCJwcm9jZXNzLmVudlwiOiBlbnYgfSxcclxuICAgICAgICAvLyBidWlsZFx1NjYyRlx1NEUwMFx1NEUyQVx1NUJGOVx1OEM2MVx1RkYwQ1x1OTFDQ1x1OTc2Mlx1NjcwOVx1NEUwMFx1NEUyQW91dERpclx1NUM1RVx1NjAyN1x1RkYwQ1x1NzUyOFx1Njc2NVx1OTE0RFx1N0Y2RVx1NjI1M1x1NTMwNVx1NTQwRVx1NzY4NFx1NjU4N1x1NEVGNlx1NTkzOVx1NTQwRFx1NzlGMFxyXG4gICAgICAgIGJ1aWxkICA6IHtcclxuICAgICAgICAgICAgb3V0RGlyICAgICAgIDogXCJkaXN0XCIsIC8vIFx1NjMwN1x1NUI5QVx1NjI1M1x1NTMwNVx1OERFRlx1NUY4NFx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQVx1OTg3OVx1NzZFRVx1NjgzOVx1NzZFRVx1NUY1NVx1NEUwQlx1NzY4NCBkaXN0IFx1NzZFRVx1NUY1NVxyXG4gICAgICAgICAgICBzb3VyY2VtYXAgICAgOiBlbnYuVklURV9CVUlMRF9TT1VSQ0VNQVAgPT09IFwidHJ1ZVwiLFxyXG4gICAgICAgICAgICAvLyBtaW5pZnlcdTlFRDhcdThCQTRlc2J1aWxkXHVGRjBDZXNidWlsZFx1NkEyMVx1NUYwRlx1NEUwQnRlcnNlck9wdGlvbnNcdTVDMDZcdTU5MzFcdTY1NDhcclxuICAgICAgICAgICAgLy8gdml0ZTNcdTUzRDhcdTUzMTZcdUZGMUFUZXJzZXIgXHU3M0IwXHU1NzI4XHU2NjJGXHU0RTAwXHU0RTJBXHU1M0VGXHU5MDA5XHU0RjlEXHU4RDU2XHVGRjBDXHU1OTgyXHU2NzlDXHU0RjYwXHU0RjdGXHU3NTI4XHU3Njg0XHU2NjJGIGJ1aWxkLm1pbmlmeTogJ3RlcnNlcidcdUZGMENcdTRGNjBcdTk3MDBcdTg5ODFcdTYyNEJcdTUyQThcdTVCODlcdTg4QzVcdTVCODMgYG5wbSBhZGQgLUQgdGVyc2VyYFxyXG4gICAgICAgICAgICBtaW5pZnkgICAgICAgOiBcInRlcnNlclwiLFxyXG4gICAgICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBtYW51YWxDaHVua3M6IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFx1NUMwNiBub2RlX21vZHVsZXMgXHU0RTJEXHU3Njg0XHU0RUUzXHU3ODAxXHU1MzU1XHU3MkVDXHU2MjUzXHU1MzA1XHU2MjEwXHU0RTAwXHU0RTJBIEpTIFx1NjU4N1x1NEVGNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInZlbmRvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb21wcmVzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfaW5maW5pdHk6IHRydWUsIC8vIFx1OTYzMlx1NkI2MiBJbmZpbml0eSBcdTg4QUJcdTUzOEJcdTdGMjlcdTYyMTAgMS8wXHVGRjBDXHU4RkQ5XHU1M0VGXHU4MEZEXHU0RjFBXHU1QkZDXHU4MUY0IENocm9tZSBcdTRFMEFcdTc2ODRcdTYwMjdcdTgwRkRcdTk1RUVcdTk4OThcclxuICAgICAgICAgICAgICAgICAgICBkcm9wX2NvbnNvbGUgOlxyXG5cdFx0XHRcdFx0XHRpc1Byb2R1Y3Rpb24gJiYgZW52LlZJVEVfQlVJTERfRFJPUF9DT05TT0xFID09PSBcInRydWVcIiwgLy8gXHU1M0JCXHU5NjY0IGNvbnNvbGVcclxuICAgICAgICAgICAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiBpc1Byb2R1Y3Rpb24gLy8gXHU1M0JCXHU5NjY0IGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTUwMCAvLyBjaHVuayBcdTU5MjdcdTVDMEZcdThCNjZcdTU0NEFcdTc2ODRcdTk2NTBcdTUyMzZcdUZGMDhcdTRFRTUga2JzIFx1NEUzQVx1NTM1NVx1NEY0RFx1RkYwOVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGNvbW1hbmQsIG1vZGUgfTogVml0ZUNvbmZpZ09wdGlvbnMpID0+XHJcbiAgICBkZWZpbmVDb25maWcoeyBjb21tYW5kLCBtb2RlIH0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStPLFNBQVMsZUFBZTtBQUN2USxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QjtBQUFBLEVBQ0k7QUFBQSxFQUNBO0FBQUEsT0FDRztBQUNQLFNBQVMsd0JBQXdCO0FBQ2pDLE9BQU8scUJBQXFCO0FBQzVCLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGFBQWE7QUFmcEIsSUFBTSxtQ0FBbUM7QUE2QnpDLFNBQVMsYUFBYSxFQUFFLFNBQVMsS0FBSyxHQUF3QjtBQUcxRCxRQUFNLE1BQXVDLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQztBQUN4RSxRQUFNLGVBQXdCLFNBQVM7QUFDdkMsU0FBTztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ0wsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLFFBQ1AsU0FBVyxDQUFDLE9BQU8sY0FBYyxPQUFPO0FBQUE7QUFBQSxRQUV4QyxNQUFXLENBQUMsbUJBQW1CLGlCQUFpQixnQkFBZ0I7QUFBQTtBQUFBLFFBRWhFLEtBQVc7QUFBQTtBQUFBLFFBRVgsVUFBVyxFQUFFLFNBQVMsS0FBSztBQUFBLFFBQzNCLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ3JDLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQTtBQUFBLFFBRVAsTUFBVyxDQUFDLGdCQUFnQjtBQUFBO0FBQUEsUUFFNUIsS0FBVztBQUFBLFFBQ1gsV0FBVyxDQUFDLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDO0FBQUEsTUFDeEQsQ0FBQztBQUFBO0FBQUE7QUFBQSxNQUdELGlCQUFpQjtBQUFBO0FBQUEsTUFFakIsZ0JBQWdCO0FBQUE7QUFBQSxRQUVaLFdBQVc7QUFBQSxNQUNmLENBQUM7QUFBQTtBQUFBLE1BRUQsV0FBVztBQUFBO0FBQUEsTUFFWCxjQUFjO0FBQUE7QUFBQSxRQUVWLFdBQWM7QUFBQTtBQUFBLFFBRWQsUUFBYztBQUFBO0FBQUEsUUFFZCxVQUFjO0FBQUE7QUFBQSxRQUVkLGNBQWM7QUFBQSxNQUNsQixDQUFDO0FBQUEsTUFDRCxRQUFRO0FBQUEsUUFDSixlQUFlLENBQUMsYUFBYTtBQUFBLFFBQzdCLFVBQWU7QUFBQSxRQUNmLGNBQWU7QUFBQSxRQUNmLFNBQWU7QUFBQSxVQUNYLGdCQUFnQjtBQUFBLFlBQ1o7QUFBQTtBQUFBLGNBRUksWUFBWTtBQUFBLGNBQ1osU0FBWTtBQUFBLGNBQ1osU0FBWTtBQUFBLGdCQUNSLFdBQVc7QUFBQSxjQUNmO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxjQUNJLFlBQVk7QUFBQTtBQUFBLGNBQ1osU0FBWTtBQUFBLGNBQ1osU0FBWTtBQUFBLGdCQUNSLFdBQVc7QUFBQSxjQUNmO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxjQUNJLFlBQVk7QUFBQTtBQUFBLGNBQ1osU0FBWTtBQUFBLGNBQ1osU0FBWTtBQUFBLGdCQUNSLFdBQVc7QUFBQSxjQUNmO0FBQUEsWUFDSjtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQUEsTUFDSixDQUFDO0FBQUEsTUFDRCxRQUFRO0FBQUEsSUFDWjtBQUFBLElBQ0EsTUFBTSxJQUFJO0FBQUEsSUFDVixLQUFNO0FBQUEsTUFDRixxQkFBcUI7QUFBQTtBQUFBLFFBRWpCLE1BQU07QUFBQSxVQUNGLGdCQUFnQjtBQUFBLFFBQ3BCO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNKLE1BQVk7QUFBQSxNQUNaLE1BQVk7QUFBQTtBQUFBLE1BRVosWUFBWTtBQUFBLE1BQ1osTUFBWTtBQUFBLE1BQ1osT0FBWTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFVBQ1IsUUFBYztBQUFBLFVBQ2QsY0FBYztBQUFBLFVBQ2QsU0FBYyxDQUFDQSxVQUFpQkEsTUFBSyxRQUFRLGNBQWMsRUFBRTtBQUFBLFFBQ2pFO0FBQUEsUUFDQSxZQUFZO0FBQUEsVUFDUixRQUFjO0FBQUEsVUFDZCxjQUFjO0FBQUEsVUFDZCxTQUFjLENBQUNBLFVBQWlCQSxNQUFLLFFBQVEsY0FBYyxFQUFFO0FBQUEsUUFDakU7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBO0FBQUEsSUFFQSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUssRUFBRSxFQUFFO0FBQUE7QUFBQSxJQUUxRCxRQUFTLEVBQUUsZUFBZSxJQUFJO0FBQUE7QUFBQSxJQUU5QixPQUFTO0FBQUEsTUFDTCxRQUFlO0FBQUE7QUFBQSxNQUNmLFdBQWUsSUFBSSx5QkFBeUI7QUFBQTtBQUFBO0FBQUEsTUFHNUMsUUFBZTtBQUFBLE1BQ2YsZUFBZTtBQUFBLFFBQ1gsUUFBUTtBQUFBLFVBQ0osY0FBYyxDQUFDLE9BQWU7QUFFMUIsZ0JBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUM3QixxQkFBTztBQUFBLFlBQ1g7QUFBQSxVQUNKO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNYLFVBQVU7QUFBQSxVQUNOLGVBQWU7QUFBQTtBQUFBLFVBQ2YsY0FDZCxnQkFBZ0IsSUFBSSw0QkFBNEI7QUFBQTtBQUFBLFVBQ2xDLGVBQWU7QUFBQTtBQUFBLFFBQ25CO0FBQUEsTUFDSjtBQUFBLE1BQ0EsdUJBQXVCO0FBQUE7QUFBQSxJQUMzQjtBQUFBLEVBQ0o7QUFDSjtBQUVBLElBQU8sc0JBQVEsQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUM1QixhQUFhLEVBQUUsU0FBUyxLQUFLLENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiXQp9Cg==
