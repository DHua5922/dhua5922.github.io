import { useState } from "react";
import { ProjectType } from "../types/project";
import { projects } from "../constants";

function useProjects(onShowProject: (project: ProjectType) => () => void) {
  return projects.map((project) => ({
    ...project,
    onClick: onShowProject(project),
  }));
}

function useProjectModal() {
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [chosenProject, setChosenProject] = useState<ProjectType>({
    name: "",
    imgName: "",
    links: [],
    description: "",
  });

  return {
    title: chosenProject.name,
    show: showProjectDetails,
    onHide: () => setShowProjectDetails(false),
    project: chosenProject,
    onShowProjectDetails: (project: ProjectType) => () => {
      setShowProjectDetails(true);
      setChosenProject(project);
    },
  };
}

export { useProjects, useProjectModal };
