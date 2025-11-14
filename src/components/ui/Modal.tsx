import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Component } from "react";
import type React from "react";

export default function Modal({ open, onClose, title, children, footer }:{open: boolean, onClose:()=> void, title:string, children:React.ReactNode, footer?:React.ReactNode}) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-[#1A1A1A] rounded-2xl shadow-xl w-full max-w-lg p-0 overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 ">
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="px-5 py-4 text-white">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="px-5 py-3  bg-[#161616] flex justify-end gap-2">{footer}</div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}