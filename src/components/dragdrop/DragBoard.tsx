import React, { useState, useEffect } from 'react';
import { DndContext, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import type { ZoneType, DragItem, Difficulty } from '../../data/socioItems';
import { DraggableItem } from './DraggableItem';
import { DropZone } from './DropZone';
import { useAudio } from '../../hooks/useAudio';

interface DragBoardProps {
  items: DragItem[];
  difficulty: Difficulty;
  onFinish: (isWin: boolean) => void;
  onBack: () => void;
}

export const DragBoard: React.FC<DragBoardProps> = ({ items, difficulty, onFinish, onBack }) => {
  const [placed, setPlaced] = useState<Record<string, ZoneType>>({});
  const { playSound } = useAudio();

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over) {
      setPlaced((prev) => ({
        ...prev,
        [active.id as string]: over.id as ZoneType,
      }));
      playSound('door'); 
    }
  };

  // Auto check logic
  useEffect(() => {
    const placedKeys = Object.keys(placed);
    if (placedKeys.length === items.length) {
      let isWin = true;
      placedKeys.forEach((itemId) => {
        const item = items.find((i) => i.id === itemId);
        if (item && item.correctZone !== placed[itemId]) {
          isWin = false;
        }
      });

      if (isWin) {
        playSound('win');
      } else {
        playSound('wrong');
      }

      setTimeout(() => {
        onFinish(isWin);
      }, 800); // Ngừng lại một chút để thư giãn rồi bay sang result screen
    }
  }, [placed, items, onFinish, playSound]);

  const handleReset = () => {
    setPlaced({});
  };

  const unplacedItems = items.filter((item) => !placed[item.id]);

  const getItemsForZone = (zone: ZoneType) => {
    return items.filter((item) => placed[item.id] === zone);
  };

  return (
    <div className="w-full flex flex-col gap-6 items-center">
      {/* Header Stats */}
      <div className="w-full flex justify-center items-center bg-slate-900/80 p-4 rounded-xl border border-slate-600 shadow-inner mb-2">
        <div className="text-yellow-500 font-bold uppercase tracking-widest text-xl">
          Mức độ: {difficulty === "EASY" ? "Dễ 🌱" : difficulty === "MEDIUM" ? "Trung Bình ⚙️" : "Khó 💀"}
        </div>
      </div>

      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        {/* Top: Draggable Items */}
        <div className="w-full p-4 md:p-6 bg-slate-900/60 rounded-xl border border-dashed border-red-500/50 min-h-[140px] flex flex-wrap gap-4 justify-center items-center relative overflow-hidden">
          {unplacedItems.length === 0 ? (
             <div className="text-yellow-400 font-bold text-xl animate-pulse flex items-center gap-2">
               <span>Đang phân tích hệ tư tưởng...</span>
             </div>
          ) : (
            unplacedItems.map((item) => <DraggableItem key={item.id} item={item} isPlaced={false} />)
          )}
        </div>

        {/* Bottom: Drop Zones */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* We do NOT pass validation mapping anymore. The moment the last item drops, it will evaluate. */}
          <DropZone id="LLSX" title="Lực lượng sản xuất" items={getItemsForZone('LLSX')} validation={{}} />
          <DropZone id="QHSX" title="Quan hệ sản xuất" items={getItemsForZone('QHSX')} validation={{}} />
          <DropZone id="KTTT" title="Kiến trúc thượng tầng" items={getItemsForZone('KTTT')} validation={{}} />
        </div>
      </DndContext>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          onClick={handleReset}
          className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-full transition-colors shadow-lg active:scale-95 uppercase tracking-wider border border-slate-600 hover:border-slate-500 w-full sm:w-auto"
        >
          Xóa xếp lại
        </button>
        <button
          onClick={onBack}
          className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-black rounded-full shadow-[0_0_20px_rgba(220,38,38,0.4)] transform hover:-translate-y-1 active:scale-95 transition-all uppercase tracking-widest border-b-4 border-red-900 w-full sm:w-auto text-center"
        >
          Quay lại chọn mức độ
        </button>
      </div>
    </div>
  );
};
