import React from 'react';
import { useDroppable } from '@dnd-kit/core';
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
      className={`flex flex-col p-4 w-full min-h-[250px] bg-slate-900/80 rounded-2xl border-4 transition-colors duration-300 ${
        isOver ? 'border-yellow-400 bg-slate-800 shadow-[0_0_25px_rgba(234,179,8,0.4)]' : 'border-red-900/50 shadow-[0_0_20px_rgba(220,38,38,0.3)]'
      }`}
    >
      <h3 className="text-lg font-black text-yellow-500 text-center uppercase mb-4 tracking-widest border-b-2 border-red-900/50 pb-2">
        {title}
      </h3>
      <div className="flex-1 flex flex-col gap-3 justify-start items-center">
        {items.map((item) => {
          const isCorrect = validation[item.id];
          const hasBeenChecked = isCorrect !== undefined;

          let itemClass = "bg-slate-800 border-2 border-slate-600 text-slate-200";
          if (hasBeenChecked) {
             if (isCorrect) {
                itemClass = "bg-green-600 text-white border-2 border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.5)]";
             } else {
                itemClass = "bg-red-600 text-white border-2 border-red-400 animate-shake";
             }
          }

          return (
            <div key={item.id} className={`w-full p-3 text-center rounded-lg font-bold shadow-md cursor-default transition-all ${itemClass}`}>
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};
