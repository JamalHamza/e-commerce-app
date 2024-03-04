import Header from '@/components/header/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='min-h-screen flex flex-col'>
          <Header />
          {children}
          <footer
            className='footer footer-center p-4 bg-base-300 text-base-content'
            style={{ position: 'fixed', bottom: 0 }}
          >
            <p>Copyright © 2024 - All right reserved by JnH V2</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
