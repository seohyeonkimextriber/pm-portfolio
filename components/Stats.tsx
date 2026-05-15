const stats = [
  { value: "2,290만원", label: "연간 수수료 절감", sub: "멀티PG 도입" },
  { value: "8%p", label: "취소전환율 개선", sub: "54% → 46%" },
  { value: "14개사", label: "여행사 API 연동", sub: "예약상태 자동화" },
  { value: "5년+", label: "결제·정산 도메인", sub: "2021~현재" },
];

export default function Stats() {
  return (
    <section className="bg-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-bold text-blue-600">{s.value}</p>
            <p className="text-sm font-semibold text-gray-800 mt-1">{s.label}</p>
            <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
