#React Menu Nav (https://github.com/salesforce-demos/rs-react-menu-nav)

React Menu Nav component to be reused on any new app built on React.

## Installing

```bash
$ npm install --save https://github.com/salesforce-demos/rs-react-menu-nav.git
```

## Requirements

In order to make this component work in your project you need to add these meta
tags on your index.html:

```html
<meta name="description" content="">
<meta name="format-detection" content="telephone=no" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```
and you can override in your css the following rules:

## Configuration 

This component has these required properties:

 - 'display': used to show/hide the menu. Boolean (false/true - default false).
 - 'from': used to indicate the direction where the menu comes from: 
       - 'left': left to right.
       - 'right': right to left.
       - 'top': top to bottom. This is the default.
       - 'bottom': bottom to top.


## Example

```js
var React = require('react'),
    Modal = require('react-menu-nav');

var App = React.createClass({
    ...
    render: function () {
        return (
            <div>
                ...
                <MenuNav display={...} from='...'>
                    ...
                    Menu Nav content
                    ...
                </MenuNav>        
                ...
            </div>        
        );
    }
});

React.render(<App/>, document.body);
```
