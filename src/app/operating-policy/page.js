import Image from "next/image";
import { MdAlternateEmail } from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";
import { LuBriefcaseBusiness } from "react-icons/lu";

export default function Contact() {
  return (
    <>
    <div className="page-content">
      <section className="guidelines">
        <div className="contact_title">
          <h1 className="title_gradient">운영방침</h1>
          <p>Team Virlab의 운영방침을 확인해보세요.</p>
        </div>
        <iframe src="/operating-policy.pdf#toolbar=0&navpanes=0&scrollbar=0" width="600px" height="600px" />
        </section>

    </div>
    </>
  );
}