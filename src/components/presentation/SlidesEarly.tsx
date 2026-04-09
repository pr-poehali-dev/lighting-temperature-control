import Icon from "@/components/ui/icon";

const PHOTOS = {
  kit_box: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/efa4f19f-edca-45d3-ac0e-87aba79749e0.jpg",
  kit_spread: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/2c7b949f-e7f6-447c-b71e-ad05b240f35a.jpg",
  arduino: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/d18b5eaa-9df8-4852-a265-9ff665774f07.jpg",
  dht11: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/200fba0b-19db-46d0-931a-6c84af47f8d8.jpg",
  hcsr04: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/a0538f7b-4537-46d1-a59a-1d30b40f8010.jpg",
  relay: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/30e80a09-eb19-4c4c-8d09-6702531be710.jpg",
};

interface Props {
  current: number;
}

export default function SlidesEarly({ current }: Props) {
  return (
    <>
      {/* ── СЛАЙД 1: Титульный ── */}
      {current === 0 && (
        <div className="flex flex-col items-center justify-center min-h-[500px] text-center">
          <div className="inline-block px-3 py-1 rounded-full border border-blue-500/40 text-blue-400 text-xs mb-8 font-mono">
            Индивидуальный проект · 2026
          </div>
          <h1 className="text-5xl font-bold leading-tight mb-4 max-w-3xl">
            Разработка системы автоматизации<br />
            <span className="text-blue-400">«Умный дом»</span>
          </h1>
          <p className="text-white/50 text-lg mb-10">на базе микроконтроллера Arduino</p>
          <div className="space-y-2 text-white/60 text-base mb-10">
            <p>Выполнил: <span className="text-white/90">Тюнин Алексей Игоревич</span></p>
            <p>Школа №ЭДИС-251/21А</p>
            <p>Преподаватель: <span className="text-white/90">Кардапольцева Ульяна Сергеевна</span></p>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {["Arduino Uno", "DHT11", "HC-SR04", "Реле", "C++"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/50 text-sm">{t}</span>
            ))}
          </div>
        </div>
      )}

      {/* ── СЛАЙД 2: Актуальность ── */}
      {current === 1 && (
        <div>
          <h2 className="text-4xl font-bold mb-8 text-center">Актуальность</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 col-span-2">
              <p className="text-white/80 text-lg">
                Концепция «Умного дома» становится всё более популярной в современном мире.
                По данным аналитиков, рынок умного дома растёт на <span className="text-blue-400 font-bold">25% ежегодно</span>.
              </p>
            </div>
            {[
              { icon: "DollarSign", color: "#ef4444", title: "Высокая стоимость", text: "Готовые системы (Xiaomi, Yandex) стоят от 5 000 до 50 000 ₽" },
              { icon: "Cloud", color: "#f59e0b", title: "Зависимость от облака", text: "Коммерческие решения требуют интернета и серверов компании" },
              { icon: "Lock", color: "#a855f7", title: "Нет гибкости", text: "Нельзя настроить под свои нужды или добавить нестандартные функции" },
              { icon: "Cpu", color: "#22c55e", title: "Наше решение", text: "Набор Arduino обошёлся всего в 2 500 ₽ — экономия до 80% по сравнению с готовыми системами" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: item.color + "22" }}>
                  <Icon name={item.icon} size={20} style={{ color: item.color }} />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-white/60 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── СЛАЙД 3: Цель и задачи ── */}
      {current === 2 && (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">Цель проекта</h2>
            <p className="text-white/40 text-xs font-mono mb-4">по SMART-технологии</p>
            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30">
              <p className="text-white/90 text-base leading-relaxed">
                К <span className="text-blue-400 font-semibold">24 марта 2026 года</span> разработать, собрать и протестировать работающий прототип системы «Умный дом» на базе <span className="text-blue-400 font-semibold">Arduino Uno</span>, который автоматически включает свет при приближении человека (менее 50 см) и сигнализирует о превышении температуры (выше 28°C), с бюджетом не более <span className="text-blue-400 font-semibold">3000 рублей</span>.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Задачи</h2>
            <div className="space-y-2">
              {[
                "Изучить принципы работы датчиков DHT11 и HC‑SR04",
                "Разработать электрическую схему подключения",
                "Написать программный код в среде Arduino IDE",
                "Собрать прототип на макетной плате",
                "Провести тестирование и оценить эффективность",
                "Оценить экономическую эффективность по сравнению с готовыми системами",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-7 h-7 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <p className="text-white/80 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── СЛАЙД 4: Комплектация ── */}
      {current === 3 && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-bold">Комплектация набора</h2>
            <span className="px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-mono">
              Arduino Uno R3 Maximum Kit · 110 деталей
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { url: PHOTOS.kit_box, label: "Коробка с набором" },
              { url: PHOTOS.kit_spread, label: "Все компоненты" },
              { url: PHOTOS.arduino, label: "Arduino Uno R3" },
              { url: PHOTOS.dht11, label: "Датчик DHT11" },
              { url: PHOTOS.hcsr04, label: "Датчик HC-SR04" },
              { url: PHOTOS.relay, label: "Реле SRD-05VDC" },
            ].map((p, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/10 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.url} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="px-2 py-1.5 bg-white/5 text-center text-xs text-white/50">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}