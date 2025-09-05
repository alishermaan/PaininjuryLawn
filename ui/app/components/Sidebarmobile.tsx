import React from "react";
import {
  Sparkles,
  Mail,
  FileText,
  Bell,
  User,
  Mic,
  Send,
  MessageSquare,
  Briefcase,
  FileSignature,
  MoreHorizontal,
} from "lucide-react";

export default function Sidebarmobile() {
  return (
    <>
      <aside
        className="
    fixed left-0 top-30 z-20
    h-screen w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36
    hidden md:flex flex-col justify-between
    bg-white/10 backdrop-blur-xl border-r border-white/20
    transition-all duration-300
  "
      >
        {/* Top section */}
        <div
          className="
      flex flex-col items-center justify-start
      gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16
      py-6
    "
        >
          {/* Sparkles */}
          <div
            className="
        w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-22 2xl:h-22
        flex items-center justify-center
        rounded-xl  text-purple-400
      "
          >
            <img src="./sparkles.svg" className="w-40 h-40" alt="" />
          </div>

          {/* Mail */}
          <div
            className="
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24
        flex items-center justify-center
        rounded-xl transition-colors duration-200 hover:bg-gray-200 cursor-pointer
      "
          >
            <img src="./All Claims.svg" className="w-40 h-40" alt="" />
          </div>

          {/* FileText */}
          <div
            className="
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24
        flex items-center justify-center
        rounded-xl transition-colors duration-200 hover:bg-gray-200 cursor-pointer
      "
          >
            <img src="./Documents.svg" className="w-40 h-40" alt="" />
          </div>
        </div>

        {/* Bottom section */}
        <div className="hidden md:flex flex-col items-center pb-60">
          <div
            className=" w-16 h-16 flex items-center justify-center"
          >
            <img
              className="w-12 h-12 text-white"
              src="./questionMark.svg"
              alt=""
            />
          </div>
        </div>
      </aside>
    </>
  );
}
