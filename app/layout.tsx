import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Toaster } from '@/components/ui/toaster'
import { ScrollProvider } from '@/components/scroll/scroll-context'
import { MenuProvider } from '@/components/navigation/menu-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lorenzo - AI & Automation Specialist',
  description: 'Expert in AI consulting, process automation, and custom AI development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProvider>
            <MenuProvider>
              <Navigation />
              {children}
              <Toaster />
            </MenuProvider>
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}