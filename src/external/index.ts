
const external = {
    call: function (func, ...args) {
        return (Window as any).this.xcall("$javascriptExternal")[func](args);
    },

    post: function (func, ...args) {
        return this.xcall(func, args)
    }
}

export default external;