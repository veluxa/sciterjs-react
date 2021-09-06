
const external = {
    call: function (func, ...args) {
        return Window.this.xcall("$javascriptExternal")[func](args);
    },

    post: function (func, ...args) {
        return this.xcall(func, args)
    }
}

export default external;