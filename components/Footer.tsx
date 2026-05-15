export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p className="text-sm font-semibold text-gray-900">김서현</p>
          <p className="text-sm text-gray-400">Product Manager · 결제/정산 도메인</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-gray-400">
          <span>soyhoney@tripstore.kr</span>
          <span>2021 – 현재 · (주)엑스트라이버 트립스토어</span>
        </div>
      </div>
    </footer>
  );
}
