import { Inter } from "next/font/google";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize,
  Maximize2,
} from "lucide-react";
import Image from "next/image";
import { Sidebar } from "./Components/Sidebar";
import { Footer } from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
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
              className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-all group"
            >
              <Image
                src="/album.jpg"
                alt="Capa do Album"
                width={130}
                height={130}
              />
              <strong>Dark Side of the moon</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-all group"
            >
              {" "}
              <Image
                src="/album.jpg"
                alt="Capa do Album"
                width={130}
                height={130}
              />
              <strong>Dark Side of the moon</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-all group"
            >
              <Image
                src="/album.jpg"
                alt="Capa do Album"
                width={130}
                height={130}
              />
              <strong>Dark Side of the moon</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-all group"
            >
              <Image
                src="/album.jpg"
                alt="Capa do Album"
                width={130}
                height={130}
              />
              <strong>Dark Side of the moon</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-all group"
            >
              <Image
                src="/album.jpg"
                alt="Capa do Album"
                width={130}
                height={130}
              />
              <strong>Dark Side of the moon</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-all group"
            >
              <Image
                src="/album.jpg"
                alt="Capa do Album"
                width={130}
                height={130}
              />
              <strong>Dark Side of the moon</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made for Lucas Zanin</h2>
          <div className="grid grid-cols-8 gap-4 mt-4 align-center justify-center">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album-iron.jpg"
                alt="Capa do Album"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm pt-1 text-zinc-400">
                Wallws,Coin,girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album-iron.jpg"
                alt="Capa do Album"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm pt-1 text-zinc-400">
                Wallws,Coin,girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album-iron.jpg"
                alt="Capa do Album"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm pt-1 text-zinc-400">
                Wallws,Coin,girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album-iron.jpg"
                alt="Capa do Album"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm pt-1 text-zinc-400">
                Wallws,Coin,girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album-iron.jpg"
                alt="Capa do Album"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm pt-2 text-zinc-400">
                Wallws,Coin,girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
