import localFont from 'next/font/local';
import './globals.css';
import Navbar from './scripts/navbar';
import VirlabPageTransition from "./scripts/transition";
import Footer from './scripts/footer';

const pretendard = localFont({ 
  src: '../../public/fonts/PretendardJPVariable.woff2',
  name: 'Pretendard JP Variable',
  weight: '400 700',
 });


export const metadata = {
  title: 'Team Virlab 공식 홈페이지',
  description: '세상을 우리들의 색으로! Team Virlab 공식 홈페이지입니다.',
  keywords: ['Team Virlab, 버추얼, 스트리머 크루, 팀 버랩'],
  openGraph: {
    site_name: 'Team Virlab',
    title: 'Team Virlab 공식 홈페이지',
    description: '세상을 우리들의 색으로! Team Virlab 공식 홈페이지입니다.',
    images: [
      {
        url: 'https://virlab.kr/metadata.png',
      },
    ],
    link: 'https://virlab.kr',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable}`}>
        <div className="background-blur" />
        <Navbar />
        <VirlabPageTransition>{children}</VirlabPageTransition>
        <Footer />
      </body>
    </html>
  );
}
