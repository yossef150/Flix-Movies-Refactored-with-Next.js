import React from 'react'

function loading() {
  return (
     <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-white mt-4 text-lg">Loading...</p>
    </div>

  )
}

export default loading
