import React from 'react';
import ReactDOM from 'react-dom';

import InputFormat from './react-input-format';


class App {
    constructor () {
        this.render();
    }

    render () {
        ReactDOM.render(<InputFormat format="thousand-seperator"/>, document.querySelector('.react-component__input-format'));
    }
}

document.addEventListener('DOMContentLoaded', () => new App());