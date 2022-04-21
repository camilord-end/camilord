import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Details } from "./Details.jsx";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./ProjectCard.css";

export const ProjectCard = ({
  name,
  description,
  stack,
  repository,
  preview,
  image,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.li className="card" layout initial={{ borderRadius: 10 }}>
      <motion.div layout className="main-content">
        <div className="project-image-container">
          <img className="project-image" src={image} alt="project image" />
        </div>
        <div className="project-basic">
          <div className="project-name">
            <h1 className="project-name">{name}</h1>
          </div>
          <motion.div
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
            className="project-details-button"
            onClick={toggleOpen}
          >
            {isOpen ? <FaMinus alignmentBaseline="central" /> : <FaPlus />}
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <Details
            description={description}
            stack={stack}
            repository={repository}
            preview={preview}
          />
        )}
      </AnimatePresence>
    </motion.li>
  );
};
