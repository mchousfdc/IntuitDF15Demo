var React = require('react/addons'),
    Lodash = require('lodash'),
    Moment = require('moment');

require('../../styles/invoice-detail.css');
require('gizmo/ss-gizmo.css');
require('../mixins/utilsMixin.js');

module.exports = React.createClass({
    mixins: [
        UtilsMixin
    ],
    getInitialState: function () {
        return {
            invoice: Lodash.findWhere(
                this.props.invoices , { 'id': parseInt(this.props.invoiceId) }
            )
        }        
    },
    render: function() {
        var invoice = this.state.invoice,
            payments = 0;

            if ( invoice.payments ) {
                invoice.payments.forEach( function (payment) {
                    payments += parseInt(payment.amount);
                });
            }

        return (
            <div className="invoice-detail content">
                <div className="row color-sky-blue">
                    <div className="invoice fl">
                        <ul>
                            <li>{ invoice.title }</li>
                            <li>{ invoice.id }</li>
                            <li>{ invoice.store } <i className="ss-gizmo ss-navigateright"></i></li>
                        </ul>
                    </div>
                    <div className="dates fr text-right">
                        <ul>
                            <li>
                                <p className="date-text fl text-right">Date</p> 
                                <span className='dates-bold'>
                                    { invoice.date }
                                </span>
                            </li>
                            <li>
                                <p className="date-text fl text-right">Due</p> 
                                <span className='dates-bold'>
                                    { Moment().add( { days:invoice.due } )
                                        .format('M/D/YY') }
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="clear"></div>
                    <div className="details">
                        <div className="more fl">
                            <span>More <i className="ss-gizmo ss-fastforward"></i></span>
                        </div>
                        <div className="balance fr text-right">
                            { this.convertCurrency(invoice.balance, true) }
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="row">
                    <div className="blank fl">
                        <div className="triangle fr"></div>
                    </div>
                    <div className="payment fr ">
                        <span>Receive Payments 
                            <i className="ss-gizmo ss-navigateright circles"></i>
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="product fl">
                        { invoice.item.product }
                    </div>
                    <div className="amount fr text-right">
                        { this.convertCurrency(invoice.amount) }
                    </div>
                </div>
                <div className="clear"></div>
                <div className="row border-double">
                    <div className="product-detail">
                        <span className='description'>{ invoice.item.detail }</span> <span className='taxable'>each <i>| </i> Non-Taxable</span>
                    </div>
                </div>
                <div className="row description-price">
                    <div className="description fr">
                        <div className="total-text fl">Total</div>
                        <div className="total-price fl">
                            { this.convertCurrency(invoice.amount) }
                        < /div>
                    </div>
                    <div className="clear"></div>
                    <div className="description fr">
                        <div className="payment-text fl">Payment</div>
                        <div className="payment-price fl">
                            { this.convertCurrency(payments) }
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="row sign">
                    <img src={ require('sign.png') } alt="sign" />
                    <p>{ invoice.date }</p>
                </div>                
            </div>
        );
    }
});

