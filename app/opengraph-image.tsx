import { ImageResponse } from "next/og";

export const alt = "Swetank Pandey — Aspiring Data Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b0d10",
          color: "#eef1ee",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#c9793f", marginBottom: 28 }}>
          BUSINESS ANALYTICS · SYSTEMS
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 108, fontWeight: 700, lineHeight: 0.95, letterSpacing: -2 }}>
          <span>SWETANK</span>
          <span style={{ color: "#c9793f" }}>PANDEY</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8b9199", marginTop: 36, maxWidth: 820 }}>
          Aspiring Data Analyst — SQL, Excel, Power BI, Python — and builder of Linux tools.
        </div>
      </div>
    ),
    { ...size }
  );
}
