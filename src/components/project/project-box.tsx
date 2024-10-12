import { Heart } from "lucide-react";
import React from "react";

const ProjectBox: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        border: "none",
        height: "200px",
        padding: "20px",
        margin: "20px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          backgroundColor: "transparent",
          padding: "10px",
          border: "1px solid",
          width: "50px",
          height: "50px",
        }}
      />
      <div
        style={{
          marginLeft: "20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: "0" }}>Role Title</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <Heart style={{ marginRight: "10px" }} />
            <button
              style={{
                color: "#208EEA",
                backgroundColor: "white",
                border: "1px solid #208EEA",
                borderRadius: "30px",
                padding: "5px 10px",
              }}
            >
              Apply
            </button>
          </div>
        </div>
        <p style={{ margin: "0" }}>Company name / Host name</p>
        <p style={{ margin: "0" }}>Time period: xx/xxxx - xx/xxxx</p>
        <p style={{ margin: "0" }}>Description, description, description</p>
      </div>
    </div>
  );
};

export default ProjectBox;
