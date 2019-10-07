import React, {Component} from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }

    componentWillUnmount() {
        console.log('counter - unmount');
    }

    render() {
        console.log('counter - rendered');
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onInc(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2">+</button>

                <button
                    disabled={ this.props.counter.value === 0 ? 'disabled' : ''}
                    onClick={() => this.props.onDec(this.props.counter)}
                    className="btn btn-secondary btn-sm">-</button>


                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">X</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    };

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    };
}

export default Counter;
