import { Inter } from "next/font/google";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
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
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                alt="Capa do Album"
                width={104}
                height={104}
              />
              <strong>Dark Side of the moon</strong>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              {" "}
              <Image
                src="/album.jpg"
                alt="Capa do Album"
                width={104}
                height={104}
              />
              <strong>Dark Side of the moon</strong>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                alt="Capa do Album"
                width={104}
                height={104}
              />
              <strong>Dark Side of the moon</strong>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                alt="Capa do Album"
                width={104}
                height={104}
              />
              <strong>Dark Side of the moon</strong>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                alt="Capa do Album"
                width={104}
                height={104}
              />
              <strong>Dark Side of the moon</strong>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                alt="Capa do Album"
                width={104}
                height={104}
              />
              <strong>Dark Side of the moon</strong>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        Footer
      </footer>
    </div>
  );
}
