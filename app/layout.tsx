import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Kazumi - Creative Design & Brand Strategy',
  description: '文化為脈絡，創意為羽翼。設計的吟唱者，故事的雕琢者，文化的紡織者。',
  openGraph: {
    title: 'Kazumi Portfolio',
    description: '設計的吟唱者，故事的雕琢者',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body className="bg-sand-50 text-sand-900">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
