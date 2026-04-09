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

      {/* ── СЛАЙД 4: Сроки реализации ── */}
      {current === 3 && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-bold">Сроки реализации проекта</h2>
            <span className="px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-mono">
              1 марта – 24 марта 2026
            </span>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/10 text-white/50">
                  <th className="px-4 py-2.5 text-left font-medium w-8">№</th>
                  <th className="px-4 py-2.5 text-left font-medium">Мероприятие</th>
                  <th className="px-4 py-2.5 text-left font-medium">Срок</th>
                  <th className="px-4 py-2.5 text-left font-medium">Соответствие задачам</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { n: 1, name: "Изучение датчиков DHT11 и HC-SR04", date: "1–5 марта", task: "Задача №1", color: "#3b82f6" },
                  { n: 2, name: "Разработка электрической схемы", date: "6–7 марта", task: "Задача №2", color: "#a855f7" },
                  { n: 3, name: "Написание кода в Arduino IDE", date: "8–12 марта", task: "Задача №3", color: "#f59e0b" },
                  { n: 4, name: "Сборка прототипа на макетной плате", date: "13–15 марта", task: "Задача №4", color: "#22c55e" },
                  { n: 5, name: "Тестирование и отладка", date: "16–18 марта", task: "Задача №5", color: "#22c55e" },
                  { n: 6, name: "Оценка экономической эффективности", date: "19–20 марта", task: "Задача №6", color: "#ef4444" },
                  { n: 7, name: "Оформление презентации", date: "21–24 марта", task: "—", color: "#ffffff" },
                ].map((row) => (
                  <tr key={row.n} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-2.5 text-white/30 font-mono text-xs">{row.n}</td>
                    <td className="px-4 py-2.5 text-white/80">{row.name}</td>
                    <td className="px-4 py-2.5 font-mono text-xs" style={{ color: row.color }}>{row.date}</td>
                    <td className="px-4 py-2.5">
                      <span className="px-2 py-0.5 rounded text-xs" style={{ background: row.color + "22", color: row.color }}>{row.task}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <p className="text-white/60 text-sm">Все мероприятия направлены на достижение цели проекта — создание работающего прототипа системы «Умный дом» к <span className="text-blue-400 font-semibold">24 марта 2026 года</span>.</p>
          </div>
        </div>
      )}

      {/* ── СЛАЙД 5: Команда и роли ── */}
      {current === 4 && (
        <div>
          <h2 className="text-4xl font-bold mb-2 text-center">Команда и роли</h2>
          <p className="text-white/40 text-center text-sm font-mono mb-8">Проект выполняется индивидуально · 1 человек</p>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0">
                  <Icon name="User" size={24} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Тюнин Алексей</p>
                  <p className="text-blue-400 text-sm font-mono">Разработчик</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  "Изучение компонентов и документации",
                  "Разработка электрической схемы",
                  "Написание программного кода",
                  "Сборка прототипа на макетной плате",
                  "Тестирование и отладка",
                  "Оформление презентации",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <Icon name="GraduationCap" size={24} className="text-white/60" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Кардапольцева У.С.</p>
                  <p className="text-white/40 text-sm font-mono">Консультант (преподаватель)</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  "Проверка хода работы",
                  "Ответы на вопросы",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
            <p className="text-white/40 text-sm">Все этапы проекта от изучения до сдачи выполняются одним разработчиком</p>
          </div>
        </div>
      )}

      {/* ── СЛАЙД 6: Целевая аудитория ── */}
      {current === 5 && (
        <div>
          <h2 className="text-4xl font-bold mb-6 text-center">Целевая аудитория</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "Users",
                color: "#3b82f6",
                title: "Демографические признаки",
                items: [
                  "Возраст: 16–22 года",
                  "Пол: мужчины и женщины",
                  "Семейное положение: не в браке",
                  "Уровень дохода: низкий (до 15 000 ₽)",
                ],
              },
              {
                icon: "GraduationCap",
                color: "#a855f7",
                title: "Социальные признаки",
                items: [
                  "Сфера деятельности: студенты",
                  "Образование: неоконченное среднее специальное",
                  "Интересы: технологии, программирование, DIY",
                ],
              },
              {
                icon: "MapPin",
                color: "#22c55e",
                title: "Географические признаки",
                items: [
                  "Город: Самара",
                  "Учреждение: Колледж МВЕК",
                  "Локация: одна учебная группа",
                ],
              },
              {
                icon: "Sparkles",
                color: "#f59e0b",
                title: "Психологические признаки",
                items: [
                  "Активные, любознательные",
                  "Любят делать вещи своими руками",
                  "Хотят сэкономить бюджет",
                  "Ищут практическое применение знаний",
                ],
              },
            ].map((block, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: block.color + "22" }}>
                    <Icon name={block.icon} size={16} style={{ color: block.color }} />
                  </div>
                  <p className="font-semibold text-white text-sm">{block.title}</p>
                </div>
                <div className="space-y-1.5">
                  {block.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-white/65">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: block.color }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── СЛАЙД 8: Комплектация ── */}
      {current === 7 && (
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