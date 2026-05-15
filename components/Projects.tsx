const projects = [
  {
    tag: "결제",
    title: "멀티PG 도입 (토스페이먼츠)",
    role: "Product Owner · QA",
    period: "2026",
    desc: "기존 단일 PG사 구조에서 토스페이먼츠를 추가한 멀티PG 체계로 전환. 여행사그룹별 channelGroupId 설계, PO·QA 전 과정 직접 담당.",
    impact: "연간 약 2,290만원 수수료 절감 (2.51% → 2.48%)",
  },
  {
    tag: "결제",
    title: "카카오뱅크 계좌결제(CMS) 도입",
    role: "PM",
    period: "2026",
    desc: "카카오뱅크 계좌결제 신규 채널 도입 전 과정 기획·오픈. 현금영수증, 취소 플로우, 정산대사 연동까지 포함.",
    impact: "신규 결제 채널 연간 거래 8천만원 기여",
  },
  {
    tag: "정산",
    title: "파트너스 입출금 관리 시스템",
    role: "PM",
    period: "2026.03 완료",
    desc: "여행사별 가상계좌(셀러캐시) 기반 입출금 관리 시스템 설계·오픈. 지급상태 4종 신규 정의, 자동(NICEPAY 호출)·수동 출금 플로우 구축.",
    impact: "인터파크·모두투어 등 여행사 정산 자동화",
  },
  {
    tag: "정산",
    title: "여행사 정산시스템 구축",
    role: "PM",
    period: "2025",
    desc: "정산 판단 기준(출발완료·취소완료), 결제주체별 수수료율 정책, 정산데이터 ID 체계 전체 설계 및 시스템 오픈.",
    impact: "월간 마감 공수 20시간/월 절감 목표",
  },
  {
    tag: "연동",
    title: "여행사 예약상태 API 연동",
    role: "기획·검증 주도",
    period: "2022–2023",
    desc: "수동 엑셀 업로드(정확도 ~80%) 방식을 API 자동 연동으로 전환. 14개 여행사 대상 API 스펙 협의·연동 요청·데이터 검증(6개월) 전 과정 주도. 예약번호 변경 케이스(2.4%) 이슈 발굴 및 정책 의사결정.",
    impact: "예약상태 데이터 정확도 개선 및 수동 운영 제거",
  },
  {
    tag: "결제",
    title: "트립결제 최초 도입",
    role: "QA 담당",
    period: "2022",
    desc: "트립스토어 자체 결제 시스템(트립결제) 최초 도입 시 QA 전 과정 담당. 여행사별 결제 상품 테스트 및 즉시결제 오픈 검증.",
    impact: "트립스토어 자체 결제 시스템 첫 오픈",
  },
];

const tagColor: Record<string, string> = {
  결제: "bg-blue-50 text-blue-600",
  정산: "bg-violet-50 text-violet-600",
  연동: "bg-emerald-50 text-emerald-600",
};

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-12">주요 프로젝트</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColor[p.tag]}`}>
                  {p.tag}
                </span>
                <span className="text-xs text-gray-400">{p.period}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">{p.title}</h3>
              <p className="text-xs text-gray-400 mb-3">{p.role}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
              <div className="pt-3 border-t border-gray-50">
                <p className="text-xs font-semibold text-blue-600">📌 {p.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
