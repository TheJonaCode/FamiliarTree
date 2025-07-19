import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { Node } from 'reactflow';

type FamilyNode = Node;

type Store = {
  nodes: FamilyNode[];
  addNode: (label: string, parentId: string | null) => void;
};

export const useStore = create<Store>((set) => ({
  nodes: [
    {
      id: 'yo',
      data: { label: 'Yo' },
      position: { x: 0, y: 0 },
      type: 'default',
    },
  ],
  addNode: (label, parentId) =>
    set((state) => {
      const newNode: FamilyNode = {
        id: uuidv4(),
        data: { label },
        position: {
          x: Math.random() * 250,
          y: Math.random() * 250,
        },
        type: 'default',
      };

      return {
        nodes: [...state.nodes, newNode],
      };
    }),
}));
