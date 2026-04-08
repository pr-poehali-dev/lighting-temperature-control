import Icon from "@/components/ui/icon";

interface Props {
  current: number;
}

export default function SlidesLate({ current }: Props) {
  return (
    <>
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
    </>
  );
}
