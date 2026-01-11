import Image from "next/image";
import { MdAlternateEmail } from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";
import { LuBriefcaseBusiness } from "react-icons/lu";

export default function Contact() {
  return (
    <>
    <div className="page-content">
      <section className="guidelines">
        <h1 className="guidelines_title">2차 창작 가이드라인 (251230 수정안)</h1>

        <p className="guidelines_p">
          본 가이드라인은 Team Virlab이 소유한 버추얼 스트리머 IP 및 우타이테 IP를 이용한
          <br />
          시청자 여러분의 2차 창작 활동을 장려하기 위해 제작되었습니다.
        </p>

        <p className="guidelines_p">
          모든 2차 창작물은 본 가이드라인과 대한민국 법령, Mascoz 이용약관을 준수해야 하며,
          <br />
          Team Virlab 또는 Mascoz의 이미지 및 권리에 해를 끼칠 수 있는 창작물에 대해서는
          <br />
          관련 가이드라인 및 법 해석에 따라 운영부 판단 하에 조치가 이루어질 수 있습니다.
        </p>

        <br />
        <b>0. 공통</b>
        <ol className="guidelines_list">
          <li>본 가이드라인은 시청자 여러분이 2차 창작물을 자유롭게 제작할 수 있도록 규정된 기준입니다.</li>
          <li>모든 2차 창작물은 Team Virlab이 제작한 공식 콘텐츠로 오인될 수 있는 요소를 포함해서는 안 됩니다.</li>
          <li>Team Virlab의 로고는 사전 허가 없이 2차 창작물에 사용하거나 변형하여 사용할 수 없습니다.</li>
        </ol>

        <br />
        <b>1. 팬아트 &amp; 팬굿즈</b>
        <p className="guidelines_p">건전한 팬아트 문화를 조성하기 위해 아래의 규정을 준수해 주시기 바랍니다.</p>
        <ol className="guidelines_list">
          <li>R18, 과도한 성적 표현, 유혈 및 폭력 표현 등 수위가 높은 팬아트는 금지됩니다.</li>
          <li>사회적 논란 또는 문제가 될 수 있는 내용을 포함한 팬아트는 금지됩니다.</li>
          <li>팬아트는 Team Virlab 소속 크루 및 Mascoz의 이미지에 해를 끼쳐서는 안 됩니다.</li>
          <li>
            팬아트를 통한 상업적 이용 및 수익 창출은 Mascoz의 약관과 별개로 Team Virlab 크루의 방침상 제한됩니다.
            <br />
            <span className="guidelines_note">
              ㄴ 이 제한은 상업적 활동 및 이용에 한하며, 시청자 여러분의 개인적인 굿즈 제작을 제한하지 않습니다.
            </span>
          </li>
        </ol>

        <br />
        <b>2. 팬게임</b>
        <p className="guidelines_p">문제 없는 팬게임 제작을 위해 아래의 규정을 준수해 주시기 바랍니다.</p>
        <ol className="guidelines_list">
          <li>팬게임에 사용되는 Team Virlab 관련 이미지 및 일러스트는 팬아트 가이드라인을 준수해야 합니다.</li>
          <li>게임 내 모든 콘텐츠는 원저작자의 허락을 받지 않은 저작물을 포함해서는 안 됩니다.</li>
          <li>팬게임은 Team Virlab이 제작하거나 공식 배포한 콘텐츠로 오인될 수 있어서는 안 됩니다.</li>
          <li>팬게임을 통한 상업적 이용 및 수익 창출은 금지됩니다.</li>
        </ol>

        <br />
        <b>3. 팬사이트</b>
        <p className="guidelines_p">팬사이트의 정상적인 운영과 관리를 위해 아래의 규정을 준수해 주시기 바랍니다.</p>
        <ol className="guidelines_list">
          <li>팬사이트는 비공식 팬사이트임을 명확히 표시해야 합니다.</li>
          <li>Team Virlab의 공식 사이트, 공식 계정, 공식 서비스로 오인될 수 있는 명칭·구성·디자인 사용은 금지됩니다.</li>
          <li>Team Virlab의 로고 및 공식 자료는 사전 허가 없이 사용할 수 없습니다.</li>
          <li>팬사이트를 통한 상업적 이용 및 수익 창출은 금지됩니다.</li>
          <li>운영부 또는 크루의 요청이 있을 경우, 문제가 되는 콘텐츠는 수정 또는 삭제되어야 합니다.</li>
        </ol>

        <br />
        <b>4. 키리누키 (방송 클립)</b>
        <p className="guidelines_p">방송 키리누키 콘텐츠의 건전한 활용을 위해 아래의 규정을 준수해 주시기 바랍니다.</p>
        <ol className="guidelines_list">
          <li>Team Virlab 소속 크루의 방송을 활용한 키리누키 제작은 허용됩니다.</li>
          <li>키리누키는 발언 및 의도를 왜곡하지 않는 범위 내에서 제작되어야 합니다.</li>
          <li>크루, Team Virlab 또는 제3자의 명예를 훼손하거나 오해를 유발하는 편집은 금지됩니다.</li>
          <li>
            출처(원본 방송 또는 공식 채널)는 반드시 명시해야 하며, 유튜브·치지직 등 무료 시청이 가능한 플랫폼에 업로드할 수 있습니다.
          </li>
          <li>Team Virlab 또는 크루가 제작한 공식 콘텐츠로 오인될 수 있는 표현은 금지됩니다.</li>
          <li>키리누키 콘텐츠를 통한 상업적 이용 및 수익 창출은 허용됩니다.</li>
          <li>다만, 향후 발생할 수 있는 문제를 방지하기 위해 사전에 Team Virlab 또는 해당 크루의 허락을 받는 것을 권장합니다.</li>
          <li>사전 허가 없이 발생한 문제 및 분쟁에 대해 Team Virlab은 책임지지 않습니다.</li>
          <li>운영부 또는 크루의 요청이 있을 경우, 문제가 되는 콘텐츠는 수정 또는 삭제되어야 합니다.</li>
          <li>키리누키에 사용된 방송의 저작권은 해당 크루 개인에게 있으며, 저작권과 관련된 모든 책임은 제작자 본인에게 있습니다.</li>
        </ol>

        <br />
        <b>5. 아바타 및 저작권 관련 유의사항 (신설)</b>
        <ol className="guidelines_list">
          <li>Team Virlab 크루가 사용하는 아바타 및 관련 콘텐츠의 원저작권은 주식회사 오버더핸드(Mascoz)에 귀속됩니다.</li>
          <li>
            마스코즈 캐릭터를 기반으로 동일하거나 유사한 아바타를 별도로 제작하여 사용하는 행위는 저작권 침해에 해당할 수 있으며, 이를 금지합니다.
          </li>
        </ol>

        <br />
        <b>6. 기타 및 유의 사항</b>
        <ol className="guidelines_list">
          <li>
            본 가이드라인에 명시되지 않은 사항이라 하더라도, Team Virlab 또는 Mascoz의 이미지 및 권리에 중대한 영향을 미칠 경우 운영부 판단에 따라 조치가 이루어질 수 있습니다.
          </li>
          <li>본 가이드라인은 상황에 따라 수정될 수 있으며, 변경 사항은 공지를 통해 안내됩니다.</li>
        </ol>
      </section>
    </div>
    </>
  );
}