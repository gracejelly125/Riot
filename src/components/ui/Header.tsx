import Link from "next/link";

const Header = () => {
  return (
    <nav className="w-full bg-gray-800  fixed top-0 z-100">
      <div className="max-w-[1600px] mx-auto flex justify-around py-4 px-6 text-white font-bold">
        <Link href="/">홈</Link>
        <Link href="/champions">챔피언 목록</Link>
        <Link href="/items">아이템 목록</Link>
        <Link href="/rotation">챔피언 로테이션</Link>
      </div>
    </nav>
  );
};

export default Header;
