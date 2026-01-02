import Image from "next/image";
import VirlabSwiper from "./scripts/slider";

export default function Home() {
  const slides = [
    {
      image: "/slide1.png",
      title: "세상을 우리들의 색으로!",
      subtitle: "Team Virlab 공식 홈페이지에 오신 것을 환영합니다.",
    },
    {
      image: "/slide1.png",
      title: "사이트 개발 중!",
      subtitle: "Team Virlab은 여러분들께 더 빨리 홈페이지를 공개할 수 있도록 노력하고 있습니다. 조금만 기다려 주세요!",
    },
    {
      image: "/slide1.png",
      title: "Team Virlab 네이버 카페",
      subtitle: "Team Virlab의 빠른 소식과 다양한 정보를 네이버 카페에서 만나보세요!",
      href: "https://cafe.naver.com/teamvirlab",
      buttonLabel: "네이버 카페로 이동",
      newTab: true,
    },
  ];

  return (
    <>
    <div className="page-content">
      <section className="home">
        <div className="slider">
          <VirlabSwiper slides={slides} />
        </div>
        <div className="buttons_div">
          <div className="buttons_grid">
            <a href="/about" className="home_button">Team Virlab 소개</a>
            <a href="/crew" className="home_button">Team Virlab 크루</a>
            <a href="/contact" className="home_button">문의하기</a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
