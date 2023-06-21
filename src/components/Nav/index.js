"use client";
import React from "react";
import { navLinks } from "./../../utils/data";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  let caminho = usePathname();
  return (
    <main>
      <ul className="hidden sm:flex">
        {navLinks.map((link, index) => {
          return (
            <li
              className="text-black-300 hover:text-gray-500 px-6 py-2"
              key={index}
            >
              {console.log(link.path, caminho)}
              <a
                href={link.path}
                className={
                  caminho == link.path ? "text-black-300" : "text-gray-600"
                }
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
      <div class="sm:hidden">
        <button
          type="button"
          class="text-balck-300 hover:text-white focus:outline-none px-5"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </main>
  );
}
