import Image from "next/image";
import VirlabSwiper from "./scripts/slider";
import Link from "next/link";

import { FaClipboardUser } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  const slides = [
    {
      image: "/slide1.png",
      title: "세상을 우리들의 색으로!",
      subtitle: "Team Virlab 공식 홈페이지에 오신 것을 환영합니다.",
      href: "/crew",
      buttonLabel: "크루 보러가기",
      newTab: false,
    },
    {
      image: "/slide4.png",
      title: "2차 창작 가이드라인",
      subtitle:
        "Team Virlab이 소유한 버추얼 스트리머 IP 및 우타이테 IP를 이용한 시청자 여러분의 2차 창작 활동을 장려하기 위해 제작된 가이드라인을 확인해보세요!",
      href: "/guidelines",
      buttonLabel: "가이드라인 보러가기",
      newTab: true,
      },
    {
      image: "/slide3.png",
      title: "Team Virlab 네이버 카페",
      subtitle:
        "Team Virlab의 빠른 소식과 다양한 정보를 네이버 카페에서 만나보세요!",
      href: "https://cafe.naver.com/teamvirlab",
      buttonLabel: "네이버 카페로 이동",
      newTab: true,
    },
  ];

  return (
    <div className="page-content">
      <section className="home">
        <div className="slider">
          <VirlabSwiper slides={slides} />
        </div>

        <div className="buttons_div">
          <div className="buttons_grid">
            <Link href="/about" className="home_button">
              <div className="home_button_icon">
                <IoMdInformationCircleOutline 
                  alt="소개"
                  style={{ width: "55px", height: "55px" }}
                />
              </div>
              <span className="home_button_text">Team Virlab 소개</span>
            </Link>

            <Link href="/crew" className="home_button">
              <div className="home_button_icon">
                <FaClipboardUser
                  alt="크루"
                  style={{ width: "55px", height: "55px" }}
                />
              </div>
              <span className="home_button_text">Team Virlab 크루</span>
            </Link>

            <Link href="/contact" className="home_button">
              <div className="home_button_icon">
                <IoChatbubbleEllipsesOutline 
                  alt="문의"
                  style={{ width: "55px", height: "55px" }}
                />
              </div>
              <span className="home_button_text">문의하기</span>
            </Link>
            <a href="https://x.com/virlab_official" className="home_button" target="_blank">
              <div className="home_button_icon">
                <BsTwitterX 
                  alt="X(구 트위터)"
                  style={{ width: "45px", height: "45px" }}
                />
              </div>
              <span className="home_button_text">Team Virlab X</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
