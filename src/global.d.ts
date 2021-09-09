export { }

declare global {
    interface Window {
        env: any;
        sciter: any;
        jsFunction: any;
    }

    interface NodeModule {
        hot: any;
    }
}
