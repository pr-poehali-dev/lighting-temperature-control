import { useState } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 1,
    type: "title",
    title: "Умный дом",
    subtitle: "на Arduino Uno",
    meta: "Проект по информатике · 2026",
    description: "Автоматизация освещения и мониторинг температуры с помощью микроконтроллера",
  },
  {
    id: 2,
    type: "goal",
    title: "Цель проекта",
    items: [
      { icon: "Target", text: "Создать систему умного дома на базе Arduino Uno" },
      { icon: "Thermometer", text: "Мониторинг температуры и влажности через DHT11" },
      { icon: "Radar", text: "Управление светом по датчику расстояния HC-SR04" },
      { icon: "Zap", text: "Реле для управления электроприборами" },
    ],
  },
  {
    id: 3,
    type: "tasks",
    title: "Задачи",
    items: [
      "Изучить компоненты Arduino-набора",
      "Разработать схему подключения датчиков",
      "Написать программный код на C++",
      "Собрать и протестировать устройство",
      "Проверить работу всех датчиков",
    ],
  },
  {
    id: 4,
    type: "components",
    title: "Комплектация набора",
    photos: [
      {
        url: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/c8da77f0-6330-41b6-bbc9-ab94462b4c09.png",
        label: "Коробка с набором",
      },
      {
        url: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/2c7b949f-e7f6-447c-b71e-ad05b240f35a.jpg",
        label: "Все компоненты",
      },
      {
        url: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/d18b5eaa-9df8-4852-a265-9ff665774f07.jpg",
        label: "Arduino Uno",
      },
      {
        url: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/015bd786-d02a-4ea5-bbad-b9d01a2e80fc.jpg",
        label: "Датчик DHT11",
      },
      {
        url: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/a0538f7b-4537-46d1-a59a-1d30b40f8010.jpg",
        label: "Датчик HC-SR04",
      },
      {
        url: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/30e80a09-eb19-4c4c-8d09-6702531be710.jpg",
        label: "Реле SRD-05VDC",
      },
    ],
  },
  {
    id: 5,
    type: "wiring",
    title: "Схема подключения",
    photos: [
      {
        url: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/7113582e-f319-4004-b555-86908cb7a2a0.jpg",
        label: "Макетная плата",
      },
      {
        url: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/68fd8c13-4f2b-40d2-aa71-2ee478f29a21.jpg",
        label: "Собранная схема",
      },
    ],
    connections: [
      { pin: "D2", component: "DHT11", color: "#22c55e" },
      { pin: "D3", component: "HC-SR04 TRIG", color: "#3b82f6" },
      { pin: "D4", component: "HC-SR04 ECHO", color: "#3b82f6" },
      { pin: "D5", component: "Реле (свет)", color: "#f59e0b" },
      { pin: "D6", component: "LED Зелёный", color: "#22c55e" },
      { pin: "D7", component: "LED Красный", color: "#ef4444" },
    ],
  },
  {
    id: 6,
    type: "working",
    title: "Принцип работы",
    photos: [
      {
        url: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/9aa69a04-6e57-44df-9044-8e406267b04d.jpg",
        label: "Зелёный LED — человек рядом (< 50 см)",
        color: "green",
      },
      {
        url: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/40e9f7b1-cf79-4ff3-9a5f-34a06d37b294.jpg",
        label: "Красный LED — температура выше 28°C",
        color: "red",
      },
      {
        url: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/e434414d-61db-4a5b-aa7e-e2610a7864e4.jpg",
        label: "Нагрев DHT11 пальцем",
        color: "red",
      },
      {
        url: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/dfcdd5a0-e0f7-432d-8a68-de8140a91d03.jpg",
        label: "Полная работа устройства",
        color: "both",
      },
    ],
  },
  {
    id: 7,
    type: "code",
    title: "Программный код",
    code: `#include <DHT.h>

#define DHTPIN 2
#define DHTTYPE DHT11
#define TRIG_PIN 3
#define ECHO_PIN 4
#define RELAY_LIGHT 5
#define LED_GREEN 6
#define LED_RED 7

DHT dht(DHTPIN, DHTTYPE);

long getDistance() {
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  long duration = pulseIn(ECHO_PIN, HIGH);
  return duration * 0.034 / 2;
}

void loop() {
  float temp = dht.readTemperature();
  float hum  = dht.readHumidity();

  // Температурный контроль
  if (temp > 28) {
    digitalWrite(LED_RED, HIGH); // жарко
  } else {
    digitalWrite(LED_RED, LOW);
  }

  // Датчик движения/расстояния
  long dist = getDistance();
  if (dist > 0 && dist < 50) {
    digitalWrite(RELAY_LIGHT, LOW);  // свет ВКЛ
    digitalWrite(LED_GREEN, HIGH);
  } else {
    digitalWrite(RELAY_LIGHT, HIGH); // свет ВЫКЛ
    digitalWrite(LED_GREEN, LOW);
  }
  delay(500);
}`,
  },
  {
    id: 8,
    type: "results",
    title: "Результаты тестирования",
    photo: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/c8da77f0-6330-41b6-bbc9-ab94462b4c09.png",
    logs: [
      { type: "info", text: "Система умного дома запущена" },
      { type: "temp", text: "Температура: 29.80 °C, Влажность: 98.00 %" },
      { type: "warn", text: "Жарко — красный светодиод горит" },
      { type: "dist", text: "Расстояние: 373 см" },
      { type: "temp", text: "Температура: 29.80 °C, Влажность: 95.00 %" },
      { type: "warn", text: "Жарко — красный светодиод горит" },
      { type: "dist", text: "Расстояние: 373 см" },
      { type: "temp", text: "Температура: 29.80 °C, Влажность: 95.00 %" },
      { type: "warn", text: "Жарко — красный светодиод горит" },
      { type: "dist", text: "Расстояние: 56 см" },
      { type: "ok", text: "Человек рядом — свет включён" },
    ],
  },
  {
    id: 9,
    type: "analysis",
    title: "Анализ результатов",
    items: [
      { icon: "CheckCircle", color: "#22c55e", text: "DHT11 точно фиксирует температуру и влажность" },
      { icon: "CheckCircle", color: "#22c55e", text: "HC-SR04 надёжно определяет расстояние до 4 м" },
      { icon: "CheckCircle", color: "#22c55e", text: "Реле корректно управляет нагрузкой" },
      { icon: "CheckCircle", color: "#22c55e", text: "Светодиоды работают как индикаторы состояния" },
      { icon: "AlertCircle", color: "#f59e0b", text: "При влажности выше 95% точность DHT11 снижается" },
    ],
  },
  {
    id: 10,
    type: "conclusion",
    title: "Заключение",
    items: [
      "Проект успешно реализован и протестирован",
      "Все датчики работают в штатном режиме",
      "Система реагирует на присутствие человека",
      "Автоматический контроль температуры настроен",
      "Возможно расширение: Wi-Fi, дисплей, больше датчиков",
    ],
  },
  {
    id: 11,
    type: "thanks",
    title: "Спасибо за внимание!",
    photo: "https://cdn.poehali.dev/projects/2f5b3a5e-e68a-49d3-9344-52c25d82c7cf/bucket/dfcdd5a0-e0f7-432d-8a68-de8140a91d03.jpg",
  },
];

export default function Index() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white flex flex-col" style={{ fontFamily: "'Golos Text', sans-serif" }}>
      {/* Progress bar */}
      <div className="h-1 bg-white/10 w-full">
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide counter */}
      <div className="flex items-center justify-between px-8 py-4 text-white/40 text-sm font-mono">
        <span>Умный дом · Arduino</span>
        <span>{current + 1} / {slides.length}</span>
      </div>

      {/* Slide content */}
      <div className="flex-1 flex items-center justify-center px-6 py-4">
        <div key={current} className="w-full max-w-5xl animate-fade-in">

          {/* TITLE */}
          {slide.type === "title" && (
            <div className="text-center py-16">
              <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/40 text-blue-400 text-sm mb-8 font-mono">
                {slide.meta}
              </div>
              <h1 className="text-7xl font-bold mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-5xl text-blue-400 font-light mb-8">{slide.subtitle}</p>
              <p className="text-white/50 text-lg max-w-xl mx-auto">{slide.description}</p>
              <div className="flex justify-center gap-6 mt-12">
                {["Arduino Uno", "DHT11", "HC-SR04", "Реле"].map((c) => (
                  <span key={c} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60 text-sm">{c}</span>
                ))}
              </div>
            </div>
          )}

          {/* GOAL */}
          {slide.type === "goal" && (
            <div>
              <h2 className="text-4xl font-bold mb-10 text-center">{slide.title}</h2>
              <div className="grid grid-cols-2 gap-4">
                {slide.items?.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Icon name={item.icon} size={20} className="text-blue-400" />
                    </div>
                    <p className="text-white/80 text-lg leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TASKS */}
          {slide.type === "tasks" && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-10 text-center">{slide.title}</h2>
              <div className="space-y-3">
                {slide.items?.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                    <span className="w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-white/80 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* COMPONENTS */}
          {slide.type === "components" && (
            <div>
              <h2 className="text-4xl font-bold mb-8 text-center">{slide.title}</h2>
              <div className="grid grid-cols-3 gap-4">
                {slide.photos?.map((p, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-white/10 group">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={p.url}
                        alt={p.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="px-3 py-2 bg-white/5 text-center text-sm text-white/60">{p.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* WIRING */}
          {slide.type === "wiring" && (
            <div>
              <h2 className="text-4xl font-bold mb-8 text-center">{slide.title}</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  {slide.connections?.map((c, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <span
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold"
                        style={{ background: c.color + "22", color: c.color, border: `1px solid ${c.color}44` }}
                      >
                        {c.pin}
                      </span>
                      <span className="text-white/70">{c.component}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {slide.photos?.map((p, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden border border-white/10">
                      <div className="aspect-video overflow-hidden">
                        <img src={p.url} alt={p.label} className="w-full h-full object-cover" />
                      </div>
                      <div className="px-3 py-2 bg-white/5 text-sm text-white/60 text-center">{p.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* WORKING */}
          {slide.type === "working" && (
            <div>
              <h2 className="text-4xl font-bold mb-8 text-center">{slide.title}</h2>
              <div className="grid grid-cols-2 gap-4">
                {slide.photos?.map((p, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-white/10 group">
                    <div className="aspect-video overflow-hidden relative">
                      <img src={p.url} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-2 right-2">
                        {p.color === "green" && <span className="w-3 h-3 rounded-full bg-green-400 block shadow-lg shadow-green-500/60" />}
                        {p.color === "red" && <span className="w-3 h-3 rounded-full bg-red-400 block shadow-lg shadow-red-500/60" />}
                        {p.color === "both" && (
                          <div className="flex gap-1">
                            <span className="w-3 h-3 rounded-full bg-green-400 block shadow-lg shadow-green-500/60" />
                            <span className="w-3 h-3 rounded-full bg-red-400 block shadow-lg shadow-red-500/60" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="px-3 py-2 bg-white/5 text-sm text-white/60 text-center">{p.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CODE */}
          {slide.type === "code" && (
            <div>
              <h2 className="text-4xl font-bold mb-6 text-center">{slide.title}</h2>
              <div className="rounded-2xl border border-white/10 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-white/40 text-sm font-mono">smart_home.ino</span>
                </div>
                <pre className="p-5 text-sm font-mono text-white/80 overflow-auto max-h-96 leading-relaxed bg-[#0a0a0c]">
                  {slide.code?.split("\n").map((line, i) => {
                    const isComment = line.trim().startsWith("//");
                    const isKeyword = /^\s*(#include|#define|void|long|float|if|else|return|int)/.test(line);
                    return (
                      <div key={i} className="flex gap-4">
                        <span className="text-white/20 select-none w-5 text-right shrink-0">{i + 1}</span>
                        <span
                          className={
                            isComment ? "text-white/30 italic" :
                            isKeyword ? "text-blue-400" :
                            "text-white/80"
                          }
                        >
                          {line || " "}
                        </span>
                      </div>
                    );
                  })}
                </pre>
              </div>
            </div>
          )}

          {/* RESULTS */}
          {slide.type === "results" && (
            <div>
              <h2 className="text-4xl font-bold mb-6 text-center">{slide.title}</h2>
              <div className="rounded-2xl border border-white/10 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                  <span className="text-white/40 text-sm font-mono">Serial Monitor — 9600 baud</span>
                </div>
                <div className="p-5 bg-[#0a0a0c] space-y-1.5 max-h-96 overflow-auto font-mono text-sm">
                  {slide.logs?.map((log, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-white/20 shrink-0">&gt;</span>
                      <span className={
                        log.type === "warn" ? "text-red-400" :
                        log.type === "ok" ? "text-green-400" :
                        log.type === "temp" ? "text-blue-300" :
                        log.type === "dist" ? "text-yellow-300" :
                        "text-white/50"
                      }>
                        {log.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ANALYSIS */}
          {slide.type === "analysis" && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-10 text-center">{slide.title}</h2>
              <div className="space-y-4">
                {slide.items?.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                    <Icon
                      name={item.icon}
                      size={22}
                      style={{ color: item.color }}
                      className="shrink-0"
                    />
                    <p className="text-white/80 text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONCLUSION */}
          {slide.type === "conclusion" && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-10 text-center">{slide.title}</h2>
              <div className="space-y-3">
                {slide.items?.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                    <Icon name="ChevronRight" size={18} className="text-blue-400 shrink-0" />
                    <p className="text-white/80 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* THANKS */}
          {slide.type === "thanks" && (
            <div className="text-center py-8">
              <div className="mx-auto w-72 h-48 rounded-2xl overflow-hidden border border-white/10 mb-10">
                <img src={slide.photo} alt="Устройство" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-6xl font-bold mb-4">{slide.title}</h2>
              <p className="text-white/40 text-xl">Проект «Умный дом на Arduino» · 2026</p>
              <div className="flex justify-center gap-4 mt-8">
                {["Arduino Uno", "DHT11", "HC-SR04", "Реле"].map((c) => (
                  <span key={c} className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm">{c}</span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between px-8 py-6">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <Icon name="ChevronLeft" size={18} />
          Назад
        </button>

        {/* Dots */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
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
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          Далее
          <Icon name="ChevronRight" size={18} />
        </button>
      </div>
    </div>
  );
}