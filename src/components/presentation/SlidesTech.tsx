import Icon from "@/components/ui/icon";

const PHOTOS = {
  assembled1: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/68fd8c13-4f2b-40d2-aa71-2ee478f29a21.jpg",
  breadboard: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/7113582e-f319-4004-b555-86908cb7a2a0.jpg",
  green_led: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/9aa69a04-6e57-44df-9044-8e406267b04d.jpg",
  red_led2: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/e434414d-61db-4a5b-aa7e-e2610a7864e4.jpg",
};

interface Props {
  current: number;
}

export default function SlidesTech({ current }: Props) {
  return (
    <>
      {/* ── СЛАЙД 6: Схема подключения ── */}
      {current === 5 && (
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

      {/* ── СЛАЙД 7: Принцип работы ── */}
      {current === 6 && (
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

      {/* ── СЛАЙД 8: Программный код ── */}
      {current === 7 && (
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

      {/* ── СЛАЙД 9: Результаты тестирования ── */}
      {current === 8 && (
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
    </>
  );
}