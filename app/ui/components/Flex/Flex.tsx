import styles from "./Flex.module.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  flexDirection?: React.CSSProperties["flexDirection"];
  justifyContent?: React.CSSProperties["justifyContent"];
  flexWrap?: React.CSSProperties["flexWrap"];
  alignItems?: React.CSSProperties["alignItems"];
  gap?: string;
  className?: string;
}

export default function Flex({
  flexDirection,
  gap,
  justifyContent,
  className,
  flexWrap,
  alignItems,
  ...rest
}: Props) {
  return (
    <div
      className={`${styles.flex} ${className}`}
      style={{ flexDirection, gap, justifyContent, flexWrap, alignItems }}
      {...rest}
    ></div>
  );
}
