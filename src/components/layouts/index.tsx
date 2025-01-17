import { useRouter } from 'next/router';
import { FC } from 'react';
import { tRootLayoutProp } from '@/utils/types/propTypes';
import Header from './Header';
import Footer from './Footer';

import { Montserrat, Playwrite_IN } from 'next/font/google';
import localFont from 'next/font/local';

// Font for testing the configuration. You can remove this.
const playWriteIndia = Playwrite_IN({
  weight: ['400'],
  variable: '--font-playwrite-India',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});
const tradeGothic = localFont({
  src: [
    {
      path: '../../../public/font/Trade-Gothic.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/font/Trade-Gothic-Bold.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
});

const RootLayout: FC<tRootLayoutProp> = ({ children }) => {
  const router = useRouter();

  // List of routes without header and footer
  const noLayoutRoutes = ['/signin', '/signup', '/forgot-password'];

  // Check if the current route is in the list
  const hideLayout = noLayoutRoutes.includes(router.pathname);

  return (
    <>
      <style jsx global>{`
        :root {
          --font-montserrat: ${montserrat.style.fontFamily};
          --font-trade-gothic: ${tradeGothic.style.fontFamily};
          --font-play-write-india: ${playWriteIndia.style.fontFamily};
        }
      `}</style>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

export default RootLayout;
