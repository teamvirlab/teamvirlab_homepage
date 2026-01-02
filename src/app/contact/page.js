import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="page-content">
      <section className="home">
        <div className="buttons_div">
          <div className="buttons_grid">
            <a href="mailto:contact@virlab.kr" className="home_button">공통 문의</a>
            <a href="mailto:business@virlab.kr" className="home_button">비즈니스 문의(합방, 제휴 등)</a>
            <a href="mailto:report@virlab.kr" className="home_button">신고 & 제보하기</a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}