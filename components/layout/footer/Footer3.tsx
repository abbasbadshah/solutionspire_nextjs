import Link from "next/link";

interface NavLink {
  [key: string]: string[];
}

interface SocialLink {
  href: string;
  icon: string;
}

interface GalleryImage {
  src: string;
  href: string;
}

export default function Footer3(): JSX.Element {
  const navLinks: NavLink = {
    Company: [
      "Home",
      "About Us",
      "Services",
      "Contact",
      "Testimonials",
      "Career",
    ],
    "UI/UX": [
      "Graphic Desinging",
      "Figma",
      "UI/UX Dervelopment",
      "Branding",
    ],
    "Development": [
      "Software Development",
      "Web Developmnet",
      "Ecommerce Developmnet",
      "Dashboard Development",
      "ERP Development",
    ],
    "Website Ranking": [
      "Digital Marketing",
      "On Page SEO",
      "Off Page SEO",
      "Keywords",
    ],
  };

  const socialLinks: SocialLink[] = [
    {
      href: "https://www.instagram.com/solutionspire/",
      icon: "fa-brands fa-instagram",
    },
    {
      href: "https://wa.me/917869249982?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.",
      icon: "fa-brands fa-whatsapp",
    },
    {
      href: "https://www.linkedin.com/company/solution-spire/",
      icon: "bi bi-linkedin",
    },
    {
      href: "https://www.upwork.com/agencies/1871822668391187438/",
      icon: "fa-brands fa-upwork",
    },
  ];

  const galleryImages: GalleryImage[] = Array.from({ length: 6 }, (_, i) => ({
    src: `assets/imgs/footer-3/img-inst-${i + 1}.png`,
    href: "/http://instagram.com/username",
  }));

  const renderNavSection = (title: string, links: string[]): JSX.Element => (
    <div className="col-lg-3 col-md-4 col-6">
      <h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0">
        {title}
      </h3>
      <div className="d-flex flex-column align-items-start">
        {links.map((text: string, i: number) => (
          <Link
            key={i}
            className="hover-effect text-white mb-2 fw-medium fs-6"
            href="/#"
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <footer>
      <div className="section-footer">
        <div className="container-fluid bgft-1">
          <div className="container position-relative z-2">
            <div className="d-flex py-4 border-bottom border-white border-opacity-10 justify-content-between align-items-center">
              <Link href="/">
                <img
                  src="assets/imgs/logo/solutionspire-logo-white.png"
                  alt="Solution Spire"
                  className="splogo"
                />
              </Link>
              <div className="d-flex social-icons">
                {socialLinks.map(({ href, icon }, i) => (
                  <Link
                    key={i}
                    href={href}
                    className={`text-white border border-light border-opacity-10 icon-shape icon-md ${
                      i === 0
                        ? "border-end-0"
                        : i === socialLinks.length - 1
                        ? "border-start-0"
                        : ""
                    }`}
                  >
                    <i className={icon}></i>
                  </Link>
                ))}
              </div>
            </div>

            <div className="row py-90">
              <div className="col-lg-8">
                <div className="row">
                  {Object.entries(navLinks).map(([title, links], i) =>
                    renderNavSection(title, links)
                  )}
                </div>
              </div>

              <div className="col-lg-3 pt-5 pt-lg-0">
                <p className="text-white fw-black opacity-50 text-uppercase">
                  Gallery
                </p>
                {[0, 1].map((row: number) => (
                  <div key={row} className={`d-flex ${row > 0 ? "mt-2" : ""}`}>
                    {galleryImages
                      .slice(row * 3, (row + 1) * 3)
                      .map((img, i) => (
                        <Link key={i} href={img.href} className="me-2 hover-up">
                          <img
                            className="rounded-3"
                            src={img.src}
                            alt="Solution Spire"
                          />
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="row">
              <div className="d-flex flex-md-row flex-column align-items-center justify-content-between bg-transparent py-4 border-top border-opacity-10">
                <span className="text-white opacity-50 mb-3 mb-md-0">
                  Copyright © {new Date().getFullYear()} Solution Spire. All
                  Rights Reserved
                </span>
                <div className="d-flex">
                  {["Privacy policy", "Cookies", "Terms of service"].map(
                    (text: string, i: number) => (
                      <Link
                        key={i}
                        href="/#"
                        className="link-hover-primary-light text-white me-3"
                      >
                        {text}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
