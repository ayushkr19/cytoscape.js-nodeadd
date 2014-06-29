cytoscape.js-nodeadd
====================
A cytoscape.js plugin to add nodes to the graph by dragging an icon of the node and dropping it into the cytoscape graph.

![Preview](https://raw.githubusercontent.com/ayushkr19/cytoscape.js-nodeadd/master/img/preview.png)

## Dependencies

 * jQuery >=1.6
 * jQuery UI >=1.0
 * Cytoscape.js >=2.0
 * Font Awesome 4 (for automatic icons), or you can specify your own class names for icons


## Initialisation

```js

var cy = cytoscape({
 		container: document.getElementById('cy')
  		/* ... */
  	});

var defaults = {
        height: 30,   //height of the icon container
        width: 30,    //width of the icon container
        padding: 3,  //padding of the icon container(from right & top)
        backgroundColorDiv: '#fff',   //background color of the icon container
        borderColorDiv: '#CFCFCF',    //border color of the icon container
        borderWidthDiv: '1px',    //border width of the icon container
        borderRadiusDiv: '5px',    //border radius of the icon container
        
        icon: 'fa fa-circle fa-2x',   //icon class name
    };

cy.nodeadd( defaults );

/* 
$('#cy').cytoscapeNodeadd( defaults );		//Or initialize via jQuery on cytoscape DOM element with id 'cy'
*/

```