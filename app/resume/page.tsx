import Link from "next/link";

export const metadata = {
  title: "이력서 · 김서현",
  description: "결제·정산 도메인 PM 김서현의 이력서",
};

const experience = [
  {
    company: "(주)엑스트라이버 트립스토어",
    role: "Product Manager",
    period: "2021.10 – 현재",
    duration: "4년 8개월",
    items: [
      "14개 여행사 예약상태 실시간 연동 시스템 설계 · 주도 (API 정책, 상태 매핑, 예외 처리)",
      "트립결제 도입 프로젝트 QA 담당 — 자체 결제 시스템 최초 런칭",
      "PG 정산대사 연동 관련 업무 정리 및 문서화 주도",
      "여행사 정산 시스템 구축 · 입출금 시스템 구축 기획",
      "멀티PG 구조 설계 및 결제수단 확장 기획",
      "결제·정산 도메인 전반 Product Owner 역할 수행",
    ],
  },
  {
    company: "Pion Corporation",
    role: "Product Owner",
    period: "2024.07 – 2024.09",
    duration: "3개월",
    items: [
      "프로덕트 요구사항 정의 및 스프린트 운영",
    ],
  },
  {
    company: "줄릭파마코리아",
    role: "임상연구원 (CRA)",
    period: "2020.03 – 2021.06",
    duration: "1년 4개월",
    items: [
      "임상시험 모니터링 및 데이터 품질 관리",
      "국내외 제약사 협력 프로젝트 참여",
    ],
  },
];

const education = {
  school: "SolBridge International Business School",
  major: "국제경영학과 (중국어학과 부전공)",
  period: "2016.02 – 2020.02",
  gpa: "GPA 3.73 / 4.5",
  awards: [
    "SolBridge Business Plan Competition 우수상 (2018, 2019)",
  ],
};

const skills = {
  PM: ["Figma", "Notion", "Jira", "UX 와이어프레임"],
  개발협업: ["MySQL", "Postman", "GitHub", "Azure"],
  데이터: ["Amplitude", "Braze"],
  커뮤니케이션: ["Slack"],
};

const languages = [
  { name: "한국어", level: "원어민" },
  { name: "영어", level: "비즈니스 — OPIc AL · TOEIC 915" },
  { name: "중국어", level: "비즈니스 — 新HSK 4급" },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur border-b border-gray-100 z-10">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/pm-portfolio" className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">
            ← 포트폴리오
          </Link>
          <span className="text-sm text-gray-400">이력서</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="border-b border-gray-100 pb-10 mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">김서현</h1>
          <p className="text-lg text-blue-600 font-medium mb-4">Product Manager · 결제/정산 도메인</p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
            편안한 협업을 더하는 PM입니다. 트립스토어에서 결제 인프라를 처음부터 함께 쌓아왔고,
            복잡한 도메인일수록 책임감 있게 맥락을 정리하고 팀을 연결하는 역할을 해왔습니다.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-500">
            <a href="mailto:soyhoney@tripstore.kr" className="hover:text-blue-600 transition-colors">
              soyhoney@tripstore.kr
            </a>
          </div>
        </div>

        {/* Experience */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">경력</h2>
          <div className="space-y-10">
            {experience.map((exp) => (
              <div key={exp.company} className="grid grid-cols-[1fr_2fr] gap-8">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{exp.company}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{exp.role}</p>
                  <p className="text-xs text-gray-400 mt-1">{exp.period}</p>
                  <p className="text-xs text-gray-400">{exp.duration}</p>
                </div>
                <ul className="space-y-2">
                  {exp.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-gray-300 mt-1 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">학력</h2>
          <div className="grid grid-cols-[1fr_2fr] gap-8">
            <div>
              <p className="text-sm font-semibold text-gray-900">{education.school}</p>
              <p className="text-xs text-gray-400 mt-1">{education.period}</p>
              <p className="text-xs text-gray-400">{education.gpa}</p>
            </div>
            <div>
              <p className="text-sm text-gray-700">{education.major}</p>
              <ul className="mt-3 space-y-1">
                {education.awards.map((award, i) => (
                  <li key={i} className="text-sm text-gray-500 flex gap-2">
                    <span className="text-gray-300 mt-1 shrink-0">—</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">스킬</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs font-medium text-gray-400 mb-3">{category}</p>
                <ul className="space-y-1.5">
                  {items.map((skill) => (
                    <li key={skill} className="text-sm text-gray-700">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">어학</h2>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div key={lang.name} className="flex gap-6">
                <span className="text-sm font-medium text-gray-900 w-16 shrink-0">{lang.name}</span>
                <span className="text-sm text-gray-500">{lang.level}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
