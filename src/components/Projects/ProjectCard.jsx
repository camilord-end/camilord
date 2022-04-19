import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Details } from "./Details.jsx";
import "./ProjectCard.css";

export const ProjectCard = ({ name, description, stack, link, preview }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div layout className="main-content">
        <motion.h1 layout className="project-name">
          {name}
        </motion.h1>
        <motion.div layout className="project-image-container">
          <img src={`http://${preview}`} alt="project preview" />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <Details description={description} stack={stack} link={link} />
        )}
      </AnimatePresence>
    </motion.li>
  );
};
