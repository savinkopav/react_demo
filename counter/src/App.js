import React, {Component} from 'react';
import './App.css';
import Counters from './components/counters';
import Nav from "./components/nav";

class App extends Component {

    constructor() {
        super();
        console.log('app - constructor'); //lifehucks
    }

    componentDidMount() {
        console.log('app - mounted'); //lifehucks
    }

    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({counters: counters});
    };

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({counters: counters});
    };

    handleDelete = (CounterId) => {
        const counters = this.state.counters.filter(c => c.id !== CounterId);
        this.setState({counters: counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters: counters});
    };

    render() {
        console.log('app - rendered');
        return (
            <React.Fragment>
                <Nav totalCounters={this.state.counters.filter(c => c.value>0).length}/>
                <main className="container">
                    <Counters
                    counters = {this.state.counters}
                    onReset = {this.handleReset}
                    onDelete = {this.handleDelete}
                    onInc = {this.handleIncrement}
                    onDec = {this.handleDecrement}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
