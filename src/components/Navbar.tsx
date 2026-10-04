import React from "react";
import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

export default function Navbar({ visible = true }: { visible?: boolean }) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="px-5 sm:px-8 lg:px-10 pt-5 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 dark:bg-card/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-lg shadow-black/5 border border-white/80 dark:border-border px-3 sm:px-5 py-2 sm:py-3 transition duration-300 hover:scale-105"
        >
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 sm:p-2.5 rounded-lg sm:rounded-xl shadow-md shadow-emerald-200/50 text-white">
            <Leaf className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg text-nagpur-navy dark:text-white leading-tight tracking-tight">
              Eco Move
            </span>
            <span className="text-[9px] sm:text-[11px] font-semibold text-emerald-600 uppercase tracking-[0.2em] leading-tight">
              Nagpur
            </span>
          </div>
        </Link>

      </div>
    </nav>
  );
}
