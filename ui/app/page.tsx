"use client";
import { useState } from "react";
import Sidebarmobile from "./components/Sidebarmobile";
import Navbarandmain from "./components/Navbarandmain";
import BottomNavformobile from "./components/BottomNavformobile";

export default function App() {
  // Main UI component
  return (
    <div className="flex h-screen bg-[url('/Background.png')] bg-cover bg-center relative text-gray-900 font-sans">
      {/* Background Gradient & Blur Effect */}
 <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-100/40 via-purple-200/30 to-purple-400/20 backdrop-blur-2xl"></div>



      {/* Desktop Sidebar - Hidden on mobile */}
      <Sidebarmobile />

      {/* Main Content Area */}

      <Navbarandmain />
      {/* Mobile Bottom Navigation - Hidden on desktop */}

      <BottomNavformobile />
    </div>
  );
}
