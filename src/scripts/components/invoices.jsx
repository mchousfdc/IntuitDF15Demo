var React = require('react/addons');
    navigate = require('react-mini-router').navigate,
    ActionButton = require('action-button.jsx');

require('../../styles/invoices.css');
require('../mixins/utilsMixin.js');

module.exports = React.createClass({
    mixins: [
        UtilsMixin
    ],
    render: function() {
        var invoicesBalance = 0,
            invoices = this.props.invoices.reverse().map(function (invoice, i) {
                invoicesBalance += invoice.balance;
                var due = ['Due in', invoice.due, 'days'].join(' ');

                return (
                    <li key={i} className="invoice"
                        onClick={
                            function () { navigate('/invoice-detail/' + invoice.id); }
                        }>
                        <div className="main-information row">
                            <span className="store">{ invoice.store }</span>
                            <span className="amount">
                                { this.convertCurrency(invoice.balance, true) }
                            </span>                  
                        </div>
                        <div className="row">
                            <span className="invoice-id">#{ invoice.id }</span>       
                        </div>                    
                        <div className="date-information">
                            <span className="comment">{ due }</span>
                            <span className="date">{ invoice.date }</span>
                        </div>   
                    </li>
                );
        }.bind(this));

        return (
            <div className="invoices content">
                <div className="summary">
                    <span className="balance">
                        OPEN: { this.convertCurrency(invoicesBalance, true) }
                    </span>
                    <span className="text">BALANCE</span>
                </div>
                <ul className="invoice-list">
                    { invoices }
                </ul>
                <ActionButton display={ true } />
            </div>   
        );
    }
});
