import React, { useState } from "react";
import Layout from "../../layout";
import map from "../../assets/Map-26-6_ver1 1.png";
import "./khampha.css";

interface LabelPosition {
  id: number;
  top: string;
  left: string;
  label: string;
  description: string;
}

const Khampha: React.FC = () => {
  const [clickedLabels, setClickedLabels] = useState<number[]>([]);
  const [activeLabel, setActiveLabel] = useState<LabelPosition | null>(null);

  const labelPositions: LabelPosition[] = [
    {
      id: 1,
      top: "66%",
      left: "20%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 2,
      top: "21%",
      left: "66%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 3,
      top: "70%",
      left: "16%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 4,
      top: "54%",
      left: "88%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 5,
      top: "64%",
      left: "27%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 6,
      top: "80%",
      left: "52%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 7,
      top: "56%",
      left: "83%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 8,
      top: "57%",
      left: "76%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 9,
      top: "47%",
      left: "89%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 10,
      top: "15%",
      left: "75%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 11,
      top: "13%",
      left: "87%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 12,
      top: "38%",
      left: "49%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 13,
      top: "42%",
      left: "73%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 14,
      top: "86%",
      left: "34%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 15,
      top: "82%",
      left: "28%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 16,
      top: "81%",
      left: "32%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 17,
      top: "84%",
      left: "36%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 18,
      top: "56%",
      left: "39%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 19,
      top: "39%",
      left: "66%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 20,
      top: "48%",
      left: "77%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 21,
      top: "94%",
      left: "60%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 22,
      top: "67%",
      left: "70%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 23,
      top: "85%",
      left: "44%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 24,
      top: "87%",
      left: "54%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 25,
      top: "78%",
      left: "44%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 26,
      top: "77%",
      left: "50%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 27,
      top: "77%",
      left: "37%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 28,
      top: "71%",
      left: "52%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 29,
      top: "82%",
      left: "62%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 30,
      top: "71%",
      left: "44%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 31,
      top: "74%",
      left: "41%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 32,
      top: "77%",
      left: "26%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 33,
      top: "79%",
      left: "57%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 34,
      top: "69%",
      left: "24%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 35,
      top: "34%",
      left: "89%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 36,
      top: "27%",
      left: "92%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 37,
      top: "31%",
      left: "90%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 38,
      top: "25%",
      left: "83%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 39,
      top: "36%",
      left: "88%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 40,
      top: "33%",
      left: "94%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 41,
      top: "46%",
      left: "24%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 42,
      top: "28%",
      left: "83%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 43,
      top: "58%",
      left: "10%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 44,
      top: "25%",
      left: "83%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 45,
      top: "33%",
      left: "40%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 46,
      top: "55%",
      left: "24%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 47,
      top: "52%",
      left: "31%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 48,
      top: "45%",
      left: "32%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 49,
      top: "39%",
      left: "32%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 50,
      top: "52%",
      left: "40%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 51,
      top: "51%",
      left: "9%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 52,
      top: "62%",
      left: "20%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 53,
      top: "68%",
      left: "91%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 54,
      top: "49%",
      left: "45%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 55,
      top: "75%",
      left: "60%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 56,
      top: "31%",
      left: "75%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 57,
      top: "56%",
      left: "51%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
    {
      id: 58,
      top: "45%",
      left: "70%",
      label: "Khu 1",
      description: "Trò chơi vượt tháp",
    },
  ];

  const handleLabelClick = (position: LabelPosition) => {
    if (clickedLabels.includes(position.id)) {
      // Nếu nhãn đã được chọn, bỏ nhãn đó khỏi clickedLabels và ẩn mô tả nếu là nhãn hiện tại
      setClickedLabels((prev) => prev.filter((id) => id !== position.id));
      setActiveLabel((prev) => (prev?.id === position.id ? null : prev));
    } else {
      // Nếu nhãn chưa được nhấn, thêm vào clickedLabels và hiển thị mô tả
      setClickedLabels((prev) => [...prev, position.id]);
      setActiveLabel(position);
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
            onClick={() => handleLabelClick(position)}
          >
            {clickedLabels.includes(position.id) ? "X" : position.id}
          </div>
        ))}
        {activeLabel && (
          <div
            className="label-description"
            style={{
              top: `calc(${activeLabel.top} - 4%)`,
              left: `calc(${activeLabel.left})`,
            }}
          >
            <div className="description-content">
              <div className="content_map">
                <strong>{activeLabel.label}</strong>
                <p>{activeLabel.description}</p>
              </div>
              <div className="content_icon_arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <path
                    d="M13 10L19 16L13 22"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Khampha;
