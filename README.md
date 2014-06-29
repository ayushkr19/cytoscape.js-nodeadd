cytoscape.js-nodeadd
====================
A cytoscape.js plugin to add nodes to the graph by dragging an icon of the node and dropping it into the cytoscape graph.

![Preview](TODO)

## Dependencies

 * jQuery >=1.6
 * jQuery UI >=1.0
 * Cytoscape.js >=2.0
 * Font Awesome 4 (for automatic icons), or you can specify your own class names for icons


## Initialisation

```js

var defaults = {
        height: 30,   //height of the icon container
        width: 30,    //width of the icon container
        padding: 10,  //padding of the icon container(from right & top)
        backgroundColorDiv: '#fff',   //background color of the icon container
        borderColorDiv: '#CFCFCF',    //border color of the icon container
        borderWidthDiv: '2px',    //border width of the icon container
        borderRadiusDiv: '5px',    //border radius of the icon container
        
        icon: 'fa fa-circle fa-2x',   //icon class name
    };

/* Init via jQuery on cytoscape element with ID 'cy'*/
$('#cy').cytoscapePanzoom( defaults );
```
