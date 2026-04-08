import { useState } from "react";
import SlideLayout from "@/components/presentation/SlideLayout";
import SlidesEarly from "@/components/presentation/SlidesEarly";
import SlidesTech from "@/components/presentation/SlidesTech";
import SlidesLate from "@/components/presentation/SlidesLate";

export default function Index() {
  const [current, setCurrent] = useState(0);
  const total = 12;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1));

  return (
    <SlideLayout current={current} total={total} prev={prev} next={next} setCurrent={setCurrent}>
      <SlidesEarly current={current} />
      <SlidesTech current={current} />
      <SlidesLate current={current} />
    </SlideLayout>
  );
}
