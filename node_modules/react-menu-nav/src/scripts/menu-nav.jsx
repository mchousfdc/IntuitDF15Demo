var React = require('react/addons'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

require('menu-nav.css');

module.exports = React.createClass({
    getDefaultProps: function () {
        return {
            from: 'top'
        }
    },
    propTypes: {
        display: React.PropTypes.bool.isRequired
    },
    render: function () {
        var menuNav,
            menuTransition = 'menu-transition-' + this.props.from;

        if (this.props.display) {
            menuNav =
                <div className='react-menu-nav'>
                    {this.props.children}
                </div>;
        }
        return (
            <ReactCSSTransitionGroup
                transitionName={menuTransition}>
                    {menuNav}
            </ReactCSSTransitionGroup>
        )
    }
});
