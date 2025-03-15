import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

import ClientWrapper from "@/components/common/client-arapper";
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
        <ClientWrapper>
          <Nav />
          {children}
          <Footer />
        </ClientWrapper>

        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout