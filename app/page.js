"use client";

import { useState } from "react";
import UsersModal from "../components/UsersModal";
import PostsModal from "../components/PostsModal";
import ChartsModal from "../components/ChartsModal";
import 'flowbite/dist/flowbite.min.css';

export default function Home() {
  const [openModal, setOpenModal] = useState("");

  const renderModalContent = () => {
    switch (openModal) {
      case "users":
        return <UsersModal />;
      case "posts":
        return <PostsModal />;
      case "charts":
        return <ChartsModal />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold mb-8 text-gray-800">
      DashboardX
      </h1>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Users, Posts & Stats</h2>

      <div className="bg-white rounded-lg shadow-2xl shadow-blue-200 p-24 w-full max-w-4xl flex flex-col items-center">
        <div className="flex gap-20 justify-center mb-8 w-full">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-5 px-12 rounded-full shadow transition-colors duration-200 text-2xl"
            onClick={() => setOpenModal("users")}
          >
            Users
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-5 px-12 rounded-full shadow transition-colors duration-200 text-2xl"
            onClick={() => setOpenModal("posts")}
          >
            Posts
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-5 px-12 rounded-full shadow transition-colors duration-200 text-2xl"
            onClick={() => setOpenModal("charts")}
          >
            Charts
          </button>
        </div>
      </div>

      {/* Only render modal content inside the modal overlay */}
      {openModal && (
        <div className="fixed inset-0 z-50 bg-transparent flex items-center justify-center">
          <div className="bg-red-100 text-black w-4/5 h-4/5 max-w-3xl max-h-[80vh] p-8 overflow-auto relative m-2 rounded-lg shadow-2xl shadow-blue-200 flex flex-col items-center justify-start">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl"
              onClick={() => setOpenModal("")}
            >
              &times;
            </button>
            <h2 className="text-4xl font-bold mb-10 w-full text-center mt-0">
              {openModal.charAt(0).toUpperCase() + openModal.slice(1)}
            </h2>
            {renderModalContent()}
          </div>
        </div>
      )}
    </div>
  );
}
