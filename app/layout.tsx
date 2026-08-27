import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LightRays from "../components/LightRays";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Event",
  description: "The Hub for Every Dev Event Which Can't Be Missed!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full min-h-screen antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="absolute z-[-1] min-h-screen inset-0 top-0">
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0}
            distortion={0.01}
            // className="custom-rays"
            // pulsating={false}
            // fadeDistance={1}
            // saturation={1}
          />
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
