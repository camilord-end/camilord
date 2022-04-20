import { motion } from "framer-motion";

export const Details = ({ description, stack, repository, preview }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      
    >
      <motion.p className="project-description">{description}</motion.p>
      <motion.ul className="project-stack">
        {stack.map((item, index) => {
          return <motion.li key={index}>{item}</motion.li>;
        })}
      </motion.ul>
      <motion.a href={`${repository}`} target="_blank" rel="noreferrer">
        Project Repository
      </motion.a>
      <motion.a href={`${preview}`} target="_blank" rel="noreferrer">
        Project Preview
      </motion.a>
    </motion.div>
  );
};
