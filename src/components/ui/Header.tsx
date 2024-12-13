import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <nav className="w-full bg-navground fixed top-0 z-100">
      <div className="max-w-[1600px] mx-auto flex justify-around items-center py-4 px-6 text-foreground font-bold">
        <Link href="/">홈</Link>
        <Link href="/champions">챔피언 목록</Link>
        <Link href="/items">아이템 목록</Link>
        <Link href="/rotation">챔피언 로테이션</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;
