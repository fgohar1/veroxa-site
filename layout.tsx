export const metadata = {
  title: "Veroxa",
  description: "Restaurant Growth System"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0, fontFamily:"Arial, sans-serif", background:"#0b0b0b", color:"#fff"}}>
        {children}
      </body>
    </html>
  );
}