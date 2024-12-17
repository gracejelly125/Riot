"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle((prev) => !prev);
  };

  return (
    <nav className="w-full bg-navground fixed top-0 z-100">
      <div className="hidden md:flex max-w-[1600px] mx-auto justify-around items-center py-4 px-6 text-foreground font-bold">
        <Link href="/">홈</Link>
        <Link href="/champions">챔피언 목록</Link>
        <Link href="/items">아이템 목록</Link>
        <Link href="/rotation">챔피언 로테이션</Link>
        <ThemeToggle />
      </div>

      <div className="flex justify-between items-center py-4 px-6 text-foreground font-bold md:hidden">
        <ThemeToggle />
        <button onClick={toggleMenu}>
          {menuToggle ? <HiOutlineX className="text-xl" /> : <HiOutlineMenu className="text-xl" />}
        </button>
      </div>

      <div
        className={`${
          menuToggle ? "block" : "hidden"
        } md:hidden bg-navground text-foreground font-bold px-6 py-2`}
      >
        <Link href="/" className="block py-2">
          홈
        </Link>
        <Link href="/champions" className="block py-2">
          챔피언 목록
        </Link>
        <Link href="/items" className="block py-2">
          아이템 목록
        </Link>
        <Link href="/rotation" className="block py-2">
          챔피언 로테이션
        </Link>
      </div>
    </nav>
  );
};

export default Header;
