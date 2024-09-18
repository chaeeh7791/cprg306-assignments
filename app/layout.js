import "./globals.css";

export const metadata = {
  title: "CPRG306 Assignments",
  description: "Weekly Assignments for CPRG306: Web Development 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> {children} </body>
    </html>
  );
}
