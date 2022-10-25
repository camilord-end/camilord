import './Home.css';

export const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-text'>
        <h1>Transforming ideas into code.</h1>
      </div>
      <div className='image-div'>
        <img
          id='photo'
          src='src/assets/minga.png'
          alt='image-placeholder'
        />
      </div>
    </div>
  );
};
