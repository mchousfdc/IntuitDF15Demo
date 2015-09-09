var React = require('react/addons'),
    Reflux = require('reflux'),
    Lodash = require('lodash'),
    Configuration = require('configuration.js');

var EmailTemplatesStore = Reflux.createStore({
    listenables: require('../actions/emailTemplate.actions.js'),
    init: function () {
        console.log('EmailTemplatesStore initialized');
        // This function will be called when the store will be
        // first initialized
        templates = Configuration.emailTemplates;
        templateType = 'Invoice';
        customTemplate = Configuration.customTemplate;
    },
    onToggleTemplateType: function (type) {
        templateType = type;
        this.trigger(templateType);
    }
});

module.exports = EmailTemplatesStore;
