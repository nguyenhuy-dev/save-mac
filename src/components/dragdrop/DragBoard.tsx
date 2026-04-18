import React, { useState } from 'react';
import { DndContext, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import type { ZoneType, DragItem, Difficulty } from '../../data/socioItems';
import { DraggableItem } from './DraggableItem';
import { DropZone } from './DropZone';
import { useAudio } from '../../hooks/useAudio';

interface DragBoardProps {
  items: DragItem[];
  difficulty: Difficulty;
  onFinish: (isWin: boolean, elapsedMs: number, placed: Record<string, ZoneType>) => void;
  onBack: () => void;
}

export const DragBoard: React.FC<DragBoardProps> = ({ items, difficulty, onFinish }) => {
  const [placed, setPlaced] = useState<Record<string, ZoneType>>({});
  const [startTime] = useState<number>(Date.now());
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
    } else {
      if (placed[active.id as string]) {
        setPlaced((prev) => {
          const newPlaced = { ...prev };
          delete newPlaced[active.id as string];
          return newPlaced;
        });
        playSound('door');
      }
    }
  };

  const allItemsPlaced = Object.keys(placed).length === items.length && items.length > 0;

  const handleSubmit = () => {
    if (!allItemsPlaced) return;

    let isWin = true;
    Object.keys(placed).forEach((itemId) => {
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

    const elapsedMs = Date.now() - startTime;
    
    // Ngừng lại một chút để thư giãn rồi bay sang result screen
    setTimeout(() => {
      onFinish(isWin, elapsedMs, placed);
    }, 800);
  };

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
      <div className="w-full flex justify-center items-center bg-stone-50 p-4 rounded-lg border-2 border-stone-200 shadow-sm mb-2">
        <div className="text-red-900 font-bold uppercase tracking-widest text-xl font-serif">
          Mức độ: {difficulty === "EASY" ? "Dễ 🌱" : difficulty === "MEDIUM" ? "Trung Bình ⚙️" : "Khó 💀"}
        </div>
      </div>

      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        {/* Top: Draggable Items */}
        <div className="w-full p-4 md:p-6 bg-white rounded-lg border-2 border-dashed border-red-900/40 min-h-[140px] flex flex-wrap gap-4 justify-center items-center relative overflow-hidden shadow-sm">
          {unplacedItems.length === 0 ? (
             <div className="text-red-950 font-black text-xl animate-pulse flex items-center gap-2 font-serif uppercase tracking-widest">
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
      <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
        <button
          onClick={handleReset}
          className="px-8 py-3 bg-white hover:bg-stone-50 text-stone-700 font-bold rounded-sm transition-colors shadow-sm active:scale-95 uppercase tracking-widest border-2 border-stone-300 w-full sm:w-auto font-serif"
        >
          Xóa xếp lại
        </button>

        <button
          disabled={!allItemsPlaced}
          onClick={handleSubmit}
          className={`px-10 py-3 font-black rounded-sm shadow-md uppercase tracking-widest border text-center font-serif transition-all duration-300 w-full sm:w-auto ${
             allItemsPlaced
               ? "bg-green-700 hover:bg-green-600 text-white border-green-800 transform hover:-translate-y-1 active:scale-95 hover:shadow-lg animate-pulse"
               : "bg-stone-200 text-stone-400 border-stone-300 cursor-not-allowed"
          }`}
        >
          NỘP BÀI TỔNG KẾT
        </button>
      </div>
    </div>
  );
};
