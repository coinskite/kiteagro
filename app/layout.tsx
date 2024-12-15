import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/common/footer";
import Nav from "@/components/common/nav";

export const metadata: Metadata = {
  title: "Kite Agro",
  description: "kite Agro - Coinskite",
}

type props = Readonly<{
  children: React.ReactNode
}>

function RootLayout({ children }: props) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout