import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <BrandLogo />
            <p className="footer-copy">
              A premium visual discovery hub for real games, real ratings and
              real worlds.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>Navigate</span>
              <Link href="/">Home</Link>
              <Link href="/games">Discover</Link>
            </div>

            <div>
              <span>Data</span>
              <a
                href="https://rawg.io"
                target="_blank"
                rel="noreferrer"
              >
                RAWG
              </a>
              <a
                href="https://rawg.io/apidocs"
                target="_blank"
                rel="noreferrer"
              >
                API docs
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TAKAGHUB</span>

          <span>Game data & imagery courtesy of RAWG.io</span>

          <span>
            Powered by{" "}
            <a
              href="https://silverloft.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="silverloft-link"
            >
              SilverLoft
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}