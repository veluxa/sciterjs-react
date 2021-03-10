import React, { Component } from "sciterjs-react";

class Clock extends Component {
    constructor(props = {}) {
        super(props);
        this.state = { time: new Date() };
    }

    // Lifecycle: before the component gets mounted to the DOM
    componentWillMount() {

    }

    // Lifecycle: after the component gets mounted to the DOM
    componentDidMount() {
        // update time every second
        this.timer = setInterval(() => this.tick(), 1000);
    }

    // Lifecycle: before new props get accepted
    componentWillReceiveProps(props) {

    }

    shouldComponentUpdate() {

    }

    // Lifecycle: Called just before our component will be update
    componentWillUpdate() {

    }

    // Lifecycle: Called just after our component updated
    componentDidUpdate() {

    }

    // Lifecycle: prior to removal from the DOM
    componentWillUnmount() {
        // stop when not renderable
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {

        let time = this.state.time.toLocaleTimeString();

        return (
            <div style={{ flex: 1, width: "*" }} id={this.props.id}>
                <div>{time}</div>
            </div>
        )
    }
}

export default Clock;