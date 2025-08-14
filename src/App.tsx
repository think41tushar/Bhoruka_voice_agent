"use client"

import { useState } from "react"
import VoiceAgent from "./components/voice-agent"

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <main
      className={`min-h-screen p-6 flex flex-col items-center justify-center transition-all duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
      }`}
    >
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isDarkMode ? "bg-slate-700 text-yellow-400 hover:bg-slate-600" : "bg-white text-slate-600 hover:bg-slate-50"
        }`}
      >
        {isDarkMode ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>

      <div className="text-center mb-8 space-y-4">
        <h1
          className={`text-4xl md:text-5xl font-bold tracking-tight transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-slate-800"
          }`}
        >
          Voice Agent
        </h1>
        <p
          className={`text-lg max-w-md mx-auto leading-relaxed transition-colors duration-300 ${
            isDarkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Experience the power of AI-driven voice interaction
        </p>
      </div>
      <VoiceAgent isDarkMode={isDarkMode} />
    </main>
  )
}
