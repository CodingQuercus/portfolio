"use client";

import { useEffect, useState } from "react";
import { FaHome, FaUser, FaSuitcase, FaEnvelope } from "react-icons/fa";

const navItems = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "about", label: "About Me", icon: FaUser },
  { id: "projects", label: "Projects", icon: FaSuitcase },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

export default function Header() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => io.observe(s));

    const hash = window.location.hash.replace("#", "");
    if (hash && navItems.some((n) => n.id === hash)) setActive(hash);

    return () => io.disconnect();
  }, []);

  const handleClick = (id: string) => () => setActive(id);

  return (
    <nav className="fixed bg-[#28282880] left-1/2 -translate-x-1/2 top-4 px-4 h-12 z-50 flex items-center justify-center rounded-full backdrop-blur-md">
      <ul className="flex gap-8 sm:gap-2 justify-center items-center">
        {navItems.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={handleClick(id)}
              className={`flex items-center gap-2 px-4 py-2 sm:w-32 justify-center rounded-full hover:bg-[#328e6e] transition ${
                active === id ? "bg-[#f3f3f3] text-[#328e6e]" : ""
              }`}
            >
              <Icon />
              <span className="hidden sm:inline">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
