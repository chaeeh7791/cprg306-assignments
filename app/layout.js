import "./globals.css";

export const metadata = {
  title: "Shopping List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> {children} </body>
    </html>
  );
}
