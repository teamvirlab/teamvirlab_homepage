import Image from "next/image";
import { MdAlternateEmail } from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";
import { LuBriefcaseBusiness } from "react-icons/lu";

export default function Home() {
  return (
    <>
    <div className="page-content">
      <section className="home">
        <div className="buttons_div">
          <div className="buttons_grid">
            <a href="mailto:contact@virlab.kr" className="home_button">
              <div className="home_button_icon">
                <MdAlternateEmail  
                  alt="소개"
                  style={{ width: "55px", height: "55px" }}
                />
              </div>
              <span className="home_button_text">공통 문의</span>
            </a>
            <a href="mailto:business@virlab.kr" className="home_button">
              <div className="home_button_icon">
                <LuBriefcaseBusiness  
                  alt="비즈니스 문의"
                  style={{ width: "55px", height: "55px" }}
                />
              </div>
              <span className="home_button_text">비즈니스 문의(합방, 제휴 등)</span>
            </a>
            <a href="mailto:report@virlab.kr" className="home_button">
              <div className="home_button_icon">
                <TbMessageReport  
                  alt="신고 & 제보"
                  style={{ width: "55px", height: "55px" }}
                />
              </div>
              <span className="home_button_text">신고 & 제보하기</span>
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}