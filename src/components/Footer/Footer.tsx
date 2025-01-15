const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__title">
          © 2025 URLShortener - Tool to shorten a long link
        </div>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a href="/" className="footer__list-link">
              ShortUrl
            </a>
          </li>
          <li className="footer__list-item">
            <a
              href="https://github.com/weirdflexer"
              className="footer__list-link"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
