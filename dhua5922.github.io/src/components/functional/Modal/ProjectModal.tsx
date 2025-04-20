import { Button, Col, Image as BootstrapImage, Row } from "react-bootstrap";
import Center from "../Center";
import Modal from "./Modal";
import { ProjectType } from "../../../types/project";
import Link from "../Link";
import { PORTFOLIO_IMAGES_FOLDER_PATH } from "../../../constants";
import styled from "styled-components";

interface Props {
  title: string;
  show: boolean;
  onHide: () => void;
  project: ProjectType;
}

const Image = styled(BootstrapImage)`
  width: 60%;
`;

function ProjectModal({ project, ...props }: Props) {
  return (
    <Modal centered {...props}>
      <Center>
        <Image src={`${PORTFOLIO_IMAGES_FOLDER_PATH}/${project.imgName}`} />
      </Center>

      <br />

      <div>{project.description}</div>

      <br />

      <Center>
        <Row>
          {project.links.map((link) => (
            <Col xs={12} md={6}>
              <Link href={link.href}>
                <Button variant="dark">{link.children}</Button>
              </Link>
            </Col>
          ))}
        </Row>
      </Center>
    </Modal>
  );
}

export default ProjectModal;
