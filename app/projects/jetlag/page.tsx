import styles from "./page.module.css";
import ContactSection from "@/app/ui/contact/contact";
import Slide from "./components/Slide";
import Title from "./components/Title";
import Content from "./components/Content";
import TableOfContents from "./components/TableOfContents";
import SectionProvider from "./SectionProvider";

export default function JetLagDetailsPage() {
  return (
    <>
      <main className={styles.main}>
        <Title />
        <Slide />
        <SectionProvider>
          <TableOfContents />
          <Content />
        </SectionProvider>
      </main>
      <ContactSection />
    </>
  );
}
