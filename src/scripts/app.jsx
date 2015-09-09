var React = require('react/addons'),
    Reflux = require('reflux'),
    RouterMixin = require('react-mini-router').RouterMixin,
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    Lodash = require('lodash'),
    CompanyActivitiesStore = require('stores/companyActivities.store.js'),
    EmailTemplatesStore = require('stores/emailTemplates.store.js'),
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
        ),
        Reflux.connect(
            EmailTemplatesStore,
            'templates templateType customTemplate'
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
    componentDidUpdate: function () {
        window.goingBack = false;
    },
    render: function () {
        var transitionName = 'fade',
            path = this.state.path;

        if (( path.indexOf('invoices') > -1 && window.goingBack ) ||
            (path.indexOf('invoice-detail') > -1 && window.goingBack ) ||
            (path.indexOf('send-invoice') > -1 && window.goingBack ) ||
            (path.indexOf('settings') > -1 && window.goingBack ) ||
            (path.indexOf('sales-forms') > -1 && window.goingBack ) ||
            (path.indexOf('default-message') > -1 && window.goingBack ) ||
            (path.indexOf('invoice-detail') == 1) ||
            (path.indexOf('send-invoice') == 1 ) ||
            (path.indexOf('sales-forms') == 1 ) ||
            (path.indexOf('default-message') == 1 )
        ) {
            transitionName = window.goingBack ?
                'slideright' :
                'slideleft';
        }

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
                'default-message': '/settings'
            };
        return <Header path={ this.state.path }
                    backMap={ backMap }/>;
    },
    renderBottomMenu: function () {
        var routesWithBottomMenu = [
                'invoice-detail',
                'send-invoice'
            ],
            path = this.state.path.split('/')
            currentPath = path[1],
            invoiceId = path[2];

        return <BottomMenu
                    invoiceId={ invoiceId }
                    display={ Lodash.includes(
                        routesWithBottomMenu, currentPath ) } />;
    },
    companyActivities: function () {
        return <CompanyActivities key={ this.state.path }
                    activities={ this.state.activities } />
    },
    invoices: function () {
        return <Invoices key={ this.state.path }
                    invoices={ this.state.invoiceList } />
    },
    invoiceDetail: function ( invoiceId ) {
        return <InvoiceDetail key={ this.state.path }
                    invoices={ this.state.invoiceList }
                    invoiceId={ invoiceId } />
    },
    sendInvoice: function (invoiceId) {
        return <SendInvoice key={ this.state.path }
                    invoiceId={ invoiceId }
                    template={
                        Lodash.where(templates, {type: 'Invoice'})
                    } />
    },
    settings: function () {
        return <Settings key={ this.state.path } />
    },
    salesForms: function () {
        return <SalesForms key={ this.state.path } />
    },
    defaultMessage: function () {
        var template = Lodash.where(
                templates, { type: templateType }
            )
        return <DefaultMessage key={ this.state.path }
                    currentTemplate={ template } 
                    customTemplate={ customTemplate } />
    },
    // DO NOT REMOVE new route callback
    notFound: function (path) {
        return <div key={ this.state.path } className="not-found">Page Not Found: {path}</div>;
    }
});
