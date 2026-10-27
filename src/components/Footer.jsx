function Footer() {
  return (
    <footer className="footer">

      {/* Footer columns */}
      <div className="footer-columns">

        {/* Explore */}
        <div>
          <h2>Explore</h2>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>

        {/* Support */}
        <div>
          <h2>Support</h2>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>

        {/* Stay connected */}
        <div>
          <h2>Stay connected</h2>
          <p>f𝕏◎</p>
        </div>

      </div>

      {/* Footer title */}
      <div className="footer-title">
        <h2>DEV@Deakin 2026</h2>
      </div>

      {/* Footer links */}
      <div className="footer-links">
        <span>Privacy Policy</span>
        <span>Terms</span>
        <span>Code of Conduct</span>
      </div>

      {/* Bottom-centred information */}
      <div className="footer-copyright">
        <p>DEV@Deakin - SIT313 Secure Frontend Applications</p>
        <p>© 2026 DEV@Deakin. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;