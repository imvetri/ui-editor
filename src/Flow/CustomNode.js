import { Handle, Position , NodeResizer, useReactFlow, useStoreApi, useNodesState} from 'reactflow';
import React, { useCallback, memo, useRef } from 'react';
import { nodes as initialNodes, edges as initialEdges } from './initial-elements';

console.log(initialNodes)
const CustomNode = ({ id, data , selected}) => {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();
  
  const onChange = (evt) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            label : evt.target.value
          };
        }

        return node;
      })
    );
    data.onChange();
  };


const onResizeEnd = (event) => {
  // set node data properties with the new size
  const { nodeInternals } = store.getState();
  setNodes(
    Array.from(nodeInternals.values()).map((node) => {
      if (node.id === id) {
        node.data.style = node.data.style || {height: "", width: ""}
        
        node.data = {
          ...node.data,
          style: {...node.data.style, ...{
            height: node.height,
            width: node.width
          }}
        };

      }

      return node;
    })
  );
};

let children =       <div  style={data.style}>
<input onChange={onChange} type="text" style={{ border: 'none' }} value={data.label} />
</div>

  return (
    <div>
      <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={30} onResizeEnd={onResizeEnd.bind(this)}/>
      {children}
      <Handle type="source" position={Position.Left}  style={{ background: '#000' }} />
      <Handle type="target" position={Position.Right}  style={{ background: '#000' }} />
    </div>
  );
};

export default CustomNode;