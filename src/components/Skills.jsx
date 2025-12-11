import photoshop from "../assets/photoshop.png"
import premiere from "../assets/premiere.png"
import cpp from "../assets/c++.png"
import javascript from "../assets/javascript.png"
import godot from "../assets/godot.png"

export default function Skills() {
  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <h2 className="skillsTitle">Skills</h2>

      <div className="skill">
        <div className="skill-label">
          <img src={photoshop} alt="Photoshop Icon" className="skill-icon" />
          Photoshop
        </div>
        <div className="bar">
          <div style={{ width: "99%" }}></div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-label">
          <img src={premiere} alt="Premiere Pro Icon" className="skill-icon" />
          Premiere Pro
        </div>
        <div className="bar">
          <div style={{ width: "99%" }}></div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-label">
          <img src={cpp} alt="C++ Icon" className="skill-icon" />
          C++
        </div>
        <div className="bar">
          <div style={{ width: "70%" }}></div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-label">
          <img src={javascript} alt="JavaScript Icon" className="skill-icon" />
          JavaScript
        </div>
        <div className="bar">
          <div style={{ width: "50%" }}></div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-label">
          <img src={godot} alt="Godot Icon" className="skill-icon" />
          Godot
        </div>
        <div className="bar">
          <div style={{ width: "65%" }}></div>
        </div>
      </div>

    </div>
  );
}
