import React from "react";
import { useState } from "react";
import {
  Bot,
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

export default function Navbarandmain() {
  const [chatInput, setChatInput] = useState("");
  return (
    <>
      <div className="relative z-10 flex-1 flex flex-col overflow-y-hidden">
        <header className="flex-shrink-0 w-full flex  justify-between p-4 md:p-6 ">
          <div className="font-bold h-full w-full  text-white py-2 rounded-xl     cursor-pointer">
            <img
              src="logo.svg"
              className="h-8 sm:h-6 md:h-8 lg:h-10 xl:h-12 2xl:h-14"
              alt="Logo//:PainInjuryLawn.com"
            />
          </div>
          <div className="flex items-center space-x-4">
            {/* User Profile and Bell Icons - visible on desktop */}
            <div className="md:flex hidden items-center space-x-4">
              <img src="./Notify.svg" className="w-16 h-16" alt="" />
              <img src="./Profile.svg" className="w-16 h-16" alt="" />
            </div>
            {/* Bell Icon for mobile only */}
            <div className="md:hidden flex">
              <img src="./Notify.svg" className="w-12 h-12" alt="" />
            </div>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-2 sm:p-4">
          <div
            className="flex flex-col w-full max-w-[22rem] sm:max-w-[30rem] md:max-w-[45rem] lg:max-w-[55rem] 
        h-[70vh] md:h-[85vh] lg:h-[80vh] 
        p-4 sm:p-6 md:p-8 rounded-3xl  md:bg-white/10               /* just a faint glass tint */  
           md:shadow-lg"
          >
            {/* Content Container */}
            <div className="flex flex-col items-center space-y-4 sm:space-y-6 ">
              {/* Profile Image */}
              <img
                src="/icon.png"
                className="h-28 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-full object-cover"
                alt="profile orb"
              />

              {/* Title & Subtitle */}
              <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-900 caladea-regular">
                Hello Ali Sheer
              </h1>
              <p className="text-lg  md:text-2xl leading-0.5 lg:text-4xl text-gray-700 caladea-regular text-center">
                How can I assist you today?
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col items-center space-y-3 sm:space-y-4 mt-4 w-full">
                <button className="flex items-center w-auto rounded-md bg-white/60 text-gray-800 border border-gray-300">
                  <span className="text-xs sm:text-sm md:text-base font-medium truncate px-2">
                    Continue, June 23, 2025 Car Accident Claim for Kashif
                  </span>
                  <span className="mr-0  p-2  bg-purple-700/70   text-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 17 5-5-5-5" />
                      <path d="m13 17 5-5-5-5" />
                    </svg>
                  </span>
                </button>

                <button className="flex items-center w-auto  gap-5 rounded-md bg-white/60 text-gray-800 border border-gray-300">
                  <span className="text-xs sm:text-sm md:text-base font-medium px-2">
                    Complete Profile
                  </span>
                  <span className="mr-0  p-2 bg-purple-600/70  text-white  flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 17 5-5-5-5" />
                      <path d="m13 17 5-5-5-5" />
                    </svg>
                  </span>
                </button>
              </div>

              
            </div>

            {/* Chat Input at Bottom */}
            <div className="w-full flex items-center  mt-auto  relative">
              <input
                type="text"
                className="flex-1 bg-white md:px-6 md:py-4 py-2 px-6 w-[20px]  text-gray-900 rounded-full"
                placeholder="Ask anything..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <img
                src="./Frame.svg"
                className="w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                alt="send"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
