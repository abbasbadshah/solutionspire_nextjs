import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import Search from "../Search";
import OffCanvas from "../OffCanvas";
import ThemeSwitch from "@/components/elements/ThemeSwitch";
import Menu from "../Menu";

export default function Header4({
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
  isOffCanvas,
  handleOffCanvas,
}: any) {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage?.getItem("theme") || "light";
    setCurrentTheme(savedTheme);

    // Set up theme change observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-bs-theme') {
          const newTheme = document.documentElement.getAttribute('data-bs-theme');
          setCurrentTheme(newTheme || 'light');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-bs-theme']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        if (currentScroll > lastScroll) {
          setIsSticky(true);
        } else if (currentScroll < lastScroll && currentScroll < 200) {
          setIsSticky(false);
        }
      } else {
        setIsSticky(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const logoSrc = currentTheme === "dark" 
    ? "assets/imgs/logo/solutionspire-logo-white.png"
    : "assets/imgs/logo/solutionspire-logo.png";

  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg navbar-light w-100 z-999 header-4 ${
            isSticky ? "navbar-stick" : ""
          }`}
          style={{
            position: isSticky ? "fixed" : "relative",
            top: isSticky ? "0" : "auto",
            bottom: isSticky ? "auto" : "0",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <div className="container">
            <Link
              className="navbar-brand d-flex main-logo align-items-center"
              href="/"
            >
              <img
                className="splogo"
                src={logoSrc}
                alt="Solution Spire"
              />
            </Link>
            <Menu />
            <div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
              <a
                href="javascript:void(0)"
                data-bs-toggle="offcanvas"
                data-bs-target=".offcanvasTop"
                onClick={handleSearch}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    className="stroke-dark"
                    d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <ThemeSwitch />
              <a
                className="menu-tigger bg-primary icon-shape icon-md rounded-2 d-none d-md-flex cursor-pointer"
                onClick={handleOffCanvas}
              >
                <img src="assets/imgs/logo/icon-menu.svg" alt="Solution Spire" />
              </a>
              <div
                className="burger-icon burger-icon-white border rounded-3"
                onClick={handleMobileMenu}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>
        </nav>

        <OffCanvas
          handleOffCanvas={handleOffCanvas}
          isOffCanvas={isOffCanvas}
        />
        <Search isSearch={isSearch} handleSearch={handleSearch} />
        <MobileMenu
          handleMobileMenu={handleMobileMenu}
          isMobileMenu={isMobileMenu}
        />
      </header>
    </>
  );
}