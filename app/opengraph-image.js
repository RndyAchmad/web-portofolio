import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
                    background: "linear-gradient(135deg, #0a0a0a 0%, #111827 60%, #1f2937 100%)",
                    color: "white",
                    fontFamily: "sans-serif",
                    padding: 48,
                }}
            >
                <div
                    style={{
                        fontSize: 64,
                        fontWeight: 800,
                        color: "#f97316",
                        marginBottom: 16,
                    }}
                >
                    Rendy Achmadiansyah Mukti
                </div>
                <div style={{ fontSize: 30, marginBottom: 12 }}>
                    Fullstack Web Developer • Backend Developer • Next.js Developer
                </div>
                <div style={{ fontSize: 24, color: "#d1d5db" }}>
                    Laravel Developer • Web Developer Indonesia
                </div>
            </div>
        ),
        size,
    );
}
