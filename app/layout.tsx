import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
// className={montserrat.className}
export const metadata = {
  title: "Try Krisna",
  description: "Try Krisna portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href='https://img.icons8.com/?size=512&id=FHQYz1px0h83&format=png'></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
