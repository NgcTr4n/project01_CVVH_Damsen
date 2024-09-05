import React from "react";
import Layout from "../../layout";
import map from "../../assets/Map-26-6_ver1 1.png";
import './khampha.css';

interface LabelPosition {
  id: number;
  top: string;
  left: string;
  label: string;
  description: string;
}

const Khampha: React.FC = () => {
  const labelPositions: LabelPosition[] = [
    { id: 1, top: '66%', left: '20%', label: '01', description: "Trò chơi kim tử tháp" },
    { id: 2, top: '21%', left: '66%', label: '02', description: "Trò chơi kim tử tháp" },
    { id: 3, top: '70%', left: '16%', label: '03', description: "Trò chơi kim tử tháp" },
    { id: 4, top: '54%', left: '88%', label: '04', description: "Trò chơi kim tử tháp" },
    { id: 5, top: '64%', left: '27%', label: '05', description: "Trò chơi kim tử tháp" },
    { id: 6, top: '24%', left: '90%', label: '06', description: "Trò chơi kim tử tháp" },
    { id: 7, top: '56%', left: '83%', label: '07', description: "Trò chơi kim tử tháp" },
    { id: 8, top: '30%', left: '45%', label: '08', description: "Trò chơi kim tử tháp" },
    { id: 9, top: '47%', left: '89%', label: '09', description: "Trò chơi kim tử tháp" },
    { id: 10, top: '15%', left: '75%', label: '10', description: "Trò chơi kim tử tháp" },
    { id: 11, top: '36%', left: '15%', label: '11', description: "Trò chơi kim tử tháp" },
    { id: 12, top: '38%', left: '40%', label: '12', description: "Trò chơi kim tử tháp" },
    { id: 13, top: '42%', left: '73%', label: '13', description: "Trò chơi kim tử tháp" },
    { id: 14, top: '86%', left: '34%', label: '14', description: "Trò chơi kim tử tháp" },
    { id: 15, top: '44%', left: '20%', label: '15', description: "Description for label 15" },
    { id: 16, top: '46%', left: '45%', label: '16', description: "Description for label 16" },
    { id: 17, top: '84%', left: '36%', label: '17', description: "Description for label 17" },
    { id: 18, top: '50%', left: '75%', label: '18', description: "Description for label 18" },
    { id: 19, top: '36%', left: '88%', label: '19', description: "Description for label 19" },
    { id: 20, top: '54%', left: '40%', label: '20', description: "Description for label 20" },
    { id: 21, top: '56%', left: '60%', label: '21', description: "Description for label 21" },
    { id: 22, top: '58%', left: '80%', label: '22', description: "Description for label 22" },
    { id: 23, top: '60%', left: '20%', label: '23', description: "Description for label 23" },
    { id: 24, top: '62%', left: '45%', label: '24', description: "Description for label 24" },
    { id: 25, top: '64%', left: '65%', label: '25', description: "Description for label 25" },
    { id: 26, top: '66%', left: '75%', label: '26', description: "Description for label 26" },
    { id: 27, top: '68%', left: '15%', label: '27', description: "Description for label 27" },
    { id: 28, top: '70%', left: '40%', label: '28', description: "Description for label 28" },
    { id: 29, top: '72%', left: '60%', label: '29', description: "Description for label 29" },
    { id: 30, top: '74%', left: '80%', label: '30', description: "Description for label 30" },
    { id: 31, top: '76%', left: '20%', label: '31', description: "Description for label 31" },
    { id: 32, top: '78%', left: '45%', label: '32', description: "Description for label 32" },
    { id: 33, top: '80%', left: '65%', label: '33', description: "Description for label 33" },
    { id: 34, top: '82%', left: '75%', label: '34', description: "Description for label 34" },
    { id: 35, top: '84%', left: '15%', label: '35', description: "Description for label 35" },
    { id: 36, top: '86%', left: '40%', label: '36', description: "Description for label 36" },
    { id: 37, top: '88%', left: '60%', label: '37', description: "Description for label 37" },
    { id: 38, top: '25%', left: '83%', label: '38', description: "Description for label 38" },
    { id: 39, top: '92%', left: '20%', label: '39', description: "Description for label 39" },
    { id: 40, top: '94%', left: '45%', label: '40', description: "Description for label 40" },
  ];

  const handleLabelClick = (id: number) => {
    const clickedLabel = labelPositions.find(label => label.id === id);
    if (clickedLabel) {
      alert(`Clicked on: ${clickedLabel.description}`);
    }
  };

  return (
    <Layout>
      <div className="map-container">
        <img src={map} alt="Đầm Sen Map" className="map-image" />
        {labelPositions.map((position) => (
          <div
            key={position.id}
            className="map-label"
            style={{ top: position.top, left: position.left }}
            onClick={() => handleLabelClick(position.id)}
          >
            {position.label}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Khampha;
