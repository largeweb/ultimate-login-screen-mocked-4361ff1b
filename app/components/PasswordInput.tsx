// app/components/PasswordInput.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PasswordInput = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative">
      <input
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
        className="input-cyber w-full pr-12"
      />
      <motion.button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {passwordVisible ? (
          <FiEyeOff className="w-5 h-5" />
        ) : (
          <FiEye className="w-5 h-5" />
        )}
      </motion.button>
    </div>
  );
};

return PasswordInput;