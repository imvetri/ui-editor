import { Handle, Position , NodeResizer} from 'reactflow';
import React, { useCallback, memo, useRef } from 'react';


const CustomNode = ({ data , selected}) => {

  const onChange = useCallback((evt) => {
    debugger;
    console.log(evt.target.value);
  }, []);

  return (
    <div>
      <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={30} />

      <div  style={{ padding: '10px 20px' }}>
        <input onChange={onChange} type="text" style={{ border: 'none' }} value={data.label}/>
      </div>
      <Handle type="source" position={Position.Left}  style={{ background: '#000' }} />
      <Handle type="target" position={Position.Right}  style={{ background: '#000' }} />
    </div>
  );
};

export default CustomNode;