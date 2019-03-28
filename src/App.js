import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Range from './Components/Range';

function callCalulateLoan(amount, time) {
    let url = 'https://ftl-frontend-test.herokuapp.com/interest?amount=' + amount + '&numMonths=' + time;
    const promise = new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.open('GET', url);
        request.onload = async () => {
            if (request.status === 200) {
                await resolve(request.response);
                console.log('responseeeeeeeeeeeeeeeeeeeee', request.response);
                return request.response;
            } else {
                reject(Error(request.statusText));
            }
        };

        request.onerror = () => {
            reject(Error('Error fetching data.'));
        };

        request.send();
    });
};

/*function callDisplayData(response) {
    console.log('In DisplayData', response);
    return <div>
        {response}
    </div>
}*/

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 500,
            time: 6,
            response: {}
        };
        this.updateRangeForAmount = this.updateRangeForAmount.bind(this);
        this.updateRangeForTime = this.updateRangeForTime.bind(this);
    }

    updateRangeForAmount(val) {
        this.setState({
            amount: val,
        });
        let response = callCalulateLoan(val, this.state.time);
    }

     updateRangeForTime(val) {
        setTimeout(5000);
         this.setState({
             time: val
         });
         let response = callCalulateLoan(this.state.amount, val);
    }

    render() {
        console.log('in main');
        return (
            <div>
                <Header/>
                <Range minimumValue={500} maximumValue={5000} stepValue={10} value={this.state.amount}
                       range={this.state.amount} updateRange={this.updateRangeForAmount}/>
                <Range minimumValue={6} maximumValue={24} value={this.state.time} range={this.state.time}
                       updateRange={this.updateRangeForTime} updateAmountValue={this.updateValue}/>
                <span> {console.log('end', this.state)} </span>
            </div>
        );
    }
}

export default App;
