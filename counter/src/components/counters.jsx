import React, {Component} from 'react';
import Counter from "./counter";


class Counters extends Component {
    render() {
        console.log('counters - rendered');
        const { onReset, onDelete, counters, onInc, onDec} = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                { counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onInc={onInc}
                        onDec={onDec}
                        counter={counter}
                    />)}
            </div>
        );
    }
}


export default Counters;
