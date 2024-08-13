import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "F-Dev Project Image Viewer",
  description: "Peoject Image screeen short Viewer ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon.ico"
        />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
