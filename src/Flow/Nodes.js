import {Position } from 'reactflow';

// read from the localstorage 
var localStorageNodes  = localStorage.getItem("nodes");
if(localStorageNodes!== null) {
    localStorageNodes = JSON.parse(localStorageNodes);
}
else {
    localStorageNodes= [
        {
            id: 'w2',
            type: 'ResizableNodeSelected',
            data: { label: 'NodeResizer when selected' },
            position: { x: 100, y: 300 },
            style: { background: '#fff', border: '1px solid black', borderRadius: 15, fontSize: 12 },
          },
        {
            "id": "13",
            "type": "default",
            "data": {
                "label": "World"
            },
            "position": {
                "x": 1888.5101351351352,
                "y": 447.07319819819827
            },
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1888.5101351351352,
                "y": 447.07319819819827
            },
            "dragging": false,
            "sourcePosition": "left",
            "targetPosition": "right"
        },
        {
            "id": "14",
            "type": "default",
            "data": {
                "label": "Hi"
            },
            "position": {
                "x": 1890.3772522522524,
                "y": 368.52477477477476
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1890.3772522522524,
                "y": 368.52477477477476
            },
            "dragging": false
        },
        {
            "id": "15",
            "type": "default",
            "data": {
                "label": "Content"
            },
            "position": {
                "x": 1194.5810022155242,
                "y": 386.42000892433816
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1194.5810022155242,
                "y": 386.42000892433816
            },
            "dragging": false
        },
        {
            "id": "16",
            "type": "default",
            "data": {
                "label": "Content"
            },
            "position": {
                "x": 1683.8912541033617,
                "y": 331.97368686700094
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1683.8912541033617,
                "y": 331.97368686700094
            },
            "dragging": false
        },
        {
            "id": "17",
            "type": "default",
            "data": {
                "label": "onClick"
            },
            "position": {
                "x": 1195.3603603603603,
                "y": 302.19031531531533
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1195.3603603603603,
                "y": 302.19031531531533
            },
            "dragging": false
        },
        {
            "id": "18",
            "type": "default",
            "data": {
                "label": "Hi component"
            },
            "position": {
                "x": 1389.686411374611,
                "y": 303.0652403138418
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1389.686411374611,
                "y": 303.0652403138418
            },
            "dragging": false
        },
        {
            "id": "19",
            "type": "default",
            "data": {
                "label": "World component"
            },
            "position": {
                "x": 1015.2533783783783,
                "y": 301.13738738738743
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1015.2533783783783,
                "y": 301.13738738738743
            },
            "dragging": false
        },
        {
            "id": "20",
            "type": "default",
            "data": {
                "label": "Visuals"
            },
            "position": {
                "x": 1682.9037164922222,
                "y": 253.63344566994004
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1682.9037164922222,
                "y": 253.63344566994004
            },
            "dragging": false,
            "animated": true
        },
        {
            "id": "21",
            "type": "default",
            "data": {
                "label": "Visuals"
            },
            "position": {
                "x": 1201.4416625817782,
                "y": 222.74707052643868
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1201.4416625817782,
                "y": 222.74707052643868
            },
            "dragging": false,
            "animated": true
        },
        {
            "id": "22",
            "type": "default",
            "data": {
                "label": "inner spacing"
            },
            "position": {
                "x": 1884.8873873873877,
                "y": 231.64414414414418
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1884.8873873873877,
                "y": 231.64414414414418
            },
            "dragging": false,
            "animated": true
        },
        {
            "id": "23",
            "type": "default",
            "data": {
                "label": "black border"
            },
            "position": {
                "x": 1888.018018018018,
                "y": 162.15090090090092
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1888.018018018018,
                "y": 162.15090090090092
            },
            "dragging": false
        },
        {
            "id": "24",
            "type": "default",
            "data": {
                "label": "rounded edge"
            },
            "position": {
                "x": 1881.6722972972975,
                "y": 82.12837837837839
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1881.6722972972975,
                "y": 82.12837837837839
            },
            "dragging": false
        },
        {
            "id": "25",
            "type": "default",
            "data": {
                "label": "red border"
            },
            "position": {
                "x": 1872.0760590915545,
                "y": -21.709226760550578
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1872.0760590915545,
                "y": -21.709226760550578
            },
            "dragging": false
        },
        {
            "id": "35",
            "type": "default",
            "data": {
                "label": "pulse emitter"
            },
            "position": {
                "x": 1872.0760590915545,
                "y": -121.70922676055058
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1872.0760590915545,
                "y": -21.709226760550578
            },
            "dragging": false
        },
        {
            "id": "36",
            "type": "default",
            "data": {
                "label": "PagerDuty"
            },
            "position": {
                "x": 1860.7403287383427,
                "y": -564.5002939421724
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1860.7403287383427,
                "y": -564.5002939421724
            },
            "dragging": false
        },
        {
            "id": "37",
            "type": "default",
            "data": {
                "label": "Call"
            },
            "position": {
                "x": 1584.4462518628675,
                "y": -663.1827970160771
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1584.4462518628675,
                "y": -663.1827970160771
            },
            "dragging": false
        },
        {
            "id": "38",
            "type": "default",
            "data": {
                "label": "SMS"
            },
            "position": {
                "x": 1479.7894271906848,
                "y": -579.0727586616322
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1479.7894271906848,
                "y": -579.0727586616322
            },
            "dragging": false
        },
        {
            "id": "39",
            "type": "default",
            "data": {
                "label": "E-Mail"
            },
            "position": {
                "x": 1359.6248885765615,
                "y": -491.8814312487152
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": true,
            "positionAbsolute": {
                "x": 1359.6248885765615,
                "y": -491.8814312487152
            },
            "dragging": false
        },
        {
            "id": "40",
            "type": "default",
            "data": {
                "label": "unKnown"
            },
            "position": {
                "x": 971.8325981877128,
                "y": -49.09036406709337
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1371.8325981877128,
                "y": -49.09036406709337
            },
            "dragging": false,
            "hidden": true
        },
        {
            "id": "41",
            "type": "default",
            "data": {
                "label": "known"
            },
            "position": {
                "x": 771.8325981877128,
                "y": -39.09036406709337
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1371.8325981877128,
                "y": -49.09036406709337
            },
            "dragging": false,
            "hidden": true
        },
        {
            "id": "42",
            "type": "default",
            "data": {
                "label": "New Relic"
            },
            "position": {
                "x": 921.8791684214038,
                "y": -737.58488494539415
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1860.8791684214038,
                "y": -437.58488494539415
            },
            "dragging": false
        } , 
        {
            "id": "412",
            "type": "default",
            "data": {
                "label": "Grafana"
            },
            "position": {
                "x": 921.8791684214038,
                "y": -37.58488494539415
            },
            "sourcePosition": "left",
            "targetPosition": "right",
            "width": 150,
            "height": 36,
            "selected": false,
            "positionAbsolute": {
                "x": 1860.8791684214038,
                "y": -437.58488494539415
            },
            "dragging": false
        } , {
            id: '1',
            position: { x: 100, y: 100 },
            data: { label: 'Node 1' },
            type: 'ResizableNodeSelected',
            sourcePosition: Position.Right,
            targetPosition: Position.Left,
            "sourcePosition": "right",
            "targetPosition": "left",
            selected: true,
            style: { background: '#fff', border: '1px solid black', borderRadius: 15, fontSize: 12 },
          },
          {
            id: '2',
            position: { x: 100, y: 400 },
            data: { label: 'Node 2' },
            type: 'ResizableNodeSelected',
            sourcePosition: Position.Bottom,
            targetPosition: Position.Top,
            style: { background: '#fff', border: '1px solid black', borderRadius: 15, fontSize: 12 },
          },
          {
            id: '2123',
            position: { x: 200, y: 400 },
            data: { label: 'Custom Node' },
            type: 'custom',
            sourcePosition: Position.Bottom,
            targetPosition: Position.Top,
            style: { background: '#fff', border: '1px solid black', borderRadius: 15, fontSize: 12 },
          }
    ].map(node=>{
      // add onConnect for each node.
    
      const nodeData = {
        label: node.data.label,
        onConnect: (params) => {
          console.log('Edge connected:', params);
        },
        onDisconnect: (element) => {
          console.log('Edge disconnected:', element);
        },
      };
      node.data = nodeData;
      return node
    });
    
    
}

export const nodes = localStorageNodes;