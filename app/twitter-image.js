import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
                    color: "white",
                    fontFamily: "sans-serif",
                    padding: 48,
                }}
            >
                <div style={{ fontSize: 72, fontWeight: 800, color: "#f97316" }}>
                    Rendy Achmadiansyah Mukti
                </div>
                <div style={{ fontSize: 28, marginTop: 16 }}>
                    Fullstack Web Developer • Laravel Developer • Next.js Developer
                </div>
            </div>
        ),
        size,
    );
}
