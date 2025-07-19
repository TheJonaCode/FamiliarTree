import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { useStore } from '../store/store';
import AddFamilyButtons from './AddFamilyButtons';

const Canvas: React.FC = () => {
  const nodes = useStore((state) => state.nodes);

  return (
    <div className="w-full h-screen">
      <ReactFlow nodes={nodes} edges={[]} fitView>
        <Background />
        <Controls />
      </ReactFlow>
      <AddFamilyButtons />
    </div>
  );
};

export default Canvas;
