interface Props {
  children?: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  style?: React.CSSProperties;
}

function Link({ children, ...props }: Props) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

export default Link;
