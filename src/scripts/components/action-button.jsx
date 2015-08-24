var React = require('react/addons'),
    $ = require('jquery'),
    ActionButton = require('action-button.png');

require('../../styles/action-button.css');

module.exports = React.createClass({
    componentDidMount: function () {
        if (this.props.display == false) {
            $('.action-button').hide();
        }
    },
    componentDidUpdate: function () {
        if (this.props.display == false) {
            $('.action-button').hide();
        } else {
            $('.action-button').show();
            
            if (window.goingBack == false) {
                $('.action-button').delay(1).fadeIn();
            }
        }
    },
    render: function() {
        return (
            <img className="action-button"
                src={ ActionButton } />
        );
    }
});

