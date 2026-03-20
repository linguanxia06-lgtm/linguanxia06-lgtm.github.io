"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, categories, Project } from "@/config/projects";

interface ProjectGridProps {
  showAll?: boolean;
}

export default function ProjectGrid({ showAll = true }: ProjectGridProps) {
  const [activeTag, setActiveTag] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects =
    activeTag === "all"
      ? projects
      : projects.filter((p) => p.category === activeTag);

  const displayedProjects = showAll
    ? filteredProjects.slice(0, visibleCount)
    : filteredProjects.slice(0, 3);

  const hasMore = showAll && visibleCount < filteredProjects.length;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => {
              setActiveTag(cat.key);
              setVisibleCount(6);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTag === cat.key
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="bg-slate-100 text-slate-900 hover:bg-slate-200 px-8 py-3 rounded-full transition-all"
          >
            加载更多
          </button>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={() => window.open(project.link, "_blank")}
    >
      <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white transition-all hover:shadow-2xl">
        <div className="relative aspect-video overflow-hidden bg-slate-200">
          <img 
            src={project.cover} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={24} className="text-white drop-shadow-lg" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.metrics.map((metric, index) => (
              <span
                key={index}
                className="text-sm text-slate-500"
              >
                {metric}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
