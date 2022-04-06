import Typical from "react-typical";

export const Home = () => {
  return (
    <div>
      <h1>I`m Julian Orozco</h1>
      <h2>
        <Typical
          steps={[
            "And i like to transform ideas into code",
            1000,
            "And i like to learn new tecnologies",
            1000,
          ]}
          loop={Infinity}
          wrapper="p"
        />
      </h2>
      <img
        id="placeholder"
        src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"
        alt="image-placeholder"
      />
    </div>
  );
};
