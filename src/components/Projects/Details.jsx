import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Details.css";

export const Details = ({ description, stack, repository, preview }) => {
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
            return <motion.li key={index}>{item}</motion.li>;
          })}
        </motion.ul>
      </div>
      <motion.div layout className="links">
        <a
          className="github-link"
          href={`${repository}`}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="project-link"
          href={`${preview}`}
          target="_blank"
          rel="noreferrer"
        >
          <FaExternalLinkAlt />
        </a>
      </motion.div>
    </motion.div>
  );
};
