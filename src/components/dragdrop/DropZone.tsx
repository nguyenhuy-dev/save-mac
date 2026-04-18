import React from 'react';
import { useDroppable, useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import type { ZoneType, DragItem } from '../../data/socioItems';

interface DropZoneProps {
  id: ZoneType;
  title: string;
  items: DragItem[];
  validation: Record<string, boolean>;
}

export const DropZone: React.FC<DropZoneProps> = ({ id, title, items, validation }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-col p-4 w-full min-h-[250px] bg-stone-50 rounded-lg border-2 transition-colors duration-300 ${
        isOver ? 'border-red-600 bg-white shadow-md' : 'border-stone-300 shadow-sm'
      }`}
    >
      <h3 className="text-lg font-black text-red-900 text-center uppercase mb-4 tracking-widest border-b-2 border-red-900/20 pb-2 font-serif">
        {title}
      </h3>
      <div className="flex-1 flex flex-col gap-3 justify-start items-center">
        {items.map((item) => {
          const isCorrect = validation[item.id];
          const hasBeenChecked = isCorrect !== undefined;

          let itemClass = "bg-white border-2 border-stone-200 text-stone-800";
          if (hasBeenChecked) {
             if (isCorrect) {
                itemClass = "bg-green-50 text-green-900 border-2 border-green-500 shadow-sm";
             } else {
                itemClass = "bg-red-50 text-red-900 border-2 border-red-500 animate-shake";
             }
          }

          return (
            <PlacedDraggableItem key={item.id} item={item} itemClass={itemClass} />
          );
        })}
      </div>
    </div>
  );
};

const PlacedDraggableItem: React.FC<{ item: DragItem; itemClass: string }> = ({ item, itemClass }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: item.id,
    data: item,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`w-full p-3 text-center rounded-sm font-bold shadow-sm cursor-grab active:cursor-grabbing transition-all font-serif uppercase tracking-wider text-sm hover:scale-[1.02] ${itemClass} ${
        isDragging ? 'opacity-50 scale-105 z-50 relative' : 'opacity-100 relative z-10'
      }`}
    >
      {item.content}
    </div>
  );
};
