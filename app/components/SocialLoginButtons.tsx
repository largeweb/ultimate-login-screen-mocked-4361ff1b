// app/components/SocialLoginButtons.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMicrosoft, FaLinkedin, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";

const SocialLoginButtons = () => {
  const handleSocialLogin = (provider: string) => {
    alert(`Mock login with ${provider} successful!`);
  };

  return (
    <div className="flex flex-col space-y-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="flex items-center justify-center bg-[#0078d4] text-white py-2 px-4 rounded hover:bg-[#005ea2]"
        onClick={() => handleSocialLogin("Microsoft")}
      >
        <FaMicrosoft className="mr-2" />
        Continue with Microsoft
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="flex items-center justify-center bg-[#0077B5] text-white py-2 px-4 rounded hover:bg-[#005a8a]"
        onClick={() => handleSocialLogin("LinkedIn")}
      >
        <FaLinkedin className="mr-2" />
        Continue with LinkedIn
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="flex items-center justify-center bg-[#4285F4] text-white py-2 px-4 rounded hover:bg-[#3367d6]"
        onClick={() => handleSocialLogin("Google")}
      >
        <FaGoogle className="mr-2" />
        Continue with Google
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="flex items-center justify-center bg-[#1DA1F2] text-white py-2 px-4 rounded hover:bg-[#0c85d0]"
        onClick={() => handleSocialLogin("Twitter")}
      >
        <FaTwitter className="mr-2" />
        Continue with Twitter
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="flex items-center justify-center bg-[#333] text-white py-2 px-4 rounded hover:bg-[#1a1a1a]"
        onClick={() => handleSocialLogin("GitHub")}
      >
        <FaGithub className="mr-2" />
        Continue with GitHub
      </motion.button>
    </div>
  );
};

return SocialLoginButtons;