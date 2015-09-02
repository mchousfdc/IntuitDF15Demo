var React = require('react/addons'),
    $ = require('jquery'),
    navigate = require('react-mini-router').navigate,
    MenuNav = require('react-menu-nav'),
    HeaderTexts = require('private-configuration.js').header.texts;

require('gizmo/ss-gizmo.css');
require('standard/ss-standard.css');
require('../../styles/header.css');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            displayMenuNav: false
        }
    },
    toggleMenu: function () {
        if ( $('.view-container').hasClass('menu-open') ) {
            $('.view-container, .react-menu-nav, .header').removeClass('menu-open');
        } else {
            $('.view-container, .react-menu-nav, .header').addClass('menu-open');
        }
        $('.content').toggleClass('not-active');
    },
    resetFlow: function () {
        navigate('/');
    },
    goBack: function () {
        // Go to the previous screen
        var currentPath = this.props.path.split('/')
            index = currentPath[1],
            invoiceId = currentPath.length >= 2 ?
                currentPath[2] :
                '',
            backUrl = this.props.backMap[index];

        window.goingBack = true;

        if ( backUrl ) {

            // Add invoiceId to backUrl if it ends with '/'
            if ( backUrl.lastIndexOf('/') == backUrl.length - 1 ) {
                backUrl += invoiceId;
            }
            
            navigate(backUrl);
        }
    },
    goTo: function (id) {
        this.toggleMenu();
        // setTimeout( function () {
        //     navigate(id);
        // }, 500);
        // $('.header').one('webkitTransitionEnd',
        //     function () {
        //         navigate(id);
        //     }
        // );
        $('.view-container')
            .one('webkitTransitionEnd', function () { navigate(id); });
    },
    getHeaderSectionsFromPath: function () {
        var page = this.props.path.split('/')[1],
            pageTexts = HeaderTexts[page],
            headerSectionsMap = {
                rightSection: <span className="right-icon icon ss-gizmo ss-search" >
                </span>,
                title: HeaderTexts[''].title,
                leftSection: <span className='left-icon menu-icon'
                    onClick={ this.toggleMenu } >
                </span>
            };
        
        if ( pageTexts ) {
            headerSectionsMap.title = <span className='title'                         
                    onClick={ 
                    page == 'default-message' ?
                        this.resetFlow:
                        null
                    }>
                        { pageTexts.title }
                </span>;

            if ( pageTexts.left ) {
                headerSectionsMap.leftSection = <span className="left-icon ss-gizmo ss-navigateleft"
                    onClick={ this.goBack }>
                        { pageTexts.left }
                    </span>; 
            } 

            if ( pageTexts.right ) {
                headerSectionsMap.rightSection = <span className="right-icon">
                        { pageTexts.right }
                    </span>;    
            }
        }

        return headerSectionsMap; 
    },
    render: function () {        
        var headerSectionsMap = this.getHeaderSectionsFromPath(),
            leftSection = headerSectionsMap.leftSection,
            title = headerSectionsMap.title,
            rightSection = headerSectionsMap.rightSection;            

        return (
            <div>
                <div className="header">
                    { title }
                    { leftSection }
                    { rightSection }
                </div>
                <MenuNav display={true} from="no-transition">
                    <div className="container">
                        <div className="transactions">
                            <span className="title">TRANSACTIONS</span>
                            <ul>
                                <li>
                                    Registers
                                </li>
                                <li onClick={ 
                                    this.goTo.bind(null,'/')                                   
                                }>
                                    Expenses 
                                    <span className="plus">
                                        <span className="more">+</span>
                                    </span>
                                </li>
                                <li>
                                    Estimates 
                                    <span className="plus">
                                        <span className="more">+</span>
                                    </span>
                                </li>
                                <li onClick={ 
                                     this.goTo.bind(null,'/invoices')                                  
                                }>
                                    Invoices 
                                    <span className="plus">
                                        <span className="more">+</span>
                                    </span>
                                </li>
                                <li>
                                    Sales Receipts 
                                    <span className="plus">
                                        <span className="more">+</span>
                                    </span>
                                </li>
                                <li>
                                    Payments <span className="plus"><span className="more">+</span></span>
                                </li>
                            </ul>
                        </div>
                        <div className="reports">
                            <span className="title">REPORTS</span>
                            <ul>
                                <li>
                                    Profit &amp; Loss
                                </li>
                                <li>
                                    Balance Sheet
                                </li>
                            </ul>
                        </div>
                        <div className="help-settings">
                            <span className="title">HELP AND SETTINGS</span>
                            <ul>
                                <li onClick={
                                    this.goTo.bind(null,'/settings')
                                }>
                                    Settings
                                </li>
                                <li>
                                    Help
                                </li>
                            </ul>
                        </div>
                    </div>
                </MenuNav>
            </div>
        );
    }
});
