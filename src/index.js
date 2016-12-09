import React from 'react';
import ReactDOM from 'react-dom';

import InputFormat from './react-input-format';


class App {
    constructor () {
        this.render();
    }

    render () {
        ReactDOM.render(<InputFormat
            format="percentage"
            defaultValue={0}
            formatterProps={{factor: 0.01, decimals: 0}}
            onChange={e => {console.log("Updated with", e.value)}}
        />, document.querySelector('.react-component__input-format'));
    }
}

document.addEventListener('DOMContentLoaded', () => new App());