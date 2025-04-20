import { Card as BootstrapCard } from "react-bootstrap";
import styled from "styled-components";
import { PORTFOLIO_IMAGES_FOLDER_PATH } from "../../constants";

const ProjectContainer = styled(BootstrapCard)`
  box-shadow: 3px 4px 8px 2px rgba(0, 0, 0, 0.2),
    0 6px 20px 0 hsla(0, 0%, 0%, 0.19);
  height: 100%;
  cursor: pointer;
`;
const ProjectImage = styled(BootstrapCard.Img)`
  height: 100%;
`;
const ProjectName = styled(BootstrapCard.Title)`
  text-align: center;
  margin-bottom: 0px;
`;
const ProjectDisplay = Object.assign(ProjectContainer, {
  Img: ProjectImage,
  Name: ProjectName,
});

interface Props {
  name: string;
  imgName: string;
  onClick?: () => void;
}

function Project({ name, imgName, ...props }: Props) {
  return (
    <ProjectDisplay {...props}>
      <ProjectDisplay.Img src={`${PORTFOLIO_IMAGES_FOLDER_PATH}/${imgName}`} />

      <BootstrapCard.Body>
        <ProjectDisplay.Name>{name}</ProjectDisplay.Name>
      </BootstrapCard.Body>
    </ProjectDisplay>
  );
}

export default Project;
