import React from "react";
import useConfig from "./store";
import Editor from "./components/Editor";
import Product from "./components/Product";
export default function App() {
  const preview = useConfig((s) => s.preview);
  const set = useConfig((s) => s.set);
  return (
    <>
      <header className="header">
        <strong>Dynamic UI Editor</strong>
        <div>
          <select
            value={preview}
            onChange={(e) => set("preview", e.target.value)}
            style={{
              background: "#FAF8F5",
              color: "#3D3027",
              border: "1px solid #3D3027",
              borderRadius: 20,
              padding: "2px 6px",
            }}
          >
            <option value="desktop">Desktop</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
      </header>
      <main className="main">
        <Editor />
        <Product />
      </main>
    </>
  );
}
