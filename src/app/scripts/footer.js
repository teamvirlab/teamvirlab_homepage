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
        </div>
      </div>
    </footer>
  );
}
