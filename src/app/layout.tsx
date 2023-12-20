import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: 'Rupiahku',
  description: 'Dompet digital untuk semua',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
      <html lang="en">
         <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
               href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
               rel="stylesheet"
            ></link>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <script
               src="https://challenges.cloudflare.com/turnstile/v0/api.js"
               async
               defer
            ></script>
         </head>
         <body>
            <Providers>{children}</Providers>
         </body>
      </html>
   );
}
