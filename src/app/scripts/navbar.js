"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/" aria-label="Team Virlab 홈">
          <Image
            src="/team_virlab_logo_big.png"
            width={50}
            height={50}
            alt="Team Virlab 로고"
            priority
          />
        </Link>
        <Link href="/" className="logo_name">
          <h2>Team Virlab</h2>
        </Link>
      </div>

      <div className="spacer" />

      <div className="right-section">
        <div className="page-links">
          <Link href="/" className={isActive("/") ? "active" : ""}>
            홈
          </Link>
          <Link href="/about" className={isActive("/about") ? "active" : ""}>
            소개
          </Link>
          <Link href="/crew" className={isActive("/crew") ? "active" : ""}>
            크루
          </Link>
          <Link href="/contact" className={isActive("/contact") ? "active" : ""}>
            문의
          </Link>
        </div>
      </div>
    </nav>
  );
}
