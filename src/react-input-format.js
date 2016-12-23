import React from 'react';

import ThousandSeparatedFilter from './formatters/thousand-separated';
import PercentageFilter from './formatters/percentage';


/**
 * React Input Format Component
 *
 * Takes a normal input box and formats the user's input based on the specified formatter.
 *
 * Currently supports:
 *
 * - Thousand Separator
 *   >> 10000
 *   << 10,000
 *
 *   >> 10000000.00
 *   << 10,000,000.00
 *
 * - Percentage
 *   >> 1
 *   << 1%
 *
 *   With 0.01 factor, value returned by onChange is 0.042
 *   >> 4.2
 *   << 4.2%
 *
 *
 * @type {ReactInputFormat}
 */
class ReactInputFormat extends React.Component {

    /**
     * Constructor
     *
     * @param props
     */
    constructor (props) {
        super();

        this.state = Object.assign({
            type: 'text',
            format: 'thousand-separated',
            value: String(props.defaultValue) || '',
            formattedValue: '',
        }, props);
    }


    /**
     * Called when receiving new props
     * Updates state and called for new formatter (or formatter props) if
     * needed
     *
     * @param  {Object} props
     * @return {Boolean|Void}
     */
    componentWillReceiveProps (props) {
        if (this.state.format === props.format
            && this._objEqual(this.state.formatterProps, props.formatterProps)) {
            return;
        }

        this.setState({
            format: props.format,
            formatterProps: props.formatterProps
        });

        this.setFormatter(props.format);
    }


    /**
     * Checks if objects are identical
     *
     * @param  {Object} objA
     * @param  {Object} objB
     * @return {Boolean}
     */
    _objEqual (objA, objB) {
        return JSON.stringify(objA) === JSON.stringify(objB);
    }

    /**
     * React component mounted
     */
    componentDidMount () {
        this.availableFormatters();
        this.setFormatter();
    }

    /**
     * Set available formatters
     */
    availableFormatters () {
        this.formatters = {
            'thousand-separated': ThousandSeparatedFilter,
            'percentage': PercentageFilter,
        }
    }

    /**
     * Set formatter, based on user props
     */
    setFormatter (formatterArg = false) {
        const formatter = formatterArg ? formatterArg : this.state.format;

        if (!this.formatters[formatter]) {
            return console.warn(`Formatter "${formatter}" not found`);
        }

        this.formatter = new this.formatters[formatter](this.props.formatterProps);

        this.setState({
            formattedValue: this.formatter.format(this.state.value)
        });
    }

    /**
     * On change callback
     *
     * @param e
     */
    onChange (e) {
        this.state.value = this.formatter.deFormat(e.target.value);

        if (!this.formatter.getProps()['formatOnBlur']) {
            this.state.formattedValue = this.formatter.format(this.state.value);
        } else {
            this.state.formattedValue = e.target.value;
        }

        this.setState(this.state);

        this.props.onChange && this.props.onChange(this.changeEvent(e));
    }

    /**
     * Make our own change event
     *
     * @param e
     * @returns {{value: *, originalEvent: *}}
     */
    changeEvent (e) {
        return {
            value: this.state.value,
            originalEvent: e,
        };
    }

    /**
     * On blur, might want to reformat
     */
    onBlur () {
        if (this.formatter.getProps()['formatOnBlur']) {
            this.refreshFormattedValue();
        }
    }

    /**
     * On enter, reformat
     * @param e
     */
    onKeyDown (e) {
        if (e.keyCode === 13) {
            this.refreshFormattedValue();
        }
    }

    /**
     * Refresh formatted value based on internal value
     */
    refreshFormattedValue () {
        this.state.formattedValue = this.formatter.format(this.state.value);

        this.setState(this.state);
    }

    /**
     * Render
     *
     * @returns {XML}
     */
    render () {
        return (
            <div className="react-input-format">
                <input type={this.state.type} value={this.state.formattedValue} onChange={this.onChange.bind(this)} onBlur={this.onBlur.bind(this)} onKeyDown={this.onKeyDown.bind(this)} />
            </div>
        );
    }
};

// format="percentage" defaultValue={0} formatterProps={{factor: 0.01, decimals: 0}} onChange={e => {console.log("Updated with", e.value)}}

/**
 * Proptypes
 */
ReactInputFormat.propTypes = {
    format: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.number,
    formatterProps: React.PropTypes.object,
    onChange: React.PropTypes.func
};


module.exports = ReactInputFormat;
