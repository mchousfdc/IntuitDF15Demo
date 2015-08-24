var React = require('react/addons'),
    Reflux = require('reflux'),
    RouterMixin = require('react-mini-router').RouterMixin,
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    Lodash = require('lodash'),
    CompanyActivitiesStore = require('stores/companyActivities.store.js'),
    Header = require('header.jsx'),
    CompanyActivities = require('./components/company-activities.jsx' ),
    Invoices = require('./components/invoices.jsx' ),
    InvoiceDetail = require('./components/invoice-detail.jsx' ),
    SendInvoice = require('./components/send-invoice.jsx' ),
    Settings = require('./components/settings.jsx' ),
    SalesForms = require('./components/sales-forms.jsx' ),
    DefaultMessage = require('./components/default-message.jsx' ),
    BottomMenu = require('bottom-menu.jsx');
// DO NOT REMOVE new route require
        
require('main.css');
require('screen-transitions.css');

module.exports = React.createClass({
    mixins: [
        RouterMixin,
        Reflux.connect(
            CompanyActivitiesStore
        )
    ],
    routes: {
        '/': 'companyActivities',
        '/invoices': 'invoices',
        '/invoice-detail/:id': 'invoiceDetail',
        '/send-invoice/:id': 'sendInvoice',
        '/settings': 'settings',
        '/sales-forms': 'salesForms',
        '/default-message': 'defaultMessage',
        // DO NOT REMOVE new route route
    },
    render: function () {
        var transitionName = 'fade';

        return (
            <div>
                { this.renderHeader() }
                <ReactCSSTransitionGroup
                    transitionName={ transitionName }>
                    <div className="view-container" key={ this.state.path }>
                        { this.renderCurrentRoute() }
                    </div>
                </ReactCSSTransitionGroup>                
                { this.renderBottomMenu() }
            </div>
        );
    },
    renderHeader: function () {
        var backMap = {
                'invoice-detail': '/invoices',
                'send-invoice': '/invoice-detail/',
                'sales-forms': '/settings',
                'default-message': '/sales-forms'
            };
        return <Header path={ this.state.path } 
                    backMap={ backMap }/>;
    },
    renderBottomMenu: function () {
        return <BottomMenu />;
    },
    companyActivities: function () {
        return <CompanyActivities key={ this.state.path }
                    activities={ this.state.activities } />
    },
    invoices: function () {
        return <Invoices key={ this.state.path } />
    },
    invoiceDetail: function ( invoiceId ) {
        return <InvoiceDetail key={ this.state.path } />
    },
    sendInvoice: function (invoiceId) {
        return <SendInvoice key={ this.state.path }  />
    },
    settings: function () {
        return <Settings key={ this.state.path } />
    },
    salesForms: function () {
        return <SalesForms key={ this.state.path } />
    },
    defaultMessage: function () {        
        return <DefaultMessage key={ this.state.path } />
    },
    // DO NOT REMOVE new route callback
    notFound: function (path) {
        return <div key={ this.state.path } className="not-found">Page Not Found: {path}</div>;
    }
});
