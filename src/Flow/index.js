import React, { useCallback, memo } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  Panel,
  Edge,
  Position,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import { useState } from 'react';

import { nodes as initialNodes, edges as initialEdges } from './initial-elements';
import CustomNode from './CustomNode.js';

import 'reactflow/dist/style.css';
import './overview.css';

import ResizeRotateNode from './ResizeRotateNode';

const nodeTypes = {
  custom: memo(CustomNode),
  resizeRotate: ResizeRotateNode
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

const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  const [variant, setVariant] = useState('cross');

  return (
    <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
    >
      <MiniMap style={minimapStyle} zoomable pannable />
      <Controls />
      <Background color="#aaa" gap={16} variant={variant}/>
      <Panel>
        <div>Background variants:</div>
        <button onClick={() => setVariant('dots')}>dots</button>
        <button onClick={() => setVariant('lines')}>lines</button>
        <button onClick={() => setVariant('cross')}>cross</button>
      </Panel>
    </ReactFlow>
  );
};

export default Flow;
