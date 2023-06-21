"use client";
import React from "react";
import { navLinks } from "./../../utils/data";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  let caminho = usePathname();
  return (
    <main>
      <ul className="flex">
        {navLinks.map((link, index) => {
          return (
            <li
              className="text-black-300 hover:text-gray-500 px-3 py-2"
              key={index}
            >
              {console.log(link.path, caminho)}
              <a
                href={link.path}
                className={
                  caminho == link.path ? "text-gray-600" : "text-black-300"
                }
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
