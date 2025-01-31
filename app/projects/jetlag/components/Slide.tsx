import styles from "../page.module.css";
import Image from "next/image";
import stepOnePhoto from "@/public/step-1.avif";
import stepTwoPhoto from "@/public/step-2.avif";
import stepThreePhoto from "@/public/step-3.avif";
import stepFourPhoto from "@/public/step-4.avif";
import stepFivePhoto from "@/public/step-5.avif";
import stepSixPhoto from "@/public/step-6.avif";
import questionsViewPhoto from "@/public/questions-view.avif";
import gameViewPhoto from "@/public/jetlag-game-view.avif";
import Flex from "@/app/ui/components/Flex/Flex";

export default function Slide() {
  return (
    <Flex className={styles.slide} justifyContent="center" gap="12px">
      <Image src={stepOnePhoto} alt="" height={667} width={375} />
      <Image src={stepFourPhoto} alt="" height={667} width={375} />
      <Image src={stepTwoPhoto} alt="" height={667} width={375} />
      <Image src={gameViewPhoto} alt="" height={667} width={375} />
      <Image src={stepThreePhoto} alt="" height={667} width={375} />
      <Image src={stepFivePhoto} alt="" height={667} width={375} />
      <Image src={stepSixPhoto} alt="" height={667} width={375} />
      <Image src={questionsViewPhoto} alt="" height={667} width={375} />
    </Flex>
  );
}
