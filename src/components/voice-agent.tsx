interface VoiceAgentProps {
  isDarkMode: boolean
}

export default function VoiceAgent({ isDarkMode }: VoiceAgentProps) {
  return (
    <div
      className={`w-full max-w-sm sm:max-w-md mx-auto p-4 sm:p-6 rounded-2xl shadow-2xl border backdrop-blur-sm transition-all duration-300 ${
        isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      <div className="mb-3 sm:mb-4 text-center">
        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-2 sm:mb-3">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </div>
        <h2
          className={`text-lg sm:text-xl font-semibold mb-1 transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-slate-800"
          }`}
        >
          AI Voice Assistant
        </h2>
        <p
          className={`text-xs sm:text-sm transition-colors duration-300 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
        >
          Click to start speaking
        </p>
      </div>
      <iframe
        src="https://mindlap.dev/public/?agent_id=4cccb46b-72b2-4255-b174-57d27956794a"
        className={`w-full h-[400px] sm:h-[500px] border-0 rounded-xl shadow-inner transition-colors duration-300 ${
          isDarkMode ? "bg-slate-700" : "bg-slate-50"
        }`}
        title="Voice Agent"
        allow="clipboard-write; fullscreen; autoplay; microphone *;"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-microphone"
      />
    </div>
  )
}
