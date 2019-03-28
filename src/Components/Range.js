import React, {Component} from 'react';
import './../App.css'

class Range extends React.Component {
    constructor(props) {
        super(props);
        this.updateRange = this.updateRange.bind(this);
    }

    updateRange(e) {
        this.props.updateRange(e.target.value);
    }

    render() {
        let range = this.props.range;
        let min = this.props.minimumValue;
        let max = this.props.maximumValue;
        let step = this.props.stepValue;
        let value = this.props.value;
        return (
            <div className="bodyStyle">
                <input id="range"
                       type="range"
                       min={min}
                       max={max}
                       step={step}
                       onChange={this.updateRange}
                       value={value}
                />
                <div id="output">{range}</div>
            </div>
        )
    }
};

export default Range;