import React from 'react';

import ThousandSeparatorFilter from './formatters/thousand-separator';


export default class ReactInputFormat extends React.Component {
    constructor () {
        super();

        this.state = Object.assign({
            type: 'text',
            format: 'thousand-separator',
            value: '',
            formattedValue: '',
        }, this.props);

        this.availableFormatters();
        this.setFormatter();
    }

    availableFormatters () {
        this.formatters = {
            'thousand-separator': ThousandSeparatorFilter,
        }
    }

    setFormatter () {
        if (!this.formatters[this.state.format]) {
            console.warn(`Formatter "${this.state.format}" not found`)
        }

        this.formatter = new this.formatters[this.state.format]()
    }

    onChange (e) {
        this.state.value = this.formatter.deFormat(e.target.value);

        console.log('deformatted:', this.state.value);

        this.state.formattedValue = this.formatter.format(this.state.value);

        this.setState(this.state);
    }

    render () {
        return (
            <div className="react-input-format">
                <input type={this.state.type} value={this.state.formattedValue} onChange={this.onChange.bind(this)} />
            </div>
        );
    }
};