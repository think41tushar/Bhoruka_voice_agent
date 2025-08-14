import { useInstallPWA } from '../hooks/useInstallPWA'

interface InstallButtonProps {
  isDarkMode: boolean
}

export default function InstallButton({ isDarkMode }: InstallButtonProps) {
  const { isInstallable, isInstalling, installApp } = useInstallPWA()

  if (!isInstallable) return null

  return (
    <button
      onClick={installApp}
      disabled={isInstalling}
      className={`fixed top-4 left-4 sm:top-6 sm:left-6 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${
        isDarkMode 
          ? "bg-slate-700 text-blue-400 hover:bg-slate-600" 
          : "bg-white text-blue-600 hover:bg-slate-50"
      }`}
      title={isInstalling ? "Installing..." : "Install App"}
    >
      {isInstalling ? (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      )}
    </button>
  )
}