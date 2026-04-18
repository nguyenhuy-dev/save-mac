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
      className={`relative z-50 p-4 min-w-[150px] text-center bg-stone-50 text-red-950 font-bold uppercase tracking-widest text-sm rounded-sm border-2 border-red-900 shadow-sm select-none cursor-grab active:cursor-grabbing hover:bg-white transition-colors font-serif ${isDragging ? 'opacity-50 scale-105 shadow-md border-amber-600' : 'opacity-100'
        }`}
    >
      {item.content}
    </div>
  );
};
