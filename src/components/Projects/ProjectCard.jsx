export const ProjectCard = ({ name, description, stack, link, preview }) => {
  return (
    <>
      <h1 className="project-name">{name}</h1>
      <p className="project-description">{description}</p>
      <ul className="project-stack">
        {stack.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <a href={`http://${link}`} target="_blank" rel="noreferrer">
        Project Link
      </a>
      <img src={`http://${preview}`} alt="project preview" />
    </>
  );
};
