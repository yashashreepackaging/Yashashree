import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Yashashree Packaging | Corrugated Box Manufacturer & Packaging Solutions",
  description:
    "Yashashree Packaging - Corrugated Box Manufacturer & Packaging Solutions provider in Pune, Maharashtra.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

