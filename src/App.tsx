import Page from "./components/functional/Page";
import "bootstrap/dist/css/bootstrap.min.css";
import Section from "./components/functional/Section";
import Modal from "./components/functional/Modal";
import { useProjectModal, useProjects } from "./hooks/project";

function App() {
  const projectModal = useProjectModal();
  const projects = useProjects(projectModal.onShowProjectDetails);

  return (
    <Page>
      <Section.About />

      <Section.Portfolio projects={projects} />

      <Section.Contact />

      <Modal.Project {...projectModal} />
    </Page>
  );
}

export default App;
