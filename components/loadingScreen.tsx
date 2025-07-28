// components/LoadingScreen.tsx
const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50 transition-opacity duration-500">
      <div className="text-center">
        <div className="w-20 h-20 border-3 border-transparent border-t-cyan-400 rounded-full animate-spin mx-auto mb-6" />
        <div className="text-lg font-light text-white/70 animate-pulse">
          Loading Excellence...
        </div>
      </div>
    </div>
  )
}
export default LoadingScreen