import { create } from "zustand";

const useConfig = create((set, get) => ({
  fontFamily: "Inter, system-ui, Arial, sans-serif",
  fontWeight: 600,
  fontSize: 22,
  btnRadius: 10,
  btnShadow: "shadow-md",
  btnAlign: "right",
  btnBg: "#E57053",
  btnText: "#ffffff",
  galleryAlign: "left",
  galleryGap: 12,
  galleryRadius: 12,
  cardRadius: 14,
  containerPad: 16,
  sectionBg: "#ffffff",
  strokeColor: "#e5e7eb",
  strokeWeight: 1,
  preview: "desktop",

  bodyColor: "#d0d0d0",
  hardwareColor: "#d6a662",
  shelfColor: "#ffffff",
  price: 200,
  was: 245,

  materialMap: {
    byMaterial: {
      hardware: ["Golden", "golden metal", "golden metal.001"],
      shelf: ["Marble", "top_Mat"],
      body: [
        "Smooth Base",
        "Rough Black",
        "black plastic",
        "Material",
        "Material.001",
        "Material.002",
      ],
      ignore: [
        "bark_Mat",
        "bark_2_Mat",
        "bark_Mat.001",
        "wheat_Mat",
        "leave_1_Mat",
        "FlowerPot-AmJViz",
        "white ceramic",
        "Glass dark",
        "glas dark",
        "Copper Insulation Foil",
        "label treccherchi",
        "wine red",
        "DecorationDecahedron001_1K",
        "Galho seco ",
      ],
    },
    byMeshHint: {
      hardware: [
        "Knob_",
        "Golden_stripe",
        "Bottom_plate",
        "Cylinder",
        "Cylinder_1",
      ],
      shelf: ["Top_plank"],
      body: [],
    },
  },

  set: (k, v) => set({ [k]: v }),
  exportJSON: () => {
    const { set, exportJSON, ...rest } = get();
    return JSON.stringify(rest, null, 2);
  },
}));

export default useConfig;
