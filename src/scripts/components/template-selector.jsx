var React = require('react/addons'),
    $ = require('jquery'),
    Configuration = require('../configuration.js');

require('template-selector.css');

module.exports = React.createClass({
    getDefaultProps: function () {
        return ({
            simulateDelta: false,
            selectorHeight: 40
        });
    },
    selectTemplate: function () {
        this.props.selectionCallback($('.main-selector .active').text());
    },
    /* Slider simmulation movements */        
    nextItem: function (parent, activeClass) {
        var $current = $('.' + parent + ' .' + activeClass),
            $next = $current.next();

        if ($next.length !== 0) {
            $current.toggleClass(activeClass);
            $next.toggleClass(activeClass);
            this.selectTemplate();
        }
    },
    prevItem: function (parent, activeClass) {
        var $current = $('.' + parent + ' .' + activeClass),
            $prev = $current.prev();

        if ($prev.length !== 0) {
            $current.toggleClass(activeClass);
            $prev.toggleClass(activeClass);
            this.selectTemplate();
        }
    },
    moveNext: function (parent, childClass, visorClass, lastValue, delta, that) {
        var $parent = $('.' + parent + ' .' + childClass),
            index = 0,
            delta = delta || 1;
        
        //Simulates delta movements
        (function moveNextElement(index) {
            if (index < delta) {

                if ($parent.find('.' + visorClass).text() !== lastValue) {

                    $.each($parent, function(index, value) {
                        that.nextItem(value.className, 'active')
                    });

                    //Excecutes next movement
                    if ( that.props.simulateDelta ) {
                        setTimeout(moveNextElement.bind(null, index + 1), 500);
                    }
                }

            }
        })(index);
    },
    movePrev: function (parent, childClass, visorClass, initialValue, delta, that) {
        var $parent = $('.' + parent + ' .' + childClass),
            index = 0,
            delta = delta || 1;;
        
        //Simulates delta movements
        (function movePrevElement(index) {
            if (index < delta) {

                if ($parent.find('.' + visorClass).text() !== initialValue) {
                    $.each($parent, function(index, value) {
                        that.prevItem(value.className, 'active')
                    });

                    //Excecutes next movement
                    if ( that.props.simulateDelta ) {
                        setTimeout(movePrevElement.bind(null, index + 1), 500);
                    }
                }

            }
        })(index);
    },
    componentDidMount: function () {
        $('.template-selector').on('touchstart', function(event) {
            $('.template-selector').data('startPositionY', event.originalEvent.touches[0].screenY);
        });

        $('.template-selector').on('touchmove', function(event) {
            var currentPositionY = event.originalEvent.changedTouches[0].screenY,
                startPositionY = $('.template-selector').data('startPositionY'),
                offset = currentPositionY - startPositionY,
                selectorHeight = this.props.selectorHeight,
                delta = Math.floor(offset / selectorHeight);

            event.preventDefault();

            if (Math.abs(offset) < selectorHeight) {
                return;
            } else {
                delta = Math.floor(offset / selectorHeight);
            
                if (delta > 0) {
                    this.movePrev('select-templates', 'template-selector', 'main-selector .active', 'Invoice', delta, this);
                } else {
                    this.moveNext('select-templates', 'template-selector', 'main-selector .active', 'Sales Receipt', -delta, this);
                }
            }
        }.bind(this));
    },
    render: function() {
        return (            
            <div className='select-templates'>
                <div className='template-selector'>
                    <div className='third-line-prev'>
                        <span>Invoice</span>
                        <span>Estimate</span>
                        <span>Sales Receipt</span>
                        <span className='active'>&nbsp;</span>
                        <span>&nbsp;</span>
                    </div>
                    <div className='second-line-prev'>
                        <span>Invoice</span>
                        <span>Estimate</span>
                        <span className='active'>Sales Receipt</span>
                        <span>&nbsp;</span>
                    </div>    
                    <div className='main-selector'>
                        <span>Invoice</span>
                        <span className='active'>Estimate</span>
                        <span>Sales Receipt</span>
                    </div>
                    <div className='second-line-next'>
                        <span>&nbsp;</span>
                        <span className='active'>Invoice</span>
                        <span>Estimate</span>
                        <span>Sales Receipt</span>
                    </div>
                    <div className='third-line-next'>
                        <span>&nbsp;</span>
                        <span className='active'>&nbsp;</span>
                        <span>Invoice</span>
                        <span>Estimate</span>
                        <span>Sales Receipt</span>
                    </div>
                </div>
            </div>
        );
    }
});

