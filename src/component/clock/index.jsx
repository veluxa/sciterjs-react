import React from "../../react";

class Clock extends React.Component {
    constructor() {
        super();
        this.state = { time: new Date() };
    }

    // Lifecycle: Called whenever our component gets attached to real DOM element
    componentDidMount() {
        // update time every second
        this.timer = setInterval(() => this.tick(), 1000);
    }

    // Lifecycle: Called just before our component will be destroyed
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
            <div style={{ flex: 1, width: "*" }} >
                <div>{time}</div>
            </div>
        )
    }
}

export default Clock;