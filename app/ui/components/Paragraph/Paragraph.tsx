import styles from "./Paragraph.module.css";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

export default function Paragraph({ ...rest }: Props) {
  return <p className={styles.p} {...rest}></p>;
}
