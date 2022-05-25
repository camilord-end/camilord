import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaCss3,
  FaHtml5,
} from "react-icons/fa";
import { SiJavascript, SiVite } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import "./Details.css";

export const Details = ({ description, stack, repository, preview }) => {
  const checkStack = (item) => {
    if (item === "react") return <FaReact />;
    if (item === "js") return <SiJavascript />;
    if (item === "css") return <FaCss3 />;
    if (item === "html5") return <FaHtml5 />;
    if (item === "vite") return <SiVite />;
    if (item === "axios") return <AiOutlineApi />;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      exit={{ opacity: 1 }}
    >
      <motion.p className="project-description">{description}</motion.p>
      <div className="stack">
        <motion.ul className="project-stack">
          {stack.map((item, index) => {
            let stackIcon = checkStack(item);
            return (
              <motion.li key={index} whileHover={{ scale: 1.2 }}>
                {stackIcon}
                {item}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
      <motion.div layout className="links">
        <motion.a
          className="github-link"
          href={`${repository}`}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.3 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          className="project-link"
          href={`${preview}`}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.3 }}
        >
          <FaExternalLinkAlt />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};
