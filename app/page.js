"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">WebTech Final Project</h1>
      
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center text-lg"
            onClick={() => console.log('Users clicked')}
          >
            Users
          </button>
          
          <button 
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center text-lg"
            onClick={() => console.log('Posts clicked')}
          >
            Posts
          </button>
          
          <button 
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center text-lg"
            onClick={() => console.log('Charts clicked')}
          >
            Charts
          </button>
        </div>
      </div>
    </div>
  );
}
