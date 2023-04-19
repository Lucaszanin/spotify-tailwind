import React from "react";
import {
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {" "}
        <Image
          className="w-full"
          src="/album-iron.jpg"
          alt="Capa do Album"
          width={56}
          height={56}
        />
        <div className="flex flex-col">
          <strong className="font-normal w-28">Fear of the dark</strong>
          <span className="text-xs text-zinc-400">Iron Maiden</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="p-2 rounded-full bg-white text-black ml-auto w-10 h-10 flex items-center justify-center">
            <Play className="text-black" />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">3:14</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
