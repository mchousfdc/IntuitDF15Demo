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
            selectorOpen: false,
            updateTemplate: false,
            activePaste: false,
            pasteText: false
        });
    },
    updateTemplateType: function (templateType) {
        EmailTemplateActions.toggleTemplateType(templateType);
        this.setState({
            updateTemplate: false
        })
    },
    componentWillReceiveProps: function (nextProps) {
        $('.subject-text, .send-text').css({opacity: 0})
            .animate({opacity: 1, visibility: "visible"}, 1000);
    },
    openSelector: function () {
        this.setState({
            selectorOpen: !this.state.selectorOpen,
            updateTemplate: false,
            pasteText: false,
            activePaste: false
        })
    },
    activeTextArea: function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ 
            updateTemplate: !this.state.updateTemplate,
            selectorOpen: false
        });
    },
    activePaste: function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            activePaste: true
        })
    },
    pasteText: function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            activePaste: false,
            pasteText: true
        });
    },
    render: function() {
        var template = this.props.currentTemplate[0],
            customTemplateProp = this.props.customTemplate,
            customBody = customTemplateProp.body.map(
                function (row, index) {
                    return (
                        <p key={ index }>
                            { row }
                        </p>
                    );
                }
            ),
            customSignature = customTemplateProp.signature.map(
                function (row, index) {
                    return (
                        <span key={ index }>
                            { row }
                        </span>
                    );
                }
            ),
            templateIconPaste = this.state.activePaste ? 
                <img src={ require('paste.png') } 
                    alt="paste" 
                    className="paste-text" 
                    onClick={ this.pasteText }/> : 
                null,
            templateBody = this.state.updateTemplate ?
                (this.state.pasteText ?
                    <div>
                        { customBody }
                        <p className='signature'>
                            { customSignature }
                        </p>
                    </div> :
                    <div className="paste-textarea" 
                        onClick={ this.activePaste }>
                        { templateIconPaste }
                    </div> ) :
                template.body.map( function(row, index) {
                    return (
                        <p key={ index }
                            className="template-body"
                            onClick={ this.activeTextArea } >
                            { row }
                        </p>
                        );
                }.bind(this)),

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
                <div className="row blank send-textarea">
                    <div className='send-text' >
                        { templateBody }
                    </div>
                </div>
                <div className="row-space">

                </div>
                <div className="row blank">
                    <div className="options">
                        <div className="title fl">
                            <span className="alternative-option">Attach invoice as PDF</span>
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

