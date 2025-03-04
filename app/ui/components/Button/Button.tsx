import styles from "./Button.module.css";
import { k2D } from "../../fonts";
import { IconType } from "react-icons";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon?: IconType;
  href?: string;
  onClick?: () => {};
}

export default function Button({ icon: Icon, href, onClick, ...rest }: Props) {
  const children = Icon ? <Icon size={"24px"} strokeWidth={"2px"} /> : rest.children;
  const style = `${styles.button} ${k2D.className} ${Icon ? styles.iconButton : ""}`;

  if (href) {
    return (
      <a
        href={href}
        className={style}
        target="_blank"
        {...(rest as React.HTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={style}
      {...(rest as React.HTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
