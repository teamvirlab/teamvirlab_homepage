export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_inner">
        <div className="footer_left">
          <strong className="footer_brand">Team Virlab</strong>
          <p className="footer_desc">
            대한민국 버추얼 스트리머 / 우타이테 크루
          </p>
        </div>

        <div className="footer_right">
          <p className="footer_copy">
            © {new Date().getFullYear()} Team Virlab. All rights reserved.
          </p>
          <div className="footer_links">
            <a
              href="/operating-policy"
              rel="noopener noreferrer"
              className="footer_link"
            >
              운영방침
            </a>
            <div className="footer_link_divider">|</div>
            <a
              href="/guidelines"
              rel="noopener noreferrer"
              className="footer_link"
            >
              2차 창작 가이드라인
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
