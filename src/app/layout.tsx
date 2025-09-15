
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import OneSignalProvider from '@/components/OneSignalProvider';

export const metadata: Metadata = {
  title: 'Nafij - Portfolio',
  description: "Portfolio of Nafij, a student and developer.",
  manifest: '/manifest.json',
  icons: {
    icon: '/mainfav.jpg',
    apple: '/mainfav.jpg',
    shortcut: '/mainfav.jpg',
  },
  themeColor: '#29abe2',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#29abe2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nafij Portfolio" />
        <link rel="icon" type="image/jpeg" href="/mainfav.jpg" />
        <link rel="apple-touch-icon" href="/mainfav.jpg" />
        <link rel="shortcut icon" href="/mainfav.jpg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className={cn('font-body antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <OneSignalProvider />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
