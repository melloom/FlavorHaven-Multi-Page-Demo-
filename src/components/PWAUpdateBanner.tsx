import { X, Download, RefreshCw } from 'lucide-react'
import { usePWAUpdate } from '../hooks/usePWAUpdate'
import { useState } from 'react'

export const PWAUpdateBanner = () => {
  const { needsRefresh, offlineReady, installPrompt, refreshApp, installApp } = usePWAUpdate()
  const [showInstallPrompt, setShowInstallPrompt] = useState(true)
  const [showOfflineReady, setShowOfflineReady] = useState(true)

  const handleInstall = async () => {
    const outcome = await installApp()
    if (outcome === 'accepted') {
      console.log('App installed successfully')
    }
  }

  if (needsRefresh) {
    return (
      <div className="fixed bottom-4 left-4 right-4 bg-yellow-400 text-black p-4 rounded-lg shadow-lg z-50 max-w-md mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <RefreshCw className="w-5 h-5" />
            <div>
              <p className="font-semibold">New Version Available</p>
              <p className="text-sm text-black/80">A new version of the app is ready.</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={refreshApp}
              className="px-3 py-1 bg-black text-yellow-400 rounded text-sm font-semibold hover:bg-gray-900 transition-colors"
            >
              Update
            </button>
            <button
              onClick={() => window.location.reload()}
              className="p-1 text-black/60 hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (installPrompt && showInstallPrompt) {
    return (
      <div className="fixed bottom-4 left-4 right-4 bg-yellow-400 text-black p-4 rounded-lg shadow-lg z-50 max-w-md mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Download className="w-5 h-5" />
            <div>
              <p className="font-semibold">Install App</p>
              <p className="text-sm text-black/80">Install this app on your device for offline access.</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleInstall}
              className="px-3 py-1 bg-black text-yellow-400 rounded text-sm font-semibold hover:bg-gray-900 transition-colors"
            >
              Install
            </button>
            <button
              onClick={() => setShowInstallPrompt(false)}
              className="p-1 text-black/60 hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (offlineReady && showOfflineReady) {
    return (
      <div className="fixed bottom-4 left-4 right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg z-50 max-w-md mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <p className="text-sm font-medium">App ready for offline use</p>
          </div>
          <button
            onClick={() => setShowOfflineReady(false)}
            className="p-1 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }

  return null
}
