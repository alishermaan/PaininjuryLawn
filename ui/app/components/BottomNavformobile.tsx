import React from "react";
import {
  Sparkles,
  Briefcase,
  FileSignature,
  MoreHorizontal,
} from "lucide-react";

export default function BottomNavformobile() {
  return (
    <>
      {" "}
      <nav className="fixed bottom-0 left-0 right-0 z-20 flex md:hidden items-center justify-around py-4  bg-white/20 shadow-lg border-t border-gray-300/50 backdrop-blur-lg">
        <div className="flex flex-col items-center text-xs text-purple-500">
          <img src="./mobsparkles.svg" alt="" />
          <span>Ai Assistant</span>
        </div>
        <div className="flex flex-col items-center text-xs text-gray-600 cursor-pointer">
          <img src="./Mail.svg" alt="" />
          <span>Claims</span>
        </div>
        <div className="flex flex-col items-center text-xs text-gray-600 cursor-pointer">
          <img src="./mobdocument.svg" alt="" />
          <span>Documents</span>
        </div>
        <div className="flex flex-col items-center text-xs text-gray-600 cursor-pointer">
          <img src="/dot.svg" alt="" />
          <span>More</span>
        </div>
      </nav>
    </>
  );
}
