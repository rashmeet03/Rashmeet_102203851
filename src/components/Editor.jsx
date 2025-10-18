import React from "react";
import useConfig from "../store";
export default function Editor() {
  const cfg = useConfig();
  const dl = () => {
    const blob = new Blob([cfg.exportJSON()], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ui-config.json";
    a.click();
    URL.revokeObjectURL(a.href);
  };
  return (
    <aside className="sidebar">
      <div className="section">
        <h3>Typography</h3>
        <div className="rowc">
          <label>Font Weight</label>
          <input
            type="range"
            min="400"
            max="700"
            step="100"
            value={cfg.fontWeight}
            onChange={(e) => cfg.set("fontWeight", parseInt(e.target.value))}
          />
          <div className="val">{cfg.fontWeight}</div>
        </div>
        <div className="rowc">
          <label>Font Size</label>
          <input
            type="range"
            min="10"
            max="60"
            value={cfg.fontSize}
            onChange={(e) => cfg.set("fontSize", parseInt(e.target.value))}
          />
          <div className="val">{cfg.fontSize}</div>
        </div>
      </div>
      <div className="section">
        <h3>Button</h3>
        <div className="rowc">
          <label>Border Radius</label>
          <input
            type="range"
            min="0"
            max="32"
            value={cfg.btnRadius}
            onChange={(e) => cfg.set("btnRadius", parseInt(e.target.value))}
          />
          <div className="val">{cfg.btnRadius}</div>
        </div>
        <div className="rowc">
          <label>Shadow</label>
          <select
            value={cfg.btnShadow}
            onChange={(e) => cfg.set("btnShadow", e.target.value)}
          >
            <option value="shadow-none">None</option>
            <option value="shadow-sm">Small</option>
            <option value="shadow-md">Medium</option>
            <option value="shadow-lg">Large</option>
          </select>
        </div>
        <div className="rowc">
          <label>Alignment</label>
          <select
            value={cfg.btnAlign}
            onChange={(e) => cfg.set("btnAlign", e.target.value)}
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
        <div className="rowc">
          <label>Background</label>
          <input
            type="text"
            value={cfg.btnBg}
            onChange={(e) => cfg.set("btnBg", e.target.value)}
          />
          <input
            type="color"
            value={cfg.btnBg}
            onChange={(e) => cfg.set("btnBg", e.target.value)}
          />
        </div>
        <div className="rowc">
          <label>Text Color</label>
          <input
            type="text"
            value={cfg.btnText}
            onChange={(e) => cfg.set("btnText", e.target.value)}
          />
          <input
            type="color"
            value={cfg.btnText}
            onChange={(e) => cfg.set("btnText", e.target.value)}
          />
        </div>
      </div>
      <div className="section">
        <h3>Galleries / Images</h3>
        <div className="rowc">
          <label>Spacing</label>
          <input
            type="range"
            min="0"
            max="32"
            value={cfg.galleryGap}
            onChange={(e) => cfg.set("galleryGap", parseInt(e.target.value))}
          />
          <div className="val">{cfg.galleryGap}</div>
        </div>
        <div className="rowc">
          <label>Image Radius</label>
          <input
            type="range"
            min="0"
            max="24"
            value={cfg.galleryRadius}
            onChange={(e) => cfg.set("galleryRadius", parseInt(e.target.value))}
          />
          <div className="val">{cfg.galleryRadius}</div>
        </div>
      </div>
      <div className="section">
        <h3>General Layout</h3>
        <div className="rowc">
          <label>Card Corner Radius</label>
          <input
            type="range"
            min="0"
            max="32"
            value={cfg.cardRadius}
            onChange={(e) => cfg.set("cardRadius", parseInt(e.target.value))}
          />
          <div className="val">{cfg.cardRadius}</div>
        </div>
        <div className="rowc">
          <label>Container Padding</label>
          <input
            type="range"
            min="0"
            max="48"
            value={cfg.containerPad}
            onChange={(e) => cfg.set("containerPad", parseInt(e.target.value))}
          />
          <div className="val">{cfg.containerPad}</div>
        </div>
        <div className="rowc">
          <label>Section Background</label>
          <input
            type="text"
            value={cfg.sectionBg}
            onChange={(e) => cfg.set("sectionBg", e.target.value)}
          />
          <input
            type="color"
            value={cfg.sectionBg}
            onChange={(e) => cfg.set("sectionBg", e.target.value)}
          />
        </div>
      </div>
      <div className="section">
        <h3>Stroke / Border</h3>
        <div className="rowc">
          <label>Stroke Color</label>
          <input
            type="text"
            value={cfg.strokeColor}
            onChange={(e) => cfg.set("strokeColor", e.target.value)}
          />
          <input
            type="color"
            value={cfg.strokeColor}
            onChange={(e) => cfg.set("strokeColor", e.target.value)}
          />
        </div>
        <div className="rowc">
          <label>Stroke Weight</label>
          <input
            type="range"
            min="0"
            max="4"
            value={cfg.strokeWeight}
            onChange={(e) => cfg.set("strokeWeight", parseInt(e.target.value))}
          />
          <div className="val">{cfg.strokeWeight}</div>
        </div>
      </div>
      <div className="section">
        <button className="btn" onClick={dl}>
          Export JSON
        </button>
      </div>
    </aside>
  );
}
