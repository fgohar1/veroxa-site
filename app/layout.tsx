import "./globals.css";

export const metadata = {
  title: "Veroxa",
  description: "Restaurant Growth System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
