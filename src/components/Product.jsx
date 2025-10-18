import React from "react";
import useConfig from "../store";
import Stage from "./Stage";
import clsx from "classnames";

function Sw({ value, sel, onPick }) {
  return (
    <button
      className={sel ? "sw sel" : "sw"}
      style={{ background: value }}
      onClick={() => onPick(value)}
      aria-label={value}
    />
  );
}

export default function Product() {
  const cfg = useConfig();
  const colors = {
    bodyColor: cfg.bodyColor,
    hardwareColor: cfg.hardwareColor,
    shelfColor: cfg.shelfColor,
  };
  const thumbs = [1, 2, 3, 4, 5];
  return (
    <div
      className={clsx("board", cfg.preview === "mobile" && "mobile")}
      style={{
        padding: cfg.containerPad,
        background: cfg.sectionBg,
        borderColor: cfg.strokeColor,
        borderWidth: cfg.strokeWeight,
        borderRadius: cfg.cardRadius,
      }}
    >
      <div className="grid">
        <div className="gallery" style={{ gap: cfg.galleryGap }}>
          {thumbs.map((i) => {
            const png = `${import.meta.env.BASE_URL}gallery/${i}.png`;
            const jpg = `${import.meta.env.BASE_URL}gallery/${i}.jpg`;
            return (
              <div
                key={i}
                className="thumb"
                style={{ borderRadius: cfg.galleryRadius }}
              >
                <img
                  src={png}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = jpg;
                  }}
                  onClick={() => window.open(png, "_blank")}
                  style={{ cursor: "pointer" }}
                  alt={`thumb-${i}`}
                />
              </div>
            );
          })}
        </div>
        <Stage colors={colors} map={cfg.materialMap} />
        <div
          className="panel"
          style={{
            borderColor: cfg.strokeColor,
            borderWidth: cfg.strokeWeight,
            borderRadius: cfg.cardRadius,
            fontFamily: cfg.fontFamily,
          }}
        >
          <h2 style={{ fontSize: cfg.fontSize, fontWeight: cfg.fontWeight }}>
            Cabinet
          </h2>
          <div className="sub">Customize your Cabinet</div>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>
              1. Components Finish
            </div>
            <div className="swatches">
              {[
                "#D6A662",
                "#C08A52",
                "#8E9499",
                "#6F757B",
                "#4A5157",
                "#B0B4B8",
                "#B7BDC4",
                "#A78BFA",
              ].map((c) => (
                <Sw
                  key={c}
                  value={c}
                  sel={cfg.hardwareColor === c}
                  onPick={(v) => cfg.set("hardwareColor", v)}
                />
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>
              2. Shelf Finish
            </div>
            <div className="swatches">
              {[
                "#ffffff",
                "#f5efe8",
                "#ede6de",
                "#e6e6e6",
                "#cfcfcf",
                "#b9b9b9",
                "#a3a3a3",
                "#8d8d8d",
              ].map((c) => (
                <Sw
                  key={c}
                  value={c}
                  sel={cfg.shelfColor === c}
                  onPick={(v) => cfg.set("shelfColor", v)}
                />
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>
              3. Body Finish
            </div>
            <div className="swatches">
              {[
                "#d0d0d0",
                "#c4b9af",
                "#b39d8a",
                "#8f7a66",
                "#6c5f53",
                "#4b3f37",
              ].map((c) => (
                <Sw
                  key={c}
                  value={c}
                  sel={cfg.bodyColor === c}
                  onPick={(v) => cfg.set("bodyColor", v)}
                />
              ))}
            </div>
          </div>

          <div className={clsx("btnwrap", cfg.btnAlign)}>
            <div className="price">
              <div className="was">${cfg.was}</div>
              <div className="now">${cfg.price}</div>
            </div>
            <button
              className={clsx("btn", cfg.btnShadow)}
              style={{
                borderRadius: cfg.btnRadius,
                background: cfg.btnBg,
                color: cfg.btnText,
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
