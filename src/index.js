import React from 'react';
import ReactDOM from 'react-dom';

import InputFormat from './react-input-format';

class App extends React.Component {
    constructor () {
        super();

        this.state = {
            inputFormat: 'thousand-separated',
            formatterProps: {factor: 0.01, decimals: 0}
        };
    }

    setFormat (format) {
        this.setState({
            inputFormat: format
        });
    }

    setFormatterPropsPecentage (factor) {
        this.setState({
            formatterProps: {factor: factor, decimals: 0}
        });
    }

    render () {
        return (
            <div className="row" style={{paddingTop: '10vh'}}>
                <div className="button-group">
                    <button className="button small-2" onClick={this.setFormat.bind(this, 'percentage')}>Percentage</button>
                    <button className="button small-2" onClick={this.setFormat.bind(this, 'thousand-separated')}>Thousand separated</button>
                    <button className="button small-2" onClick={this.setFormatterPropsPecentage.bind(this, 0.1)}>Percentage 0.1</button>
                    <button className="button small-2" onClick={this.setFormatterPropsPecentage.bind(this, 0.01)}>Percentage 0.01</button>
                </div>

                <InputFormat
                    format={this.state.inputFormat}
                    defaultValue={0}
                    formatterProps={this.state.formatterProps}
                    onChange={e => {console.log("Updated with", e.value)}}
                />
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.querySelector('.react-component__app'));
});
