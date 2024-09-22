import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import map from "../../assets/Map-26-6_ver1 1.png";
import "./khampha.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchKhampha } from "../../features/khamphaSlice";
import Control from "../../components/control";

interface LabelPosition {
  label_id: number;
  top: string;
  left: string;
  label: string;
  description: string;
}

const Khampha: React.FC = () => {
  const dispatch = useAppDispatch();
  const { khampha, loading, error } = useAppSelector((state) => state.khampha);
  const [clickedLabels, setClickedLabels] = useState<number[]>([]);
  const [activeLabel, setActiveLabel] = useState<LabelPosition | null>(null);

  useEffect(() => {
    dispatch(fetchKhampha());
  }, [dispatch]);

  useEffect(() => {
    console.log("Redux State - services: ", khampha); // Debugging Redux data
  }, [khampha]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

 
  const handleLabelClick = (position: LabelPosition) => {
    if (clickedLabels.includes(position.label_id)) {
      setClickedLabels((prev) => prev.filter((id) => id !== position.label_id));
      setActiveLabel((prev) => (prev?.label_id === position.label_id ? null : prev));
    } else {
      setClickedLabels((prev) => [...prev, position.label_id]);
      setActiveLabel(position);
    }
  };

  return (
    <Layout>
      <div className="map-container">
        <img src={map} alt="Đầm Sen Map" className="map-image" />
        {khampha.map((position) => (
          <div
            key={position.label_id}
            className="map-label"
            style={{ top: position.top, left: position.left }}
            onClick={() => handleLabelClick(position)}
          >
            {clickedLabels.includes(position.label_id) ? "X" : position.label_id}
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
              <div className="map_line"></div>
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
                    // stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

          </div>
        )}

      </div>
      <Control/>

    </Layout>
    
  );
};

export default Khampha;
