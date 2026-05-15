const items = [
  {
    year: "2026",
    title: "결제 인프라 고도화",
    items: [
      "멀티PG 도입 (토스페이먼츠) PO·QA — 연간 2,290만원 수수료 절감",
      "카카오뱅크 계좌결제(CMS) 기획~오픈 — 연간 8천만원 거래 기여",
      "파트너스 입출금 관리 시스템 구축 (가상계좌·자동출금 플로우)",
      "PG 정산대사 연동 구조 문서화 (포트원 다중 PG사 확장 대응)",
    ],
  },
  {
    year: "2025",
    title: "정산 시스템 오픈",
    items: [
      "여행사 정산시스템 신규 구축 및 오픈 — 정산 판단 기준·수수료율 정책 전체 설계",
      "PG 정산 내역 조회 화면 기획",
      "취소완료 전환율 54% → 46% (8%p) 개선",
    ],
  },
  {
    year: "2023–2024",
    title: "채널 확장 및 정산 고도화",
    items: [
      "SSG·우리카드·베네피아 등 채널 연동 정책 수립",
      "정산 검증용 Redash 쿼리 설계 및 지급보증보험 운영 기준 수립",
      "결제 주체 개념(트립스토어/채널/여행사) 정립 및 시스템 통일 방향 설계",
    ],
  },
  {
    year: "2022–2023",
    title: "결제 시스템 기반 구축",
    items: [
      "여행사 예약상태 API 연동 주도 — 14개 여행사 대상 수동 엑셀(정확도 ~80%) → API 자동화 전환. 6개월치 데이터 검증 전 과정 주도",
      "정산 프로세스 반자동화 — Redash 추출 + 수식 적용 정산 시트 설계, 수기 오류 제거",
      "예약금·잔금 분할결제 플로우 기획",
    ],
  },
  {
    year: "2021–2022",
    title: "트립스토어 합류 · 결제 도입",
    items: [
      "트립스토어 자체 결제 시스템(트립결제) 최초 도입 QA 담당",
      "노랑풍선 등 여행사 연동 초기 운영",
    ],
  },
];

export default function Timeline() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-12">경력 타임라인</h2>
      <div className="relative">
        <div className="absolute left-[88px] top-0 bottom-0 w-px bg-gray-100" />
        <div className="space-y-10">
          {items.map((item) => (
            <div key={item.year} className="flex gap-8">
              <div className="w-20 shrink-0 text-right">
                <span className="text-sm font-bold text-blue-600">{item.year}</span>
              </div>
              <div className="relative pb-2">
                <div className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <ul className="space-y-1.5">
                  {item.items.map((i) => (
                    <li key={i} className="text-sm text-gray-500 leading-relaxed flex gap-2">
                      <span className="text-blue-300 shrink-0 mt-1">—</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
