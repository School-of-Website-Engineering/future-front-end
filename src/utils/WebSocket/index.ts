import WebSocket from 'ws';

// 用于连接websocket服务器
class Ws {
    websocket: WebSocket;
    url: string;

    /**
     * 构造函数
     * @param url WebSocket服务器地址
     * @returns void
     */
    constructor(url: string) {
        this.websocket = new WebSocket(url);
        this.url = url;
    }

    /**
     * 连接WebSocket服务器
     * @param onOpen 连接成功回调
     * @param onError 连接失败回调·22
     * @param onClose 连接关闭回调
     * @returns void
     */
    connect(onOpen: any, onError?: any, onClose?: any): void {
        this.websocket.addEventListener('open', () => onOpen());
        if (onError) {
            this.websocket.addEventListener('error', (event) => onError(event));
        }
        if (onClose) {
            this.websocket.addEventListener('close', () => onClose());
        }
    }

    /**
     * 断开连接
     * @returns void
     */
    disconnect(): void {
        this.websocket.close();
    }

    /**
     * 发送消息
     * @param data 消息内容
     * @returns void
     */
    send(data: any): void {
        if (this.websocket.readyState === WebSocket.OPEN) {
            this.websocket.send(JSON.stringify(data));
        }
    }

    /**
     * 监听消息
     * @param onMessage 消息回调
     */
    listen(onMessage: any): void {
        this.websocket.addEventListener('message', (event) => {
            const message = JSON.parse(event.data.toString());
            onMessage(message);
        });
    }
}

const wsUrl = 'localhost:8080';

export default new Ws(wsUrl);
