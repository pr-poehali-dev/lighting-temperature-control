import Icon from "@/components/ui/icon";

interface SlideLayoutProps {
  current: number;
  total: number;
  prev: () => void;
  next: () => void;
  setCurrent: (i: number) => void;
  children: React.ReactNode;
}

export default function SlideLayout({ current, total, prev, next, setCurrent, children }: SlideLayoutProps) {
  return (
    <div
      className="min-h-screen bg-[#0d0d0f] text-white flex flex-col select-none"
      style={{ fontFamily: "'Golos Text', sans-serif" }}
    >
      {/* Progress bar */}
      <div className="h-0.5 bg-white/10 w-full">
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-8 py-3 text-white/30 text-xs font-mono border-b border-white/5">
        <span>Умный дом · Arduino Uno · 2026</span>
        <span>{current + 1} / {total}</span>
      </div>

      {/* Slide */}
      <div className="flex-1 flex items-center justify-center px-6 py-4 overflow-auto">
        <div key={current} className="w-full max-w-5xl animate-fade-in">
          {children}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between px-8 py-5 border-t border-white/5">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <Icon name="ChevronLeft" size={18} />
          Назад
        </button>

        <div className="flex gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-6 h-2 bg-blue-500" : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === total - 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          Далее
          <Icon name="ChevronRight" size={18} />
        </button>
      </div>
    </div>
  );
}
