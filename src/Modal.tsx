import styled from "styled-components";
import Code from "./assets/Code";
import { CodeLink, DemoLink } from "./components/Card";
import Globe from "./assets/Globe";
import { useEffect } from "react";
import NixConnectImage from "./assets/image.png";
import Dismiss from "./assets/Dismiss";
import { motion, AnimatePresence } from "motion/react"; // Import AnimatePresence

export default function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("modal")) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <CaseStudyOverlay className="modal">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
            }}
            transition={{ duration: 0.3 }}
          >
            <CaseStudyWindow>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  position: "absolute",
                  right: "1rem",
                  cursor: "pointer",
                }}
                onClick={onClose}
              >
                <Dismiss />
              </button>

              <CaseStudyWindowContent>
                <h2>*NixConnect</h2>

                <div>
                  This is my current passion project, originally built as my
                  final thesis. It is a social media platform built for the Web
                  that is currently under development, due to being rebuilt from
                  scratch with new technologies and new ideas, as well as having
                  a live audience ready to test it.
                </div>
                <div>
                  The prominent technologies in this project are{" "}
                  <strong>NextJS</strong>, <strong>Supabase</strong> and{" "}
                  <strong>PostgreSQL</strong>. As the project is currently under
                  development, many of the features and technologies are nascent
                  and subject to change, however I can say with certainty that I
                  am already making good use of libraries such as{" "}
                  <a href="https://tanstack.com/query/latest" target="_blank">
                    Tanstack Query
                  </a>
                  ,{" "}
                  <a href="https://tailwindcss.com/" target="_blank">
                    TailwindCSS
                  </a>
                  ,{" "}
                  <a href="https://zod.dev/" target="_blank">
                    Zod
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.npmjs.com/package/react-markdown"
                    target="_blank"
                  >
                    React Markdown
                  </a>
                  , just to name a few.
                </div>
                <h3>Inspiration</h3>
                <div>
                  Main source of inspiration to create this project is Mastodon,
                  with some of its instances allowing for a customizable retro
                  design, as well as videos from{" "}
                  <a
                    href="https://www.youtube.com/watch?v=TPnYW2BNI8I&list=PLwxMVt2ydKZY-dRhwY3NLV6M0S8X1jOxF"
                    target="_blank"
                  >
                    Squirrel Monkey
                  </a>
                  , an amazing YouTuber who specializes in creating retro-style
                  videos reimagining current applications and technologies as if
                  they were released in the past in the 80s or the 90s. Having
                  grown up around old computers and operating systems myself, I
                  had a bit of nostalgia and wistfulness for my childhood, so I
                  decided to materialize my vision in *NixConnect. Given keen
                  interest about the project from my friends, I have decided to
                  put a testing version of it online. The design and some UI
                  choices were made to fit the retro aesthetic, while still
                  using modern technologies, allowing me to apply my extensive
                  knowledge of (not only) front-end technologies.
                </div>
                <h3>Design</h3>
                <div>
                  In order to build a solid and mature UI, I started off with a
                  basic set of fundamentals that dictated and steered my design
                  with a set of rules that helped to establish a visual identity
                  for the app. One of the key elements in *NixConnect is the
                  notion of a colour scheme. A colour scheme is a set of colours
                  that make the design, and while they are not yet implemented
                  in the current version of the project, they are on the to-do
                  list, and their basic framework has already been laid out.
                  Each colour scheme consists of: <em>colour scheme</em>.
                </div>
                <ul>
                  <li>
                    <strong>primary colour</strong> - applied to elements like
                    the top bar, buttons and links
                  </li>
                  <li>
                    <strong>secondary colour</strong> - applied to user handle
                    in the top bar, as well as the selection colour in the
                    context menus
                  </li>
                  <li>
                    <strong>accent colour</strong> - adds a flair of extra
                    colour and is applied to elements like the bottom bar and
                    the active/focus colour of the context menus, items, or mark
                    selections
                  </li>
                  <li>
                    <strong>neutral colour</strong> - added to posts and forms
                    in order to establish visual hierarchy and make the element
                    stand out
                  </li>
                  <li>
                    <strong>dark/light colour</strong> - largely neutral colours
                    used for text on light or dark surfaces, can have a very
                    light hue applied in certain colour schemes
                  </li>
                  <li>
                    <strong>error colour</strong> - visually distinct colour
                    that is used in forms to inform the user of errors in their
                    input, or to mark required fields
                  </li>
                </ul>
                <div style={{ marginTop: ".5rem" }}>
                  Below is an image showcasing the visual hierarchy in use:
                </div>
                <a href={NixConnectImage} target="_blank">
                  <img src={NixConnectImage} alt="*NixConnect image" />
                </a>
                <h3>Features</h3>
                <div>
                  Since this project is currently in development, many features
                  are still being developed or are yet to be added. Still, there
                  is a growing list of features available already:
                </div>
                <ul>
                  <li>user accounts or authenticating via GitHub</li>
                  <li>
                    adding posts written in Markdown format, viewing user
                    profiles
                  </li>
                  <li>viewing user profiles</li>
                  <li>
                    feed of posts from all users sorted in a 3-column, 2-column,
                    or a single column grid (responsive design) with skeleton
                    loading
                  </li>
                  <li>basic level of authorization on the server</li>
                </ul>
                <div>The list of features to be added includes:</div>
                <ul>
                  <li>interacting with posts through comments</li>
                  <li>delete own account</li>
                  <li>paginated loading of the feed</li>
                  <li>
                    rich-text formatting for post-writing (
                    <a
                      href="https://www.slatejs.org/examples/richtext"
                      target="_blank"
                    >
                      Slate
                    </a>{" "}
                    is a candidate)
                  </li>
                  <li>edit own account information</li>
                </ul>
                <div>Does this project sound interesting? Learn more!</div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    width: "100%",
                  }}
                >
                  <CodeLink
                    href="https://github.com/benko11/nixconnect"
                    target="_blank"
                    style={{ flex: 1 }}
                  >
                    <Code /> <div>View Code</div>
                  </CodeLink>
                  <DemoLink
                    href="https://nixconnect.vercel.app/"
                    target="_blank"
                    style={{ flex: 1 }}
                  >
                    <Globe /> <div>Live Demo</div>
                  </DemoLink>
                </div>
              </CaseStudyWindowContent>
            </CaseStudyWindow>
          </motion.div>
        </CaseStudyOverlay>
      )}
    </AnimatePresence>
  );
}

const CaseStudyOverlay = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  z-index: 1;
`;

const CaseStudyWindow = styled.div`
  position: relative;
  padding: 2rem 4.5rem;
  background: var(--theme);
  width: 95%;
  max-width: 750px;
  box-shadow: 5px 5px 5px rgba(from var(--black) r g b / 30%),
    -5px -5px 5px rgba(from var(--white) r g b / 10%);
  border-radius: 1rem;
`;

const CaseStudyWindowContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 80vh;
  overflow-y: auto;
  line-height: 150%;
  text-align: justify;
  padding-right: 1rem;
`;
