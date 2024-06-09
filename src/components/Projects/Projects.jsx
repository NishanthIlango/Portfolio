import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import appProjects from "../../data/appProjects.json"
import { ProjectCard } from "./ProjectCard";
import {AppProjectCard} from "./AppProjects";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {appProjects.map((project, id) => {
          return <AppProjectCard key={id} project={project} />;
        })}
      </div>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};