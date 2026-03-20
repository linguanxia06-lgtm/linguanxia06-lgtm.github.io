"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-32 h-32 rounded-full bg-slate-200 mx-auto mb-8 overflow-hidden"
      >
        <img 
          src="/images/avatar.jpg" 
          alt="Kasia" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8"
      >
        你好，我是Kasia
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mb-8"
      >
        <p className="text-lg text-slate-600 leading-relaxed mb-2">
          一个沉迷 AI 的00后内容编导，代码新手村常驻选手
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-2">
          擅长内容营销，熟悉各大新媒体玩法
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-2">
          希望能借助 AI 创作各种有趣有用的东西
        </p>
        <a 
          href="mailto:linguanxia06@gmail.com"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mt-4"
        >
          <Mail size={18} />
          linguanxia06@gmail.com
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 mt-4"
      >
        <Link
          href="/work"
          className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-3 rounded-full transition-all"
        >
          查看作品
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-100 text-slate-900 hover:bg-slate-200 px-8 py-3 rounded-full transition-all"
        >
          作品集PDF
        </a>
      </motion.div>
    </section>
  );
}
