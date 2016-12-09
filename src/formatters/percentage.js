/**
 * Thousand separated formatter
 */
export default class {

    /**
     * Constructor
     *
     * @param props
     */
    constructor (props = {}) {
        this.props = props;
    }

    /**
     * Return properties specific for this formatter
     *
     * @returns {{formatOnBlur: boolean}}
     */
    getProps () {
        return {
            formatOnBlur: true
        }
    }

    /**
     * Format string
     *
     * @param input
     * @returns {string}
     */
    format (input = '') {
        input = parseFloat(input || 0);

        if (isNaN(input)) {
            return '%';
        }

        return this.factorDiv(input).toFixed(this.props.decimals) + "%";
    }

    /**
     * Deformat formatted text back to computer readable
     *
     * @param input
     * @returns {string}
     */
    deFormat (input = '') {
        const parts = this.deFormatParts(input);

        if (parts && parts[0] === '%') {
            return '';
        }

        this.determineDecimals(input);

        if (parts) {
            return parseFloat(
                this.factorMulti(parts[0])
                    .toFixed(2 + parseInt(this.props.decimals))
            );
        } else {
            return '';
        }
    }

    /**
     * Use regex to divide input into parts
     *
     * @param input
     * @returns {Array|{index: number, input: string}|*}
     */
    deFormatParts (input) {
        const format = /^([0-9]*\.?\d{0,2})%?/g;

        return input.match(format);
    }

    /**
     * Based on input, see if the user is using a decimal number, if so, we update our decimal property
     * for readability
     *
     * @param input
     */
    determineDecimals (input = '') {
        const parts = input.replace('%', '').split('.')

        if (parts[1]) {
            this.props.decimals = Math.min(parts[1].length, 2);
        } else {
            this.props.decimals = 0;
        }
    }

    /**
     * Calc the user's given factor
     *
     * @param input
     * @returns {number}
     */
    factorMulti (input) {
        return parseFloat(input) * parseFloat(this.props.factor || 1);
    }

    /**
     * Calc the user's given factor
     *
     * @param input
     * @returns {number}
     */
    factorDiv (input) {
        return parseFloat(input) / parseFloat(this.props.factor || 1);
    }
}