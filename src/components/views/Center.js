import tw, { styled } from "twin.macro";

const Container = styled.div`
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    ${tw`absolute top-1/2 left-1/2`}
`;

export default function Center({ children, ...props }) {
    return <Container {...props}>{children}</Container>;
}