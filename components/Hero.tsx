import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-16">
      <p className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4">Product Manager</p>
      <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
        김서현
      </h1>
      <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
        편안한 협업을 더하는 PM. 트립스토어에서 자체 결제 시스템 도입부터
        멀티PG 구조 설계까지, 여행 커머스의 결제 인프라를 처음부터 쌓아왔습니다.
      </p>
      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href="mailto:soyhoney@tripstore.kr"
          className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors"
        >
          연락하기
        </a>
        <a
          href="#projects"
          className="px-6 py-3 border border-gray-200 text-gray-700 text-sm font-semibold rounded-full hover:bg-gray-50 transition-colors"
        >
          프로젝트 보기
        </a>
        <Link
          href="/resume"
          className="px-6 py-3 border border-gray-200 text-gray-700 text-sm font-semibold rounded-full hover:bg-gray-50 transition-colors"
        >
          이력서 보기
        </Link>
      </div>
    </section>
  );
}
