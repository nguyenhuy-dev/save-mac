import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import type { DragItem } from '../../data/socioItems';

interface DraggableItemProps {
  item: DragItem;
  isPlaced: boolean;
}

export const DraggableItem: React.FC<DraggableItemProps> = ({ item, isPlaced }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: item.id,
    data: item,
    disabled: isPlaced,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  if (isPlaced) {
    return null; 
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`relative z-50 p-4 min-w-[150px] text-center bg-slate-800 text-slate-100 font-bold rounded-lg border-2 border-red-500/50 shadow-lg select-none cursor-grab active:cursor-grabbing hover:bg-slate-700 transition-colors ${
        isDragging ? 'opacity-50 scale-105 shadow-[0_0_20px_rgba(220,38,38,0.5)]' : 'opacity-100'
      }`}
    >
      {item.content}
    </div>
  );
};
