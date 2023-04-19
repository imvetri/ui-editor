import React, { useCallback, memo, useRef } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  useReactFlow
} from 'reactflow';
// pick all the node events and consolidate them to onChange event to propagate events to next targetNodes TODO
import { MarkerType } from 'reactflow';

import { nodes as initialNodes, edges as initialEdges } from './initial-elements';
import CustomNode from './CustomNode.js';

import 'reactflow/dist/style.css';
import './overview.css';
import react from 'react';


const nodeTypes = {
  custom: memo(CustomNode)
};
const defaultEdgeOptions = {
  style: { strokeWidth: 2, stroke: '#9ca8b3' },
  markerEnd: {
    type: 'arrowclosed',
  },
};
const minimapStyle = {
  height: 120,
};
let project;
const onInit = (reactFlowInstance) => {
  debugger;
  console.log('flow loaded:', reactFlowInstance)
  window.reactFlowInstance = reactFlowInstance
  project = reactFlowInstance.project;
};

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => {
    const { source, target } = params;
    // for event propagation TODO
    target && target.data && target.data.onConnect && target.data.onConnect(params); // alternative to element?.source?.data?.onDisconnect?.(element); // propagate event to source node
    setEdges((eds) => addEdge(params, eds)), []
  });

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  const connectingNodeId = useRef(null);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      debugger;
      const targetIsPane = event.target.classList.contains('react-flow__pane');

      if (targetIsPane) {
        var id = Math.floor(Math.random() * 1010);
        const newNode = {
          id: ""+id,
          // we are removing the half of the node width (75) to center the new node
          position: window.reactFlowInstance.project({ x: event.clientX  - 75, y: event.clientY }),
          data: { label: `Node ${id}` },
          type: "default",
          "sourcePosition": "left",
          "targetPosition": "right",
          "width": 150,
          "height": 36,
          "selected": false,
          "dragging": false
        };

        const newEdge = { 
          id: ""+id,
          source: ""+connectingNodeId.current,
          target: ""+id,
          targetHandle: null,
          animated: true,
          markerEnd: {
            type: MarkerType.Arrow,
          }
        }

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) => eds.concat(newEdge));
      }
    }
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnectStart={onConnectStart}

      onConnectEnd={onConnectEnd}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
    >
      <MiniMap style={minimapStyle} zoomable pannable />
      <Controls />
    </ReactFlow>
  );
};

export default Flow;
