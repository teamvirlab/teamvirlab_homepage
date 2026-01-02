import Image from "next/image";

export default function Home() {
  return (
    <div className="page-content">
      <section className="about">
        <div className="about_text">
          <h1 className="about_title">
            세상을 우리들의 색으로!
          </h1>

          <h2 className="about_subtitle">
            안녕하세요,
            <br />
            대한민국 버추얼 스트리머 / 우타이테 크루 <b>Team Virlab</b>입니다!
          </h2>
        </div>

        <div className="about_anchor">
          <div className="about_anchor_bar" />
          <div className="about_anchor_text">Team Virlab 소개</div>
          <div className="about_anchor_des">Team Virlab은 대한민국의 버추얼 스트리머와 우타이테 크루입니다.
            <br />
            <br />
            Team Virlab은 누구나 참여할 기회가 있으며,
            <br />
            세상을 각자의 개성으로 칠해나가자는 사명을 가지고 활동하고 있습니다.</div>
        </div>

        <div className="about_anchor">
          <div className="about_anchor_bar" />
          <div className="about_anchor_text">Team Virlab만의 특징</div>
          <div className="about_anchor_des">Team Virlab은 MCN이 아닌 크루 형식으로 운영됩니다.
            <br />
            <br />
            크루의 각자의 개성이 잘 드러날 수 있도록 팀은 간섭을 일체 하지 않으며,
            <br />
            크루 개개인의 의견을 존중하고 지원하는 데에 중점을 두고 있습니다.
            <br />
            <br />
            팀은 크루의 경제적인 부분을 전혀 간섭하지 않으며,
            <br />
            크루는 자신의 수익에 대한 온전한 권리를 보유합니다.
            <br />
            <br />
            다른 크루와는 다르게 Team Virlab은 기수제로 운영됩니다.
            <br />
            현재 활동 중인 크루들은 1기ㆍ아스트라 크루이며,
            <br />시청자 여러분들께 자신의 개성을 드러내는 활동을 하는 중입니다.
            <br />
            <br />
            앞으로도 Team Virlab은 더 많은 크루들을 모집할 예정이며,
            <br />
            그때마다 시청자 여러분들이 새로운 개성을 가진 크루를 찾아낼 수 있도록 도와주시기 바랍니다.
          </div>
        </div>
      </section>
    </div>
  );
}
