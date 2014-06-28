;
(function($, $$) {
    var defaults = {
        height: 30,
        width: 30,
        padding: 10,
        icon: 'fa fa-circle fa-2x',
        backgroundColorDiv: '#fff',
        borderColorDiv: '#CFCFCF',
        borderWidthDiv: '2px',
        borderRadiusDiv: '5px'
    };

    $.fn.cytoscapeNodeadd = function(params) {
        var options = $.extend(true, {}, defaults, params);
        var fn = params;

        var functions = {
            destroy: function() {
                var $this = $(this);

                $this.find(".ui-cytoscape-nodeadd").remove();
            },
            init: function() {
                return $(this).each(function() {
                    var $container = $(this);

                    var $nodeadd = $('<div class="ui-cytoscape-nodeadd"></div>');
                    $container.append($nodeadd);

                    var $nodeDragHandle = $('<div class="ui-cytoscape-nodeadd-nodediv"> <span id="ui-cytoscape-nodeadd-icon" class="draggable icon ' + options.icon + '"></span></div>');
                    $nodeadd.append($nodeDragHandle);

                    function setUpUI() {
                        $(".ui-cytoscape-nodeadd-nodediv").css({
                            background: options.backgroundColorDiv,
                            height: options.height,
                            width: options.width,
                            right: ($(window).width() - $container.offset().left - $container.width()) + options.padding,
                            top: $container.offset().top + options.padding,
                            border: options.borderWidthDiv + ' solid ' + options.borderColorDiv,
                            'border-radius': options.borderRadiusDiv
                        });
                    }
                    setUpUI();

                    function initDraggable() {
                        $("#ui-cytoscape-nodeadd-icon").draggable({
                            helper: "clone"
                        });
                    }
                    initDraggable();

                    function initDroppable() {
                        $container.droppable({
                            activeClass: "ui-state-highlight",
                            accept: "#ui-cytoscape-nodeadd-icon",
                            drop: function(event, ui) {
                                $container.removeClass("ui-state-highlight");

                                var currentOffset = $container.offset();
                                var relX = event.pageX - currentOffset.left;
                                var relY = event.pageY - currentOffset.top;

                                var cy = $container.cytoscape("get");
                                cy.add({
                                    group: "nodes",
                                    renderedPosition: {
                                        x: relX,
                                        y: relY
                                    }
                                });

                            }
                        });
                    }
                    initDroppable();

                    $nodeDragHandle.bind("mousedown", function(e) {
                        handler(e);
                    });

                    var handler = function(e) {
                        e.stopPropagation(); // don't trigger dragging of nodeadd
                        e.preventDefault(); // don't cause text selection
                    };



                });
            }
        };
        if (functions[fn]) {
            return functions[fn].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof fn == 'object' || !fn) {
            return functions.init.apply(this, arguments);
        } else {
            $.error("No such function `" + fn + "` for jquery.cytoscapenodeadd");
        }

        return $(this);
    };

    $.fn.cynodeadd = $.fn.cytoscapeNodeadd;

})(jQuery, cytoscape);
