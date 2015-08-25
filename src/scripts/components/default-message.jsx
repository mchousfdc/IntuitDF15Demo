var React = require('react/addons'),
    $ = require('jquery'),
    Lodash = require('lodash'),
    TemplateSelector = require('template-selector.jsx'),
    EmailTemplateActions = require('actions/emailTemplate.actions.js'),
    PrivateConfiguration = require('../private-configuration.js').templateSelector;

require('../../styles/default-message.css');
require('gizmo/ss-gizmo.css');

module.exports = React.createClass({
    getInitialState: function () {
        return({
            selectorOpen: false
        });
    },
    updateTemplateType: function (templateType) {
        EmailTemplateActions.toggleTemplateType(templateType);
    },
    componentWillReceiveProps: function (nextProps) {
        $('.subject-text, .send-text').css({opacity: 0})
            .animate({opacity: 1, visibility: "visible"}, 1000);
    },
    openSelector: function () {
        this.setState({
            selectorOpen: !this.state.selectorOpen
        })
    },
    render: function() {
        var template = this.props.currentTemplate[0];
            templateBody = template.body.map( function(row, index) {
                return (
                    <li key={ index }>
                        <span>{ row }</span>
                    </li>
                    );
            }),
            selectorClassName = this.state.selectorOpen ?
                'selector active' :
                'selector',
            templateNameClassName = this.state.selectorOpen ?
                'template-name active' :
                'template-name';   

        return (
            <div className="default-message content">
                <div className="row">
                    <div className="options title-blue">
                        Select a sales form
                    </div>
                </div>
                <div className="row blank">
                    <div className="options">
                        <div className="title fl">
                            <p className={ templateNameClassName }
                                onClick={ this.openSelector } >{ template.type }</p>
                            <div className={ selectorClassName }>
                                <TemplateSelector 
                                    selectionCallback={ this.updateTemplateType }
                                    simulateDelta={ 
                                        PrivateConfiguration.simulateDelta 
                                    }
                                    selectorHeight={ 
                                        PrivateConfiguration.selectorHeight 
                                    } />
                            </div>    
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="options title-blue">
                        Subject
                    </div>
                </div>
                <div className="row blank input-format">
                    <p className="subject-text">{ template.subject }</p>
                </div>
                <div className="row">
                    <div className="options title-blue">
                        Message
                    </div>
                </div>
                <div className="row blank">
                    <ul className='send-text'>
                        { templateBody }
                    </ul>
                </div>
                <div className="row-space">

                </div>
                <div className="row blank">
                    <div className="options">
                        <div className="title fl">
                            <span className="alternative-opcion">Attach invoice as PDF</span>
                        </div>
                        <div className="option fr">
                            <div className="switch">
                                <input id="cmn-toggle-1" className="cmn-toggle cmn-toggle-round" type="checkbox"/>
                                <label htmlFor="cmn-toggle-1"></label>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="row-space">

                </div>
            </div>
        );
    }
});

