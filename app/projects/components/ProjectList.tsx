"use client";

import type { ProjectItem } from "./Project";
import Project from "./Project";
import ProjectModal from "./ProjectModal";
import React, { useState } from "react";

type ProjectListProps = {
  projects: ProjectItem[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <>
      <ul className="flex flex-col animated-list">
        {projects.length === 0 && <p>No projects found</p>}
        {projects.map((project) => (
          <Project key={project.title} project={project} onClick={() => setSelectedProject(project)} />
        ))}
      </ul>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
