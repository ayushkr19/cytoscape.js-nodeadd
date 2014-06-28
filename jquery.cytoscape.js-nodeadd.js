;
(function($, $$) {
    var defaults = {
        height: 50,
        width: 50,
        padding: 10,
        icon: 'fa fa-circle fa-2x'
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

                    $(".ui-cytoscape-nodeadd-nodediv").css({
                        height: options.height,
                        width: options.width,
                        //right: $container.offset().left + 'px',
                        right: ($(window).width() - $container.offset().left - $container.width()) + options.padding,
                        top: $container.offset().top + options.padding
                    });

                    $("#ui-cytoscape-nodeadd-icon").draggable({
                        helper: "clone"
                    });

                    $container.droppable({
                        //activeClass: "ui-state-highlight",
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

                    var handler = function(e) {
                        e.stopPropagation(); // don't trigger dragging of panzoom
                        e.preventDefault(); // don't cause text selection

                        //alert("Handler called");
                    };

                    $nodeDragHandle.bind("mousedown", function(e) {
                        handler(e);
                    });



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
