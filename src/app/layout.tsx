import "../styles/globals.css";
import Providers from "./providers";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { clsx } from 'clsx';

const fontClassName = 'font-aggress-b';

export const metadata = {
  title: 'Ploby: 취미 플랫폼',
  description: 'Ploby는 취미를 공유하고, 비슷한 사람들을 만나는 소셜 플랫폼입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={clsx(fontClassName)}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
