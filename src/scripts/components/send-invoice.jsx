var React = require('react/addons');

require('../../styles/send-invoice.css');
require('gizmo/ss-gizmo.css');
require('standard/ss-standard.css');

module.exports = React.createClass({
    render: function() {
        var template = this.props.template.length > 0 ?
                this.props.template[0] :
                {
                    subject: 'Default',
                    body: 'Default Body'
                },
            templateBody = template.body.map( function(row, index) {
                return (
                    <li key={ index }>
                        <span>{ row }</span>
                    </li>
                    );
            });

        return (
            <div className="send-invoice content">
                <form action="#" method="#" id="send-invoice" className="form-send">
                    <div className="row">
                        <div className="to-placeholder fl"><p>To:</p></div>
                        <div className="input to-text fl" ></div>
                        <div className="to-icon fl">
                            <div className="content-icon">
                                <i className="border-contact">&nbsp;</i>
                                <i className='ss-standard ss-user'></i>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                    <div className="row">
                        <div className="subject-placeholder fl">
                            <p>Subject:</p>
                        </div>
                        <input type="text" name="" id="" 
                            className="subject-text fl"
                            defaultValue={ template.subject } />
                    </div>
                    <div className="clear"></div>
                    <div className="row">                        
                        <ul className='send-text'>
                            { templateBody }
                        </ul>
                    </div>
                </form>
            </div>
        );
    }
});

