var React = require('react/addons'),
    Reflux = require('reflux'),
    Lodash = require('lodash'),
    Configuration = require('configuration.js');

var CompanyActivitiesStore = Reflux.createStore({
    activities: [],
    invoiceList: [],
    init: function () {
        console.log('CompanyActivitiesStore initialized');
        // This function will be called when the store will be
        // first initialized
        this.activities = Lodash.flatten(
                        Lodash(Configuration.companyActivities).chain()
                        .zip(Lodash.pluck(Configuration.companyActivities, 'payments'))
                        .flatten()
                        .compact()
                        .value());
                
        this.invoiceList = Configuration.companyActivities;
        this.addBalance();        
    },
    getInitialState: function () {
        return {
            activities: this.activities,
            invoiceList: this.invoiceList
        }
    },
    addBalance: function () {
        this.invoiceList.forEach( function (invoice) {
            var balance = invoice.amount;
            if ( invoice.payments ) {
                invoice.payments.forEach( function (payment) {
                    balance -= parseInt(payment.amount);
                });
            }

            invoice.balance = balance;
        });
        this.trigger(this.invoiceList);
    }
});

module.exports = CompanyActivitiesStore;
