import React from 'react';
import { MarkerType, Position } from 'reactflow';

export const nodes = [
  {
      "id": "1",
      "type": "input",
      "data": {
          "label": "Input Node"
      },
      "position": {
          "x": 250,
          "y": 0
      },
      "width": 150,
      "height": 36
  },
  {
      "id": "2",
      "data": {
          "label": "Default Node"
      },
      "position": {
          "x": 100,
          "y": 100
      },
      "width": 150,
      "height": 36
  },
  {
      "id": "3",
      "type": "output",
      "data": {
          "label": "Output Node"
      },
      "position": {
          "x": 400,
          "y": 100
      },
      "width": 150,
      "height": 36
  },
  {
      "id": "4",
      "type": "custom",
      "position": {
          "x": 100,
          "y": 200
      },
      "data": {
          "selects": {
              "handle-0": "smoothstep",
              "handle-1": "smoothstep"
          }
      },
      "width": 180,
      "height": 132
  },
  {
      "id": "5",
      "type": "output",
      "data": {
          "label": "custom style"
      },
      "className": "circle",
      "style": {
          "background": "#2B6CB0",
          "color": "white"
      },
      "position": {
          "x": 400,
          "y": 200
      },
      "sourcePosition": "right",
      "targetPosition": "left",
      "width": 60,
      "height": 60
  },
  {
      "id": "6",
      "type": "output",
      "style": {
          "background": "#63B3ED",
          "color": "white",
          "width": 100
      },
      "data": {
          "label": "Node"
      },
      "position": {
          "x": 400,
          "y": 325
      },
      "sourcePosition": "right",
      "targetPosition": "left",
      "width": 100,
      "height": 36
  },
  {
      "id": "7",
      "type": "default",
      "className": "annotation",
      "data": {
          "label": "dumeel"
      },
      "draggable": false,
      "selectable": false,
      "position": {
          "x": 150,
          "y": 400
      },
      "width": 225,
      "height": 70
  },
  {
      "id": "1R",
      "position": {
          "x": 100,
          "y": 100
      },
      "data": {
          "label": "Node 1"
      },
      "type": "default",
      "sourcePosition": "bottom",
      "targetPosition": "top",
      "selected": false,
      "style": {
          "width": 180,
          "height": 100
      },
      "width": 180,
      "height": 100
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
      "dragging": false
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
      "sourcePosition": "right",
      "targetPosition": "left",
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
      "sourcePosition": "right",
      "targetPosition": "left",
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
      "sourcePosition": "right",
      "targetPosition": "left",
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
      "sourcePosition": "right",
      "targetPosition": "left",
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
      "sourcePosition": "right",
      "targetPosition": "left",
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
      "sourcePosition": "right",
      "targetPosition": "left",
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
      "sourcePosition": "right",
      "targetPosition": "left",
      "width": 150,
      "height": 36,
      "selected": false,
      "positionAbsolute": {
          "x": 1682.9037164922222,
          "y": 253.63344566994004
      },
      "dragging": false
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
      "sourcePosition": "right",
      "targetPosition": "left",
      "width": 150,
      "height": 36,
      "selected": true,
      "positionAbsolute": {
          "x": 1201.4416625817782,
          "y": 222.74707052643868
      },
      "dragging": false
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
      "sourcePosition": "right",
      "targetPosition": "left",
      "width": 150,
      "height": 36,
      "selected": false,
      "positionAbsolute": {
          "x": 1884.8873873873877,
          "y": 231.64414414414418
      },
      "dragging": false
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
      "sourcePosition": "right",
      "targetPosition": "left",
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
      "sourcePosition": "right",
      "targetPosition": "left",
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
      "sourcePosition": "right",
      "targetPosition": "left",
      "width": 150,
      "height": 36,
      "selected": false,
      "positionAbsolute": {
          "x": 1872.0760590915545,
          "y": -21.709226760550578
      },
      "dragging": false
  }
];

export const edges = [
  {
      "id": "1->2",
      "source": "1R",
      "target": "2R",
      "type": "smoothstep"
  },
  {
      "id": "e1-2",
      "source": "1",
      "target": "2",
      "label": "this is an edge label"
  },
  {
      "id": "e1-3",
      "source": "1",
      "target": "3",
      "animated": true
  },
  {
      "id": "e4-5",
      "source": "4",
      "target": "5",
      "type": "smoothstep",
      "sourceHandle": "handle-0",
      "data": {
          "selectIndex": 0
      },
      "markerEnd": {
          "type": "arrowclosed"
      }
  },
  {
      "id": "e4-6",
      "source": "4",
      "target": "6",
      "type": "smoothstep",
      "sourceHandle": "handle-1",
      "data": {
          "selectIndex": 1
      },
      "markerEnd": {
          "type": "arrowclosed"
      }
  },
  {
      "source": "20",
      "target": "24",
      "id": "reactflow__edge-20-24"
  },
  {
      "source": "20",
      "target": "23",
      "id": "reactflow__edge-20-23"
  },
  {
      "source": "20",
      "target": "22",
      "id": "reactflow__edge-20-22"
  },
  {
      "source": "18",
      "target": "20",
      "id": "reactflow__edge-18-20"
  },
  {
      "source": "16",
      "target": "14",
      "id": "reactflow__edge-16-14"
  },
  {
      "source": "18",
      "target": "16",
      "id": "reactflow__edge-18-16"
  },
  {
      "source": "17",
      "target": "18",
      "id": "reactflow__edge-17-18"
  },
  {
      "source": "19",
      "target": "17",
      "id": "reactflow__edge-19-17"
  },
  {
      "source": "21",
      "target": "25",
      "id": "reactflow__edge-21-25"
  },
  {
      "source": "19",
      "target": "21",
      "id": "reactflow__edge-19-21"
  },
  {
      "source": "15",
      "target": "13",
      "id": "reactflow__edge-15-13"
  },
  {
      "source": "19",
      "target": "15",
      "id": "reactflow__edge-19-15"
  }
];