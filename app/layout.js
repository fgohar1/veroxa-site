import "./globals.css";

export const metadata = {
  title: "Veroxa Systems",
  description: "Premium operating system for restaurants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
