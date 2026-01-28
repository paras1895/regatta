import type { Metadata } from "next";
import LenisWrapper from "@/components/LenisWrapper";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "98th Regatta",
  description:
    "Regatta 98 celebrates nearly a century of tradition as India's oldest college festival, blending water sports, artistry, and the iconic Mashaal Dance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-light">
      <body>
        <ThemeProvider>
          <LenisWrapper>{children}</LenisWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
