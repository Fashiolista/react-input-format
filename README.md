# React input format

Simple react component for formatted inputs. Flexible enough to add your own formatters.


### Install

```
npm install react-input-format
```


### Example

```javascript
import React from 'react';
import InputFormat from 'react-input-format';

export default class MyComponent extends React.Component {
	render () {
    	return (
        	<InputFormat format="thousand-separated" onChange={e => {console.log(e)}} />
        )
    }
}

```

### Props

- `format`
	- String
	- The formatter desired   *(required)*
- `defaultValue`
	- Number
- `formatterProps`
	- Object
- `onChange`
	- Function
	- Returns a `value` and `originalEvent`


### Formatters

`thousand-separated`

Formats numbers larger than a thousand with a comma for easier reading. Currently hardcoded to a comma format, with the dot indicating decimals. Custom separators will come, I promise.

`percentage`

Formats number as a percentage. Specific `formatterProps` include:
- `decimals` To set default number of decimals
- `factor` Eg. Set to 0.01, and a 100% value will be returned as 1. A 22% value is 0.22.

##### Your custom formatter
It's relatively easy to write your own formatter. Fork this project and copy one of the formatters in src/formatters and format away. When done, create a PR :D
