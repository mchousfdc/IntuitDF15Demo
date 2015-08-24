var React = require('react/addons'),
    $ = require('jquery'),
    Lodash = require('lodash'),
    navigate = require('react-mini-router').navigate
    Configuration = require('private-configuration.js'),
    ActionMenuItems = Configuration.actionMenu.items;

require('bottom-menu.css');
require('gizmo/ss-gizmo.css');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            showOverlay: false
        };
    },
    componentDidMount: function () {
        if (this.props.display == false) {
            $('.bottom-menu').hide();
        }
    },
    componentDidUpdate: function () {
        if (this.props.display == false) {
            $('.bottom-menu').hide();
        } else {
            $('.bottom-menu').show();
        }
    },
    toggleOverlay: function () {
        var showOverlay = !this.state.showOverlay;

        this.setState({
            showOverlay: showOverlay
        });
    },
    openMenu: function () {
        $('.menu').show();        
        this.toggleOverlay();
        setTimeout( function () {
            $('.menu').toggleClass('show');        
        }, 200);
        
    },
    closeMenu: function () {
        $('.menu')
            .one('webkitTransitionEnd',
                function () {
                    $('.menu').hide();
                    this.toggleOverlay();
                }.bind(this) )
            .removeClass('show');
    },
    startSOS: function () {
        this.closeMenu();
        window.location.href = "sos://start";
        console.log('sos was started');
    },
    goToNextScreen: function () {
        this.closeMenu();
        navigate('/send-invoice/' + this.props.invoiceId);
    },
    render: function () {
        var overlay = this.state.showOverlay ?
                <div className='overlay' />:
                null,

            menuItemsElement = ActionMenuItems.map(
                function (item, i) {
                    var label = item.onClickEvent ?
                        <a className="label"
                            onClick={ 
                                this.goToNextScreen
                            } >
                            { item.label }
                        </a> :
                        <a className="label" 
                            onClick={
                                this.closeMenu
                            } >
                            { item.label }
                        </a>

                    return (
                        <li key={i}
                            className="action-menu-item">
                            { label }
                        </li>
                    );
                }.bind(this)
            ),
            openCloseMenuIcon = overlay ? 
                <li className="open-menu-icon ss-gizmo ss-download"
                            onClick={ this.closeMenu }></li> :
                <li className="ss-gizmo ss-upload"
                            onClick={ this.openMenu }></li>;
        
        return (
            <div className="bottom-menu">

                <div className="action-menu row editor">
                    <ul>
                        <li className="ss-gizmo ss-files"></li>
                        <li className="ss-gizmo ss-write"></li>
                        <li className="ss-gizmo ss-search"></li>
                        { openCloseMenuIcon }
                        <li className="ss-gizmo ss-help"
                            onClick={ this.startSOS }></li>
                    </ul>
                </div>

                { overlay }

                <ul className='menu'>

                    { menuItemsElement }

                    <li className="action-menu-item"
                        onClick={ this.closeMenu } >

                        <span className="label cancel">
                            Cancel
                        </span>

                    </li>

                </ul>
            </div>
        );
    }
});
