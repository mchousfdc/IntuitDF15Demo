var React = require('react/addons'),
    navigate = require('react-mini-router').navigate;

require('../../styles/settings.css');
require('gizmo/ss-gizmo.css');

module.exports = React.createClass({
    goToLink: function(){
        navigate('/default-message');
    },
    render: function() {
        return (
            <div className="settings content">
                <div className="row blank">
                    <div className="options">
                        <div className="title fl">
                            <p>Version</p>
                        </div>
                        <div className="option fr">4.3.1</div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="row blank">
                    <div className="options">
                        <div className="title fl">
                            <p>Company Information</p>
                        </div>
                        <div className="option fr"><i className="ss-gizmo ss-navigateright"></i></div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="row blank">
                    <div className="options">
                        <div className="title fl">
                            <p>Passcode</p>
                        </div>
                        <div className="option fr"><i className="ss-gizmo ss-navigateright"></i></div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="row blank">
                    <div className="options">
                        <div className="title fl">
                            <p>Invoice Notifications</p>
                            <p>Know when you have overd...</p>
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
                <div className="row blank">
                    <div className="options">
                        <div className="title fl">
                            <p>Passcode</p>
                        </div>
                        <div className="option fr"><i className="ss-gizmo ss-navigateright"></i></div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="row blank">
                    <div className="options">
                        <div className="title fl">
                            <p>Sales Forms</p>
                        </div>
                        <div className="option fr"><i className="ss-gizmo ss-navigateright"></i></div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="row blank">
                    <div className="options">
                        <div className="title fl">
                            <p>Manage Tax Rates</p>
                        </div>
                        <div className="option fr"><i className="ss-gizmo ss-navigateright"></i></div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="row blank">
                    <div className="options" onClick={this.goToLink} >
                        <div className="title fl">
                            <p>Default Email Message</p>
                        </div>
                        <div className="option fr"><i className="ss-gizmo ss-navigateright"></i></div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="row">

                </div>
                <div className="row blank">
                    <div className="options">
                        <div className="title fl">
                            <p>Subscription</p>
                        </div>
                        <div className="option fr">Trial <i className="ss-gizmo ss-navigateright"></i></div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="row">

                </div>
                <div className="row border-top">
                    <div className="options link">
                        <span>Send Feedback</span>
                    </div>
                </div>
                <div className="row ">
                    <div className="options link">
                        <span>Refresh Data</span>
                    </div>
                </div>
            </div>
        );
    }
});

