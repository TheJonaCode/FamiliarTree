import React from 'react';
import { useStore } from '../store/store';

const AddFamilyButtons: React.FC = () => {
  const addNode = useStore((state) => state.addNode);

  const handleAddChild = () => {
    addNode('Hijo', 'yo');
  };

  const handleAddParent = () => {
    addNode('Padre', null);
  };

  return (
    <div className="absolute top-4 left-4 z-10 space-x-2">
      <button onClick={handleAddChild} className="bg-blue-500 text-white p-2 rounded">
        Agregar Hijo
      </button>
      <button onClick={handleAddParent} className="bg-green-500 text-white p-2 rounded">
        Agregar Padre
      </button>
    </div>
  );
};

export default AddFamilyButtons;
