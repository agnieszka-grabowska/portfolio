import styles from "./H1.module.css";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function H1({ ...rest }: Props) {
  return <h1 className={styles.h1} {...rest}></h1>;
}
