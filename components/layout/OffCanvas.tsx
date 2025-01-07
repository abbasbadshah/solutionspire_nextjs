import Link from "next/link";
import { useState, useEffect } from "react";

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage?.getItem("theme") || "light";
    setCurrentTheme(savedTheme);

    // Set up theme change observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-bs-theme") {
          const newTheme =
            document.documentElement.getAttribute("data-bs-theme");
          setCurrentTheme(newTheme || "light");
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-bs-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const logoSrc =
    currentTheme === "dark"
      ? "/assets/imgs/logo/solutionspire-logo-white.png"
      : "/assets/imgs/logo/solutionspire-logo.png";

  return (
    <>
      {/* offCanvas-menu */}
      <div className={`offCanvas__info ${isOffCanvas ? "active" : ""}`}>
        <div className="offCanvas__close-icon menu-close">
          <button onClick={handleOffCanvas}>
            <i className="far fa-window-close" />
          </button>
        </div>
        <div className="offCanvas__logo mb-30">
          <Link href="/">
            <img src={logoSrc} alt="Logo" />
          </Link>
        </div>
        <div className="offCanvas__side-info mb-30">
          <div className="contact-list mb-30">
            <h4>Chat with us</h4>
            <p className="mb-3">
              The support team is always
              <br />
              available 24/7
            </p>
            <div className="d-flex mb-2">
              <img
                src="/assets/imgs/contact-2/icon-1.svg"
                alt="Solution Spire"
              />
              <Link
                className="ms-2 text-decoration-underline text-900 fs-7"
                href="https://wa.me/917869249982?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              >
                Chat via Whatsapp
              </Link>
            </div>
            {/* <div className="d-flex mb-2">
              <img
                src="/assets/imgs/contact-2/icon-2.svg"
                alt="Solution Spire"
              />
              <Link
                className="ms-2 text-decoration-underline text-900 fs-7"
                href="#"
              >
                Chat via Viber
              </Link>
            </div> */}
            {/* <div className="d-flex mb-2 mb-5">
              <img
                src="/assets/imgs/contact-2/icon-3.svg"
                alt="Solution Spire"
              />
              <Link
                className="ms-2 text-decoration-underline text-900 fs-7"
                href="#"
              >
                Chat via Messager
              </Link>
            </div> */}
          </div>
          {/* <div className="contact-list mb-30">
            <h4>Office Address</h4>
            <p>
              123/A, Miranda City Likaoli <br />
              Prikano, Dope
            </p>
          </div> */}
          <div className="contact-list mb-30">
            <h4>Phone Number</h4>
            <p>
              <Link href="tel:+91 78692 49982">+91 78692 49982</Link>
            </p>
            {/* <p>(+01) 456 789 21</p> */}
          </div>
          <div className="contact-list mb-30">
            <h4>Business Emails</h4>
            <p>
              <Link href="mailto:connect@solutionspire.com">
                connect@solutionspire.com
              </Link>
            </p>
            {/* <p>
              <Link href="mailto:support@solutionspire.com">support@solutionspire.com</Link>
            </p> */}
          </div>
          <div className="contact-list mb-30">
            <h4>Help support</h4>
            <p>
              Email{" "}
              <Link href="mailto:support@solutionspire.com">
                support@solutionspire.com
              </Link>{" "}
              For help with a current product or service or refer to FAQs and
              developer tools.
            </p>
          </div>
        </div>
        <div className="offCanvas__social-icon mt-30">
          <Link href="#">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link href="#">
            <i className="fab fa-twitter" />
          </Link>
          <Link href="#">
            <i className="fab fa-google-plus-g" />
          </Link>
          <Link href="#">
            <i className="fab fa-instagram" />
          </Link>
        </div>
      </div>
      <div
        className={`offCanvas__overly ${isOffCanvas ? "active" : ""}`}
        onClick={handleOffCanvas}
      />
    </>
  );
}
