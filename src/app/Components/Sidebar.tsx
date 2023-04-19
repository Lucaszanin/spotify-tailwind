import React from "react";
import { Home as HomeIcon, Search, Library } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Libary
        </a>
      </nav>

      <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Eminem Best OF
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is Maneva
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Radio Coldplay
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Rock
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Zanin
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Pop Up
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Lofi Alien Cake
        </a>
      </nav>
    </aside>
  );
}
