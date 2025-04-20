import { Modal as BootstrapModal } from "react-bootstrap";

interface Props {
  title?: string;
  children?: React.ReactNode;
  centered?: boolean;
  show: boolean;
  onHide: () => void;
}

function Modal({ title, children, ...props }: Props) {
  return (
    <BootstrapModal centered {...props}>
      <BootstrapModal.Header closeButton>
        {title && <BootstrapModal.Title>{title}</BootstrapModal.Title>}
      </BootstrapModal.Header>

      {children && <BootstrapModal.Body>{children}</BootstrapModal.Body>}
    </BootstrapModal>
  );
}

export default Modal;
