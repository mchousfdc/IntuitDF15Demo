var React = require('react/addons'),
    navigate = require('react-mini-router').navigate;

require('../../styles/sales-forms.css');
require('gizmo/ss-gizmo.css');

module.exports = React.createClass({
    goToLink: function(){
        navigate('/default-message');
    },
    render: function() {
        return (
            <div className="sales-forms content">
                <div className="row">
                    <div className="options link">
                        form delivery
                    </div>
                </div>
                <div className="row blank">
                    <div className="options" 
                        onClick={this.goToLink}>
                        <div className="title fl">
                            <p>Default email message</p>
                        </div>
                        <div className="option fr">
                            <i className="ss-gizmo ss-navigateright"></i>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        );
    }
});

