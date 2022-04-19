import { motion } from "framer-motion";

export const Details = ({ description, stack, link }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className="project-description">{description}</p>
      <ul className="project-stack">
        {stack.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <a href={`http://${link}`} target="_blank" rel="noreferrer">
        Project Linkses
      </a>
    </motion.div>
  );
};
