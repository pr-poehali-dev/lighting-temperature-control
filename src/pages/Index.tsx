import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTOS = {
  assembled1: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/68fd8c13-4f2b-40d2-aa71-2ee478f29a21.jpg",
  assembled2: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/dfcdd5a0-e0f7-432d-8a68-de8140a91d03.jpg",
  kit_box: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/efa4f19f-edca-45d3-ac0e-87aba79749e0.jpg",
  kit_spread: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/2c7b949f-e7f6-447c-b71e-ad05b240f35a.jpg",
  arduino: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/d18b5eaa-9df8-4852-a265-9ff665774f07.jpg",
  dht11: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/200fba0b-19db-46d0-931a-6c84af47f8d8.jpg",
  hcsr04: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/a0538f7b-4537-46d1-a59a-1d30b40f8010.jpg",
  relay: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/30e80a09-eb19-4c4c-8d09-6702531be710.jpg",
  breadboard: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/7113582e-f319-4004-b555-86908cb7a2a0.jpg",
  green_led: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/9aa69a04-6e57-44df-9044-8e406267b04d.jpg",
  red_led1: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/40e9f7b1-cf79-4ff3-9a5f-34a06d37b294.jpg",
  red_led2: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/e434414d-61db-4a5b-aa7e-e2610a7864e4.jpg",
  working: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/dfcdd5a0-e0f7-432d-8a68-de8140a91d03.jpg",
};

export default function Index() {
  const [current, setCurrent] = useState(0);
  const total = 12;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1));

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
                <h2 className="text-4xl font-bold mb-6">Цель проекта</h2>
                <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30">
                  <p className="text-white/90 text-lg leading-relaxed">
                    Разработать и собрать работающий прототип системы автоматизации освещения и контроля температуры на базе <span className="text-blue-400 font-semibold">Arduino Uno</span>.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Задачи</h2>
                <div className="space-y-3">
                  {[
                    "Изучить принципы работы датчиков DHT11 и HC-SR04",
                    "Разработать электрическую схему подключения",
                    "Написать программный код в среде Arduino IDE",
                    "Собрать прототип на макетной плате",
                    "Провести тестирование и оценить эффективность",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
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

          {/* ── СЛАЙД 5: Схема подключения ── */}
          {current === 4 && (
            <div>
              <h2 className="text-4xl font-bold mb-6 text-center">Схема подключения</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-white/10 text-white/60">
                        <th className="px-4 py-2 text-left font-medium">Компонент</th>
                        <th className="px-4 py-2 text-left font-medium">Пин</th>
                        <th className="px-4 py-2 text-left font-medium">Arduino</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { comp: "DHT11", pin: "+", ard: "5V", color: "#22c55e" },
                        { comp: "", pin: "out", ard: "D2", color: "#22c55e" },
                        { comp: "", pin: "−", ard: "GND", color: "#22c55e" },
                        { comp: "HC-SR04", pin: "VCC", ard: "5V", color: "#3b82f6" },
                        { comp: "", pin: "Trig", ard: "D3", color: "#3b82f6" },
                        { comp: "", pin: "Echo", ard: "D4", color: "#3b82f6" },
                        { comp: "", pin: "GND", ard: "GND", color: "#3b82f6" },
                        { comp: "Реле", pin: "+", ard: "5V", color: "#f59e0b" },
                        { comp: "", pin: "−", ard: "GND", color: "#f59e0b" },
                        { comp: "", pin: "S", ard: "D5", color: "#f59e0b" },
                        { comp: "LED зелёный", pin: "анод", ard: "D6 (220Ω)", color: "#22c55e" },
                        { comp: "LED красный", pin: "анод", ard: "D7 (220Ω)", color: "#ef4444" },
                      ].map((row, i) => (
                        <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                          <td className="px-4 py-2 font-medium" style={{ color: row.comp ? row.color : "transparent" }}>
                            {row.comp || "·"}
                          </td>
                          <td className="px-4 py-2 text-white/60 font-mono text-xs">{row.pin}</td>
                          <td className="px-4 py-2">
                            <span className="px-2 py-0.5 rounded font-mono text-xs" style={{ background: row.color + "22", color: row.color }}>
                              {row.ard}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="space-y-3">
                  <div className="rounded-2xl overflow-hidden border border-white/10 h-48">
                    <img src={PHOTOS.breadboard} alt="Макетная плата" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-white/10 h-48">
                    <img src={PHOTOS.assembled1} alt="Собранная схема" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── СЛАЙД 6: Принцип работы ── */}
          {current === 5 && (
            <div>
              <h2 className="text-4xl font-bold mb-6 text-center">Принцип работы</h2>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div className="p-5 rounded-2xl bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-500/60" />
                    <p className="font-semibold text-green-400">Управление светом (HC-SR04)</p>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Датчик измеряет расстояние до объекта</li>
                    <li>• Расстояние &lt; 50 см → реле + зелёный LED</li>
                    <li>• Человек отошёл → свет выключается</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-3 h-3 rounded-full bg-red-400 shadow-lg shadow-red-500/60" />
                    <p className="font-semibold text-red-400">Контроль температуры (DHT11)</p>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Датчик измеряет температуру и влажность</li>
                    <li>• Температура &gt; 28°C → красный LED</li>
                    <li>• Обновление каждые 500 мс</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { url: PHOTOS.green_led, label: "Зелёный LED — человек рядом", dot: "green" },
                  { url: PHOTOS.red_led2, label: "Красный LED — нагрев пальцем", dot: "red" },
                  { url: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/4d58379a-ddaf-4782-b577-f11e6ff1bfcd.jpg", label: "Полная работа устройства", dot: "both" },
                ].map((p, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-white/10 group">
                    <div className="relative h-36 overflow-hidden">
                      <img src={p.url} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-2 right-2 flex gap-1">
                        {(p.dot === "green" || p.dot === "both") && <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-lg shadow-green-500/80" />}
                        {(p.dot === "red" || p.dot === "both") && <span className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-lg shadow-red-500/80" />}
                      </div>
                    </div>
                    <div className="px-2 py-1.5 bg-white/5 text-center text-xs text-white/50">{p.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── СЛАЙД 7: Программный код ── */}
          {current === 6 && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-4xl font-bold">Программный код</h2>
                <div className="flex gap-3 text-sm text-white/50">
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Среда: Arduino IDE</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Язык: C++</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Управление светом",
                    color: "#22c55e",
                    code: `long dist = getDistance();
if (dist > 0 && dist < 50) {
  // свет включён
  digitalWrite(RELAY_LIGHT, LOW);
  digitalWrite(LED_GREEN, HIGH);
  Serial.println(
    "Человек рядом — свет включён"
  );
} else {
  // свет выключен
  digitalWrite(RELAY_LIGHT, HIGH);
  digitalWrite(LED_GREEN, LOW);
}`,
                  },
                  {
                    title: "Контроль температуры",
                    color: "#ef4444",
                    code: `float temp = dht.readTemperature();
float hum  = dht.readHumidity();

Serial.print("Температура: ");
Serial.print(temp);
Serial.print(" °C, Влажность: ");
Serial.println(hum);

if (temp > 28) {
  digitalWrite(LED_RED, HIGH);
  Serial.println("Жарко!");
} else {
  digitalWrite(LED_RED, LOW);
}`,
                  },
                ].map((block, i) => (
                  <div key={i} className="rounded-2xl border overflow-hidden" style={{ borderColor: block.color + "33" }}>
                    <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: block.color + "15" }}>
                      <span className="w-2 h-2 rounded-full" style={{ background: block.color }} />
                      <span className="text-sm font-medium" style={{ color: block.color }}>{block.title}</span>
                    </div>
                    <pre className="p-4 text-xs font-mono text-white/75 bg-[#0a0a0c] leading-relaxed overflow-auto">
                      {block.code}
                    </pre>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white/50 text-sm font-mono">
                  <span className="text-blue-400">getDistance()</span> — отправляет ультразвуковой импульс, считает время эха, возвращает расстояние в сантиметрах.
                  Задержка цикла: <span className="text-yellow-400">500 мс</span>.
                </p>
              </div>
            </div>
          )}

          {/* ── СЛАЙД 8: Результаты тестирования ── */}
          {current === 7 && (
            <div>
              <h2 className="text-4xl font-bold mb-6 text-center">Результаты тестирования</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-white/10 text-white/60">
                        <th className="px-4 py-2.5 text-left font-medium">Тест</th>
                        <th className="px-4 py-2.5 text-left font-medium">Результат</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { test: "Рука к HC-SR04 < 50 см", result: "✅ Зелёный LED горит, реле щёлкает" },
                        { test: "Убрать руку", result: "✅ Зелёный гаснет, реле выкл." },
                        { test: "Нагреть DHT11 > 28°C", result: "✅ Красный LED загорается" },
                        { test: "Работа 30 минут", result: "✅ Сбоев не обнаружено" },
                      ].map((row, i) => (
                        <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                          <td className="px-4 py-3 text-white/70">{row.test}</td>
                          <td className="px-4 py-3 text-green-400 text-xs">{row.result}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="rounded-2xl border border-white/10 overflow-hidden flex flex-col">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/40 text-xs font-mono">Serial Monitor — 9600 baud</span>
                  </div>
                  <div className="p-4 bg-[#0a0a0c] space-y-1 text-xs font-mono flex-1 overflow-auto">
                    {[
                      { c: "text-white/40", t: "Система умного дома запущена" },
                      { c: "text-blue-300", t: "Температура: 29.80 °C, Влажность: 98.00 %" },
                      { c: "text-red-400", t: "Жарко — красный светодиод горит" },
                      { c: "text-yellow-300", t: "Расстояние: 373 см" },
                      { c: "text-blue-300", t: "Температура: 29.80 °C, Влажность: 95.00 %" },
                      { c: "text-red-400", t: "Жарко — красный светодиод горит" },
                      { c: "text-yellow-300", t: "Расстояние: 56 см" },
                      { c: "text-green-400", t: "Человек рядом — свет включён" },
                    ].map((l, i) => (
                      <div key={i} className="flex gap-2">
                        <span className="text-white/20">&gt;</span>
                        <span className={l.c}>{l.t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── СЛАЙД 9: Экономическая эффективность ── */}
          {current === 8 && (
            <div>
              <h2 className="text-4xl font-bold mb-8 text-center">Экономическая эффективность</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="rounded-2xl overflow-hidden border border-white/10 mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white/10 text-white/60">
                          <th className="px-5 py-3 text-left font-medium">Решение</th>
                          <th className="px-5 py-3 text-right font-medium">Стоимость</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: "Мой проект (Arduino)", price: "2 500 ₽", color: "#22c55e", bold: true },
                          { name: "Xiaomi Starter Kit", price: "от 5 000 ₽", color: "#f59e0b", bold: false },
                          { name: "Яндекс Умный дом", price: "от 15 000 ₽", color: "#ef4444", bold: false },
                        ].map((row, i) => (
                          <tr key={i} className="border-t border-white/5">
                            <td className="px-5 py-3" style={{ color: row.bold ? row.color : "rgba(255,255,255,0.7)" }}>
                              {row.bold ? <strong>{row.name}</strong> : row.name}
                            </td>
                            <td className="px-5 py-3 text-right font-mono text-sm" style={{ color: row.color }}>
                              {row.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="text-green-400 font-semibold text-sm">Экономия до 80% vs Яндекс, до 50% vs Xiaomi</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-white/50 text-sm mb-4">Дополнительные преимущества:</p>
                  {[
                    { icon: "WifiOff", color: "#22c55e", text: "Нет зависимости от облачных серверов и интернета" },
                    { icon: "Shield", color: "#3b82f6", text: "Полный контроль над системой и данными" },
                    { icon: "Plus", color: "#a855f7", text: "Возможность расширения в любой момент" },
                    { icon: "GraduationCap", color: "#f59e0b", text: "Обучающая ценность — понимание электроники" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: item.color + "22" }}>
                        <Icon name={item.icon} size={18} style={{ color: item.color }} />
                      </div>
                      <p className="text-white/75 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── СЛАЙД 10: Возможности расширения ── */}
          {current === 9 && (
            <div>
              <h2 className="text-4xl font-bold mb-3 text-center">Возможности расширения</h2>
              <p className="text-white/40 text-center text-sm mb-7">В наборе уже есть компоненты для дальнейшего развития системы</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: "CreditCard", color: "#a855f7", module: "RFID-модуль", desc: "Доступ в помещение по картам или брелокам" },
                  { icon: "Monitor", color: "#3b82f6", module: "ЖК-дисплей 1602", desc: "Отображение температуры, влажности и расстояния в реальном времени" },
                  { icon: "Clock", color: "#f59e0b", module: "Часы реального времени DS1302", desc: "Автоматизация освещения по расписанию" },
                  { icon: "Radio", color: "#22c55e", module: "ИК-приёмник и пульт", desc: "Управление всей системой с пульта дистанционного управления" },
                  { icon: "Layers", color: "#ef4444", module: "Сервопривод SG90", desc: "Автоматическое открытие штор, замков или вентиляционных люков" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: item.color + "22" }}>
                      <Icon name={item.icon} size={22} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.module}</p>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                    <div className="ml-auto shrink-0">
                      <span className="px-2 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-white/40">есть в наборе</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── СЛАЙД 11: Заключение ── */}
          {current === 10 && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-10 text-center">Заключение</h2>
              <div className="space-y-3">
                {[
                  { icon: "CheckCircle", color: "#22c55e", text: "Цель достигнута: разработан и собран работающий прототип системы «Умный дом»" },
                  { icon: "CheckCircle", color: "#22c55e", text: "Система автоматически управляет освещением при приближении человека" },
                  { icon: "CheckCircle", color: "#22c55e", text: "Реализована сигнализация о превышении температуры выше 28°C" },
                  { icon: "TrendingDown", color: "#3b82f6", text: "Самостоятельная сборка оказалась выгоднее готовых решений (экономия до 80%)" },
                  { icon: "Sparkles", color: "#a855f7", text: "Набор позволяет легко расширять систему: RFID, дисплей, часы и многое другое" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                    <Icon name={item.icon} size={22} style={{ color: item.color }} className="shrink-0 mt-0.5" />
                    <p className="text-white/80 text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── СЛАЙД 12: Спасибо ── */}
          {current === 11 && (
            <div className="flex flex-col items-center justify-center min-h-[500px] text-center">
              <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-8">
                <Icon name="Cpu" size={36} className="text-blue-400" />
              </div>
              <h2 className="text-6xl font-bold mb-4">Спасибо за внимание!</h2>

              <p className="text-white/25 text-sm mb-10">Проект «Умный дом на Arduino» · 2026</p>
              <div className="flex justify-center gap-3 flex-wrap">
                {["Arduino Uno R3", "DHT11", "HC-SR04", "Реле", "C++", "Arduino IDE"].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm">{t}</span>
                ))}
              </div>
            </div>
          )}

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