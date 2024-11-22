import { useNavigate } from "react-router-dom";
import "./dashboard.css";

interface DashboardProps {
  poems: {
    id: string;
    title: string;
    excerpt: string;
  }[];
  onViewPoem: (id: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ poems }) => {

  const navigate = useNavigate();

  const handleViewPoem = (id: string) => {
    navigate(`/detail/${id}`); 
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/AtPrjYp75uA" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>

      <div className="poem-list">
        {poems.map((poem) => (
          <div key={poem.id} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.excerpt}...</p>
            <button className="poem-button" onClick={() => handleViewPoem(poem.id)}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
