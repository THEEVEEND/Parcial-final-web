import "./intro.css";
import { useNavigate } from "react-router-dom";

interface IntroProps {
  onNext: () => void;
}

const Intro: React.FC<IntroProps> = ({  }) => {
  const navigate = useNavigate();

  const handleonNext = () => {
    navigate("/dashboard"); 
  };

  return (
    <div className="intro">
      <h1 className="intro-title">Welcome to PoemWorld</h1>
      <p className="intro-description">
        Discover, read, and share beautiful poems from around the world. Let
        your imagination flow like verses of poetry.
      </p>
      <button className="intro-button" onClick={handleonNext}>
        Next
      </button>
    </div>
  );
};

export default Intro;
