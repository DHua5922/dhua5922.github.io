import styled from "styled-components";

interface Props {
  fullHeight?: boolean;
}

const Center = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.fullHeight ? "100%" : "auto")};
`;

export default Center;
