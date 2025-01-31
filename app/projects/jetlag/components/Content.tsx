import styles from "../page.module.css";
import Image from "next/image";
import pushNotificationPhoto from "@/public/push-notification.avif";
import stepTwoPhoto from "@/public/step-2.avif";
import stepThreePhoto from "@/public/step-3.avif";
import stepFourPhoto from "@/public/step-4.avif";
import stepFivePhoto from "@/public/step-5.avif";
import stepSixPhoto from "@/public/step-6.avif";
import jetlagShowPhoto from "@/public/jetlag-show.avif";
import loadingPhoto from "@/public/jetlag-loading.avif";
import tabBadgePhoto from "@/public/jetlag-tab-badge.avif";
import { HiArrowTrendingUp } from "react-icons/hi2";
import Flex from "@/app/ui/components/Flex/Flex";

export default function Content() {
  return (
    <div className={styles.content}>
      <h2>Before the App</h2>
      <p>
        Every Wednesday, my boyfriend and I would watch the{" "}
        <a href="https://nebula.tv/jetlag">Jet Lag show</a> created by Ben, Sam, and Adam, in which
        they play various games across the globe. One day we decided to play Hide & Seek ourselves
        locally, here in Poznań!
      </p>
      <div>
        <Image src={jetlagShowPhoto} alt="" />
      </div>
      <p>
        In a nutshell, one team hides somewhere in the city, and other teams seek them by asking
        various questions. For each question, the hiders earn coins that they can use to cast curses
        on the seekers, which slow them down. The team with the longest hiding time wins.
      </p>
      <p>
        In the initial version, we created a document with tables containing all the questions and
        curses, along with various pieces of rules.
      </p>
      <video loop height="667px" autoPlay muted>
        <source src="/jetlag-initial-document.mp4" type="video/mp4" />
      </video>
      <p>
        And with such a document, we played our first game! It was great! We spent the entire day
        searching for each other and had lots of fun.
      </p>
      <p>
        However... it was <strong>not ideal</strong>.
      </p>
      <p>
        We had to use four or even more different apps simultaneously—Google Docs, Maps, Telegram, a
        Clock, a Dice app, or even physical dice—which was quite overwhelming. Also, as you can
        imagine, scrolling and searching through this huge document to find anything was not a
        pleasant experience 😬
      </p>
      <p>
        So I realized <strong>we needed our own app</strong>, and it was my chance to{" "}
        <span style={{ color: "#d3b039", fontWeight: 600 }}>shine</span>! ✨
      </p>
      <h2>Tech Stack</h2>
      <p>
        This project was built with <Span>Next.js</Span> paired with <Span>TypeScript</Span>, as it
        allows the creation of full-stack applications easily and provides cutting-edge{" "}
        <Span>React</Span> features such as server components and server actions.
      </p>
      <p>
        For hosting, I chose <Span>Vercel</Span>, as it is recommended by the Next.js team, and it
        was an opportunity to learn a new tool I hadn’t used before.
      </p>
      <p>
        On the backend, I used <Span>PostgreSQL</Span> due to its integration with Vercel, and to
        communicate with my database, I used <Span>Prisma</Span>
      </p>

      <h2>The Before-The-App Issues Solved by The App</h2>
      <h3>Time Synchronization</h3>
      <p>
        Before the app, we measured round time by sending <Span>START</Span> or <Span>STOP</Span>{" "}
        messages in the <strong>group chat</strong> so everyone knew when to begin.
      </p>
      <p>
        However, since everyone had a slightly different sense of time,
        <strong> some teams started looking for hiders earlier than others</strong>, which led to
        confusion and early questions.{" "}
      </p>
      <p>
        The app solved this by <strong>syncing everyone’s timers</strong>, ensuring a consistent
        hiding period.
      </p>
      <div>
        <video height="400px" loop autoPlay muted>
          <source src="/time-sync.mp4" type="video/mp4" />
        </video>
      </div>
      <p>
        It also blocked the ability to ask questions until the jail period was over, so everyone had
        the same starting time.
      </p>
      {/* <div> */}
      <video loop height="667px" autoPlay muted>
        <source src="/jetlag-asking-question.mp4" type="video/mp4" />
      </video>
      {/* </div> */}
      <p>So the time of juggling separate clocks or timing issues is over! 🎉</p>
      <h3>App Switching</h3>

      <p>We used to juggle multiple apps.</p>
      <p>
        Seekers had to scroll through Google Docs to find questions, copy them into Telegram, and
        then hiders had to check the doc again for the question’s coin value. Afterward, they would
        manually track the coins in a notebook or another app.
      </p>
      <p>
        The app simplified all of this! Seekers now have{" "}
        <strong>all the questions in one place</strong> with a quick &quot;ask&quot; button. It
        sends the question to the hiders, starts the timer, shows the remaining time and coin value,
        and includes an input field for responses. The app automatically tracks the coins, so hiders
        no longer have to worry about it.
      </p>
      <div>
        <video loop height="667px" autoPlay muted>
          <source src="/jetlag-questions-tab.mp4" type="video/mp4" />
        </video>
      </div>
      <h3>Curse Management</h3>
      <p>
        In addition to tracking coins, hiders had to roll physical dice or use another app to do so,
        then find the corresponding curse in the document and copy-paste it into Telegram for the
        seekers.
      </p>
      <p>
        The app simplifies this by providing everything in one place: hiders see each team’s coins,
        all available curses, and their current state. Hiders can now roll the dice within the app,
        and the app automatically generates the curse, showing it to all teams instantly—no more
        copy-pasting.
      </p>
      <div>
        <video loop height="667px" autoPlay muted>
          <source src="/jetlag-curses-tab.mp4" type="video/mp4" />
        </video>
      </div>
      <p>
        It also prevents errors, as the app won’t let hiders roll more dice than they can afford,
        unlike physical dice where mistakes could happen. Everything is seamless within the app!
      </p>
      <h2>Key Features</h2>
      <h3>Push Notifications</h3>
      <p>
        When we were using Telegram, we relied on notifications for every message, even the
        non-urgent ones. Since there are time limits in the game, I realized that push notifications
        were essential to make sure users got alerts about important events—like questions and
        curses—as soon as possible.
      </p>
      <p> So, I added push notifications! 🎉 </p>
      <Image src={pushNotificationPhoto} alt="" height={667} width={375} />
      <p>
        But here’s the catch: push notifications don’t work in mobile browsers. After some research,
        I discovered that for mobile notifications to work, the app needs to be in PWA mode
        (Progressive Web App). So, I added the necessary manifest, and now the app can be added to
        your home screen, and push notifications work nicely!
      </p>
      <video loop height="667px" autoPlay muted>
        <source src="/push-notification.mp4" type="video/mp4" />
      </video>
      <h3>Customizable Questions & Curses</h3>

      <p>
        The app doesn’t rely on a fixed set of questions or curses. Users can create their own
        custom sets and start a game with them.
      </p>
      <Flex flexWrap="wrap">
        <Image src={stepTwoPhoto} alt="" height={667} />
        <Image src={stepThreePhoto} alt="" height={667} />
        <Image src={stepFourPhoto} alt="" height={667} />
        <Image src={stepFivePhoto} alt="" height={667} />
        <Image src={stepSixPhoto} alt="" height={667} />
        <video loop height="667px" autoPlay muted>
          <source src="/jetlag-game-creator.mp4" type="video/mp4" />
        </video>
      </Flex>
      <p>
        This makes the app adaptable for anyone, whether they’re in Poznań or not. Everyone can
        create their own version of the game and play it anywhere!
      </p>
      <h3>Small UI Touches</h3>
      <p>
        I believe a smooth and attractive UI adds a lot to the overall experience of an app, so I
        included some nice touches in my Jetlag app alongside its core functionality. One example is
        the animation of dragging curses during game creation, which I created using the{" "}
        <a href="https://motion.dev">Motion library</a>. While it wasn’t crucial to the gameplay
        experience, I believe it enhances the game creation process.
      </p>
      <video loop height="667px" autoPlay muted>
        <source src="/jetlag-curses-animation.mp4" type="video/mp4" />
      </video>
      <p>
        I also added some nice loading screens to keep users from staring at blank pages. Again, not
        a must-have, but it’s a nice touch.
      </p>
      <Image src={loadingPhoto} alt="" height={667} />
      <h2>Reflection & Improvements After the First Iteration </h2>
      <h3>Streamlining the Game Screen</h3>
      <p>
        In the first version, the game screen had everything in one place—questions, curses, teams,
        and instructions — leading to a lot of scrolling (Almost like in the Google document! 🤦‍♀️).
        To make it easier to use, I split the game into three tabs: <Span>Questions</Span>,{" "}
        <Span>Curses</Span>, and <Span>Rules</Span>.
      </p>
      <Flex gap="8px" justifyContent="space-evenly" alignItems="center">
        <div>
          <video loop height="667px" autoPlay muted>
            <source src="/jetlag-first-iteration.mp4" type="video/mp4" />
          </video>
        </div>
        <HiArrowTrendingUp size={40} />
        <div>
          <video loop height="667px" autoPlay muted>
            <source src="/second-iteration.mp4" type="video/mp4" />
          </video>
        </div>
      </Flex>
      <p>
        This made it quicker for players to find what they needed at any moment. On top of that, the
        timer and stop button are always accessible, staying at the top of the app.
      </p>
      <p>
        I also added small icons next to each tab to show the number of active questions or curses,
        so users can immediately see if there’s anything they need to focus on!
      </p>
      <div>
        <Image src={tabBadgePhoto} alt="" height={122} width={740} />
      </div>
      <h3>Notification Overload</h3>
      <p>
        Well… I got a little carried away with the excitement of push notifications and ended up
        sending them for everything—new questions, answers, curses, game start, etc. It quickly
        became too much 🫣, especially during the game. Some players skimmed the notifications and
        got confused, thinking they were cursed when it was actually the other team.
      </p>
      <p>
        Lesson learned! <strong>Notifications are great, but in a reasonable amount!</strong>
      </p>
      <p>
        I took another look at the notifications and now only send the most important ones. Namely,
        those that are time-sensitive, such as when a hider gets a question or when a team is cursed
        (and only the cursed team gets that notification). If players want to see all the details,
        they can still check the curses tab, but they won’t be bombarded with notifications.
      </p>
      <h2>Future Ideas </h2>
      <h3>Map & Location Tracking</h3>
      <p>
        I’m excited about adding map and location tracking. When a seeker enters a hider’s zone, the
        hider gets 5 minutes to hide. It would be awesome if the app could automatically track this
        and notify the hiders. I remember being caught off guard once when a competitor entered my
        zone while I was distracted by another team!
      </p>
      <p>
        The challenge is that, despite tracking users' locations, it would require implementing
        pre-set zones (limiting the app's flexibility) or allowing users to create map zones within
        the app, which sounds complex. But it's something I'd love to explore in the future. For
        now, though, hiders will just have to stay on their toes! 😅
      </p>
      <h3>Tests</h3>
      <p>
        As the app grew, it became easy to change something in one place and accidentally break
        something in another. That’s why adding tests would be valuable to ensure the app keeps
        working smoothly.
      </p>
    </div>
  );
}

function Span({ children }: { children: string }) {
  return <span className={styles.span}>{children}</span>;
}
