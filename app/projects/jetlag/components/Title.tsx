import styles from "../page.module.css";
import { k2D } from "@/app/ui/fonts";
import Button from "@/app/ui/components/Button/Button";
import Flex from "@/app/ui/components/Flex/Flex";

export default function Title() {
  return (
    <div className={styles.title}>
      <h1 className={k2D.className}>
        Jet Lag Poznań
        <br />
        My First Full-Stack App
      </h1>
      <Flex justifyContent="center" gap="16px">
        <Button href="https://github.com/agnieszka-grabowska/jetlag-poznan">Github</Button>
        <Button href="https://jetlag-poznan.vercel.app">Live Demo</Button>
      </Flex>
    </div>
  );
}
