// app/page.tsx
"use client";

import React from "react";
import LoginForm from "./components/LoginForm";
import SocialLoginButtons from "./components/SocialLoginButtons";
import { motion } from "framer-motion";

return function LoginPage() {
  const handleLogin = () => {
    alert("Mock login successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome Back!
        </h2>

        <LoginForm onLogin={handleLogin} />

        <div className="mt-6">
          <SocialLoginButtons />
        </div>

        <div className="mt-6 text-center">
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Send an Update
          </a>
        </div>
      </motion.div>
    </div>
  );
}