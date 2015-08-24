var React = require('react/addons'),
    navigate = require('react-mini-router').navigate,
    ActionButton = require('action-button.jsx');

require('../../styles/company-activities.css');
require('../mixins/utilsMixin.js');

module.exports = React.createClass({
    mixins: [
        UtilsMixin
    ],
    render: function() {
        var companyActivities = this.props.activities.map(function (activity, i) {
            var partiallyPaidClassName = activity.payments ? 
                    "partially-paid active" :
                    "partially-paid",
                title = activity.title + (activity.id ? ' #' + activity.id : ''),
                subTitle = [activity.prefix, activity.store].join(' ');

            return (
                <li key={i} className="activity"
                    onClick={
                        activity.id ? 
                            function () { navigate('/invoice-detail/' + activity.id) }:
                            null
                    }>
                    <span>
                        <span className="title">{ title }</span>
                        <span className="amount">
                            { this.convertCurrency(activity.amount, true) }
                        </span>                  
                    </span>
                    <span>
                        <span className="sub-title">{ subTitle }</span>       
                    </span>
                    
                    <div>
                        <span className={ partiallyPaidClassName }>
                            <span className="icon"></span>
                            <span className="text">Partially paid</span>
                        </span> 
                        <span className="comment">{ activity.comment }</span>
                    </div>   
                </li>
            );
        }.bind(this))

        return (
            <div className="company-activites content">
                <ul>
                    { companyActivities }                    
                </ul>
                <ActionButton display={ true } />
            </div>
        );
    }
});

