import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Details } from "./Details.jsx";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./ProjectCard.css";

export const ProjectCard = ({ name, description, stack, repository, preview, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.li className="card" layout initial={{ borderRadius: 10 }}>
      <motion.div layout className="main-content">
        <motion.div layout className="project-image-container">
          <img className="project-image" src={image} alt="project image" />
        </motion.div>
        <div className="project-basic">
          <motion.h1 layout className="project-name">
            {name}
          </motion.h1>
          <motion.button layout onClick={toggleOpen}>
            {isOpen ? <FaMinus /> : <FaPlus />}
          </motion.button>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <Details description={description} stack={stack} repository={repository} preview={preview} />
        )}
      </AnimatePresence>
    </motion.li>
  );
};
