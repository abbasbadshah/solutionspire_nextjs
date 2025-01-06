"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CountUp from "react-countup";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import emailjs from '@emailjs/browser';

interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
interface ITemplateParams extends IFormInputs {
  year: number;
}

export default function PageAbout() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IFormInputs>();

  // Initialize EmailJS
  emailjs.init("YOUR_PUBLIC_KEY");

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setIsSubmitting(true);
    try {
      const templateParams: ITemplateParams = {
        ...data,
        year: new Date().getFullYear()
      };

      await emailjs.send(
        'service_nrg97qc',
        'template_56iqwoi',
        templateParams,
        'z8N894F6_kXoy9V5C'
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  const swiperOptions = {
    slidesPerView: 1,
    // spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  // Tab
  const [isTab, setIsTab] = useState(1);

  const handleTab = (i: any) => {
    setIsTab(i);
  };

  // Nav
  const [isNav, setIsNav] = useState(1);

  const handleNav = (i: any) => {
    setIsNav(i);
  };

  return (
    <>
      <Layout headerStyle={4}>
        <section className="section-page-header py-10 fix position-relative">
          <div className="container position-relative z-1">
            <div className="text-start">
              <h3>About Us</h3>
              <div className="d-flex">
                <Link href="#">
                  <p className="mb-0 text-900">Home</p>
                </Link>
                <svg
                  className="mx-3 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={8}
                  height={13}
                  viewBox="0 0 8 13"
                  fill="none"
                >
                  <path
                    className="stroke-dark"
                    d="M1 1.5L6.5 6.75L1 12"
                    stroke="#111827"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-primary mb-0">About Us</p>
              </div>
            </div>
          </div>
          <img
            className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
            src="/assets/imgs/page-header/bg-line.png"
            alt="Solution Spire"
          />
          <div className="bouncing-blobs-container">
            <div className="bouncing-blobs-glass" />
            <div className="bouncing-blobs">
              <div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
              <div className="position-absolute top-0 end-0 bouncing-blob--primary" />
            </div>
          </div>
        </section>
        {/*cta 10 */}
        {/* <section className="section-cta-10 position-relative section-padding fix">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 ps-lg-0 pe-lg-8">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="Solution Spire" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Who we are</span>
								</div>
								<h5 className="ds-5 my-3">Where your financial dreams become reality</h5>
								<p className="fs-5 text-500">Solution Spire is a digital company specializing in website creation. Enterprises of all sizes—from emerging startups to large corporations—utilize our theme to develop and manage their online presence.</p>
								<div className="d-md-flex align-items-center mt-4 mb-5">
									<ul className="list-unstyled phase-items mb-0">
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="Solution Spire" />
											<span className="ms-2 text-900 fw-medium fs-6">Best For IT Consulting</span>
										</li>
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="Solution Spire" />
											<span className="ms-2 text-900 fw-medium fs-6">Save Money  Time</span>
										</li>
									</ul>
									<ul className="list-unstyled phase-items ms-md-5 mb-0">
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="Solution Spire" />
											<span className="ms-2 text-900 fw-medium fs-6">Innovative Approaches</span>
										</li>
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="Solution Spire" />
											<span className="ms-2 text-900 fw-medium fs-6">100% Satisfaction</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-5 offset-lg-1">
								<div className="text-center position-relative">
									<img className="rounded-4 border border-2 bg-white shadow-2 hover-up mt-5 p-6 position-relative z-1" src="/assets/imgs/cta-10/img-1.png" alt="Solution Spire" />
									<div className="bg-linear-1 rounded-4 position-absolute top-0 start-0 bottom-0 end-0 h-75 z-0" />
								</div>
							</div>
						</div>
					</div>
				</section> */}
        <section>
          <div className="container-fluid position-relative section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h5 className="fw-regular ds-5">
                    High{" "}
                    <span className="fw-bold">
                      Performance <br /> Services For{" "}
                    </span>{" "}
                    All Industries.
                  </h5>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-6 text-lg-start text-center">
                    <div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
                      <img
                        className="rounded-4 position-relative z-1"
                        src="/assets/imgs/cta-7/img-1.png"
                        alt="Solution Spire"
                      />
                      <div className="alltuchtopdown position-absolute top-50 start-50 ms-md-10 mt-md-10 backdrop-filter bg-primary rounded-4 px-6 py-4 text-center z-1">
                        <span className="h2 count fw-black mb-0 lh-1 text-white text-nowrap">
                          +<span className="odometer" />
                          <CountUp end={23} enableScrollSpy={true} />k
                        </span>
                        <p className="text-white text-nowrap border-bottom border-opacity-50 border-white pb-3 mb-3">
                          Projects Completed
                        </p>
                        <span className="h2 count fw-black my-0 lh-1 text-white text-nowrap">
                          +<span className="odometer" />
                          <CountUp end={98} enableScrollSpy={true} />k
                        </span>
                        <p className="text-white text-nowrap mb-0">
                          Happy Clients
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-lg-0 mt-5">
                    <nav>
                      <div
                        className="nav nav-tabs bg-neutral-100 justify-content-evenly border-bottom-0 mb-5"
                        id="nav-tab"
                        role="tablist"
                      >
                        <button
                          className={`${
                            isTab == 1 ? "nav-link active" : "nav-link"
                          } position-relative`}
                          data-bs-toggle="tab"
                          type="button"
                          onClick={() => handleTab(1)}
                          role="tab"
                        >
                          Our History
                          <span className="underline bg-primary" />
                        </button>
                        <button
                          className={`${
                            isTab == 2 ? "nav-link active" : "nav-link"
                          } position-relative`}
                          data-bs-toggle="tab"
                          type="button"
                          onClick={() => handleTab(2)}
                          role="tab"
                        >
                          Our Mission
                          <span className="underline bg-primary" />
                        </button>
                        <button
                          className={`${
                            isTab == 3 ? "nav-link active" : "nav-link"
                          } position-relative`}
                          data-bs-toggle="tab"
                          type="button"
                          onClick={() => handleTab(3)}
                          role="tab"
                        >
                          Our Vision
                          <span className="underline bg-primary" />
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className={`${
                          isTab == 1
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }`}
                        role="tabpanel"
                      >
                        {/* <p className="text-900 mb-3">
						Founded in 2022 by two like-minded friends passionate about technology, SolutionSpire was born from a shared vision to create a company that delivers innovative IT solutions. From humble beginnings, we’ve grown into a trusted name in the tech industry.
                        </p> */}
                        <div className="row">
                          <div className="col-12 col-md-6 mb-3 mb-md-0">
                            <p className="text-900">
                              Founded in 2022 by two like-minded friends
                              passionate about technology, SolutionSpire was
                              born from a shared vision to create a company that
                              delivers innovative IT solutions. From humble
                              beginnings, we’ve grown into a trusted name in the
                              tech industry.
                            </p>
                            <ul className="list-unstyled phase-items mb-0">
                              <li className="d-flex align-items-center mt-3">
                                <img
                                  src="/assets/imgs/cta-2/check.svg"
                                  alt="Solution Spire"
                                />
                                <p className="ms-2 mb-0 text-900 fs-6">
                                  Best For IT Consulting
                                </p>
                              </li>
                              <li className="d-flex align-items-center mt-3">
                                <img
                                  src="/assets/imgs/cta-2/check.svg"
                                  alt="Solution Spire"
                                />
                                <p className="ms-2 mb-0 text-900 fs-6">
                                  Tailored Solutions
                                </p>
                              </li>
                              <li className="d-flex align-items-center mt-3">
                                <img
                                  src="/assets/imgs/cta-2/check.svg"
                                  alt="Solution Spire"
                                />
                                <p className="ms-2 mb-0 text-900 fs-6">
                                  Save Money Time
                                </p>
                              </li>
                              <li className="d-flex align-items-center mt-3">
                                <img
                                  src="/assets/imgs/cta-2/check.svg"
                                  alt="Solution Spire"
                                />
                                <p className="ms-2 mb-0 text-900 fs-6">
                                  Expert Team
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-md-6 position-relative text-center">
                            <img
                              className="rounded-3"
                              src="/assets/imgs/cta-7/img-2.png"
                              alt=""
                            />
                            <Link
                              href="#"
                              className="position-md-absolute d-block translate-middle-md  w-50 start-0 ms-md-0 ms-10 mt-3 mt-md-0 p-3 rounded-3 bg-linear-1"
                            >
                              <span className="rounded-circle">
                                <img
                                  className="rounded-circle border border-5 border-primary-light"
                                  src=" assets/imgs/cta-2/avatar-1.png"
                                  alt="Solution Spire"
                                />
                              </span>
                              <h6 className="mt-1">
                                Kensei{" "}
                                <span className="text-500 fs-6">, CEO</span>
                              </h6>
                            </Link>
                            <div className="position-md-absolute bottom-0 start-50 mt-3 mt-md-0 translate-middle-md-x">
                              <img
                                src="/assets/imgs/cta-7/name-admin.svg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${
                          isTab == 2
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }`}
                        role="tabpanel"
                      >
                        <p className="text-900 mb-4">
                          Our mission is to empower businesses of all sizes with
                          innovative and reliable technology solutions. We
                          strive to simplify complex challenges by delivering
                          services that enhance operational efficiency, foster
                          growth, and create lasting value for our clients. At
                          SolutionSpire, we aim to be more than just a service
                          provider – we aspire to be a trusted partner in your
                          digital transformation journey.
                        </p>
                        <div className="row">
                          <div className="col-12 col-md-6">
                            <p className="text-900">
                              We believe in staying ahead of the curve,
                              continuously exploring emerging technologies and
                              industry trends to provide solutions that are not
                              only relevant but also future-proof. By combining
                              technical expertise with a customer-first
                              approach, we ensure that every project aligns with
                              your unique goals and exceeds expectations.
                            </p>
                            <p>
                              Our dedication to excellence, collaboration, and
                              integrity is at the heart of everything we do,
                              driving us to build meaningful relationships and
                              deliver results that make a difference.
                            </p>
                          </div>
                          <div className="col position-relative text-center">
                            <img src="/assets/imgs/cta-7/img-22.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${
                          isTab == 3
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }`}
                        role="tabpanel"
                      >
                        <p className="text-900 mb-4">
                          Our vision is to become a global leader in technology
                          innovation, empowering businesses to thrive in the
                          digital age through cutting-edge solutions. We aspire
                          to create a future where technology seamlessly
                          integrates into every facet of life, driving progress,
                          sustainability, and success{" "}
                        </p>
                        <div className="row">
                          <div className="col-12 col-md-6">
                            <p className="text-900">
                              At SolutionSpire, we envision a world where
                              businesses no longer see technology as a challenge
                              but as a powerful enabler of growth and success.
                              Through our expertise and commitment, we aim to
                              break down barriers, unlock opportunities, and
                              provide solutions that drive progress and
                              sustainability.
                            </p>
                            <ul className="list-unstyled phase-items mb-0">
                              <li className="d-flex align-items-center mt-3">
                                <img
                                  src="/assets/imgs/cta-2/check.svg"
                                  alt="Solution Spire"
                                />
                                <p className="ms-2 mb-0 text-900 fs-6">
                                  Empowering Growth
                                </p>
                              </li>
                              <li className="d-flex align-items-center mt-3">
                                <img
                                  src="/assets/imgs/cta-2/check.svg"
                                  alt="Solution Spire"
                                />
                                <p className="ms-2 mb-0 text-900 fs-6">
                                  Driving Innovation
                                </p>
                              </li>
                              <li className="d-flex align-items-center mt-3">
                                <img
                                  src="/assets/imgs/cta-2/check.svg"
                                  alt="Solution Spire"
                                />
                                <p className="ms-2 mb-0 text-900 fs-6">
                                  Fostering Sustainability
                                </p>
                              </li>
                              <li className="d-flex align-items-center mt-3">
                                <img
                                  src="/assets/imgs/cta-2/check.svg"
                                  alt="Solution Spire"
                                />
                                <p className="ms-2 mb-0 text-900 fs-6">
                                  Building Partnerships
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className="col position-relative text-center mt-3">
                            <img
                              className="rounded-3"
                              src="/assets/imgs/cta-7/img-23.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-top pt-6 mt-md-8 mt-6">
                      <Link
                        href="/contact-us"
                        className="fw-bold btn btn-gradient d-inline-flex align-items-center hover-up"
                      >
                        <span className="me-10">Get a Quote</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={14}
                          viewBox="0 0 24 14"
                          fill="none"
                        >
                          <path
                            className="fill-white"
                            d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-absolute top-0 end-0 z-1 flickering p-10 m-10 d-none d-lg-block">
                <img src="/assets/imgs/cta-7/star-1.svg" alt="Solution Spire" />
              </div>
            </div>
          </div>
        </section>
        {/*Static 2*/}
        <section className="section-static-1 position-relative fix z-0 py-8">
          <div className="container">
            <div className="inner">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-auto col-md-12 text-center text-lg-start mb-5 mb-lg-0">
                  <h4 className="mb-0">
                    See why we are <br /> trusted the world over
                  </h4>
                </div>
                <div className="col-lg-auto col-md-6">
                  <div className="counter-item-cover counter-item">
                    <div className="content text-center mx-auto">
                      <span className="h1 count fw-black text-primary my-0">
                        <span className="odometer" />
                        <CountUp enableScrollSpy={true} end={469} />
                        <span>k</span>
                      </span>
                      <p>New accounts</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-auto col-md-6">
                  <div className="counter-item-cover counter-item">
                    <div className="content text-center mx-auto">
                      <span className="h1 count fw-black text-primary my-0">
                        +<span className="odometer" />
                        <CountUp enableScrollSpy={true} end={92} />
                      </span>
                      <p>Finished projects</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-auto col-md-6">
                  <div className="counter-item-cover counter-item">
                    <div className="content text-center mx-auto">
                      <span className="h1 count fw-black text-primary my-0">
                        +<span className="odometer" />
                        <CountUp enableScrollSpy={true} end={756} />
                      </span>
                      <p>Skilled experts</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-auto col-md-6">
                  <div className="counter-item-cover counter-item">
                    <div className="content text-center mx-auto">
                      <span className="h1 count fw-black text-primary my-0">
                        +<span className="odometer" />
                        <CountUp enableScrollSpy={true} end={25} />
                        <span>k</span>
                      </span>
                      <p>Media posts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bouncing-blobs-container">
            <div className="bouncing-blobs-glass fix" />
            <div className="bouncing-blobs">
              <div className="bouncing-blob bouncing-blob--green" />
              <div className="bouncing-blob bouncing-blob--primary" />
              <div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
            </div>
          </div>
        </section>
        {/*cta 11 */}
        <section className="section-cta-11 position-relative section-padding fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="d-flex justify-content-md-between justify-content-center position-relative">
                  <div className="d-flex flex-column align-items-end d-none d-md-flex">
                    <div className="zoom-img rounded-3">
                      <img
                        className="rounded-3"
                        src="/assets/imgs/cta-11/img-1.png"
                        alt=""
                      />
                    </div>
                    <div className="zoom-img rounded-3 mt-2">
                      <img
                        className="rounded-3"
                        src="/assets/imgs/cta-11/img-3.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mt-5">
                      <div className="alltuchtopdown tag-year backdrop-filter bg-success rounded-4 px-5 py-4 text-center z-1">
                        <h5 className="count fw-bold mb-2 text-900 text-nowrap">
                          <span className="odometer" />
                          <CountUp enableScrollSpy={true} end={25} />
                          M+
                        </h5>
                        <p className="text-600-keep text-nowrap mb-0">
                          Transaction <br />
                          Completed
                        </p>
                      </div>
                      <div className="alltuchtopdown tag-year backdrop-filter bg-primary rounded-4 px-5 py-4 text-center z-1">
                        <h5 className="count fw-bold mb-2 text-white text-nowrap">
                          <span className="odometer" />
                          <CountUp enableScrollSpy={true} end={12} />
                          k+
                        </h5>
                        <p className="text-white text-nowrap mb-0">
                          Transaction <br />
                          Completed
                        </p>
                      </div>
                    </div>
                    <div className="zoom-img rounded-3">
                      <img
                        className="rounded-3 mw-lg-310"
                        src="/assets/imgs/cta-11/img-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="position-absolute bottom-0 start-0 flickering ms-6 mb-4 z-0 d-none d-md-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={86}
                      height={86}
                      viewBox="0 0 86 86"
                      fill="none"
                    >
                      <path
                        d="M0.235352 64.6171C23.6511 58.8609 27.3738 62.5843 21.6183 86C31.9666 62.5843 45.1375 62.5843 55.4859 86C49.7296 62.5843 53.4531 58.8615 76.8688 64.6171C53.4531 54.2688 53.4531 41.0978 76.8688 30.7495C53.4531 36.5057 49.7303 32.7823 55.4859 9.36658C45.1375 32.7823 31.9666 32.7823 21.6183 9.36658C27.3745 32.7823 23.6511 36.5051 0.235352 30.7495C23.6511 41.0978 23.6511 54.2688 0.235352 64.6171Z"
                        fill="#64E1B0"
                      />
                      <path
                        d="M85.7917 4.74567C80.5949 6.02293 79.7687 5.19679 81.046 0C78.7493 5.19679 75.8266 5.19679 73.5298 0C74.8071 5.19679 73.981 6.02293 68.7842 4.74567C73.981 7.0424 73.981 9.96508 68.7842 12.2618C73.981 10.9846 74.8071 11.8107 73.5298 17.0075C75.8266 11.8107 78.7493 11.8107 81.046 17.0075C79.7687 11.8107 80.5949 10.9846 85.7917 12.2618C80.5949 9.96508 80.5949 7.0424 85.7917 4.74567Z"
                        fill="#64E1B0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ps-lg-8 mt-lg-0 mt-5">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <img src="/assets/imgs/features-1/dots.png" alt="Solution Spire" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Our Mission
                  </span>
                </div>
                <h5 className="ds-5 my-3">
                  Empowering Your Digital Success Through Innovative Solutions
                </h5>
                <p className="fs-5 text-500 mb-8">
                  We believe in building strong relationships with our clients,
                  based on trust, transparency, and mutual success.
                </p>
                <div className="d-flex flex-column flex-md-row">
                  <div className="evaluate-1 me-2">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src="/assets/imgs/cta-11/avatar-1.png"
                        alt=""
                      />
                      <div className="d-flex flex-column ps-3">
                        <div className="d-flex">
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="Solution Spire"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="Solution Spire"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="Solution Spire"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="Solution Spire"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="Solution Spire"
                          />
                        </div>
                        <h6 className="mt-2 mb-0 fs-6">John Smith</h6>
                      </div>
                    </div>
                    <p className="text-500 mt-3">
                      Solution Spire's platform is intuitive and powerful. The custom
                      solutions provided have streamlined our workflow.
                    </p>
                  </div>
                  <div className="evaluate-2 ms-2 mt-md-0 mt-5">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src="/assets/imgs/cta-11/avatar-2.png"
                        alt=""
                      />
                      <div className="d-flex flex-column ps-3">
                        <div className="d-flex">
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="Solution Spire"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="Solution Spire"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="Solution Spire"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="Solution Spire"
                          />
                          <img
                            src="/assets/imgs/hero-4/star-yellow.svg"
                            alt="Solution Spire"
                          />
                        </div>
                        <h6 className="mt-2 mb-0 fs-6">Azumi Rose</h6>
                      </div>
                    </div>
                    <p className="text-500 mt-3">
                      Their innovative solutions and responsive support have
                      been game-changers for us. We couldn’t be happier!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*cta 12 */}
        <section className="section-cta-12 bg-3 position-relative section-padding fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <img src="/assets/imgs/features-1/dots.png" alt="Solution Spire" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Our History
                  </span>
                </div>
                <h5 className="ds-5 my-3">
                  A Journey of <br className="d-none d-md-inline" />
                  Innovation and Growth
                </h5>
                <p className="fs-5 text-500 mb-8">
                  Loved By Developers Trusted By Enterprises
                </p>
                <div className="d-flex align-items-center mt-5">
                  <Link href="#" className="btn btn-gradient">
                    Get Free Quote
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="stroke-white"
                        d="M17.25 15.25V6.75H8.75"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="stroke-white"
                        d="M17 7L6.75 17.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="ms-5 fw-bold">
                    How We Work
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-8">
                <p className="fs-5 text-900 mb-5">
                  <span className="fw-bold">Solution Spire</span> was founded with a
                  passion for technology and a desire to make a difference in
                  the digital world. From our humble beginnings, we have grown
                  into a reputable and sought-after web development agency,
                  serving a diverse range of clients across various industries.
                  Over the years,{" "}
                  <span className="fw-bold">
                    we have successfully delivered countless projects
                  </span>
                  , each one a testament to our dedication, expertise, and
                  innovative approach. Our journey has been marked by{" "}
                  <span className="fw-bold">
                    continuous growth, learning, and adaptation,
                  </span>{" "}
                  and we are proud of the milestones we have achieved along the
                  way.
                </p>
                <p className="fs-5 text-900 mb-5">
                  Thank you for considering{" "}
                  <span className="fw-bold">Solution Spire</span> as your web
                  development partner. We look forward to helping you achieve
                  your{" "}
                  <span className="fw-bold">
                    digital goals and creating a lasting impact
                  </span>{" "}
                  on your business.
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle border border-5 border-primary-light"
                    src="/assets/imgs/cta-12/avatar-1.png"
                    alt=""
                  />
                  <div className="ms-2">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/cta-12/name.svg"
                      alt=""
                    />
                    <h6 className="mt-1 mb-0">
                      Kensei <span className="text-500 fs-6">, CEO</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Testimonial 4*/}
        <section className="section-testimonial-4 section-padding position-relative overflow-hidden">
          <div className="container position-relative z-1">
            <div className="text-center">
              <div
                className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <img src="/assets/imgs/features-1/dots.png" alt="Solution Spire" />
                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                  Our Features
                </span>
              </div>
              <h5 className="ds-3 my-3">+500k Satisfied Customers</h5>
              <p className="fs-5">🔥 Don’t just take our words</p>
            </div>
            <div className="row mt-8 justify-content-center">
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-1.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-2.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-3.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-4.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-5.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-6.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-7.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-8.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-9.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-10.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-11.png"
                  alt=""
                />
              </div>
            </div>
            <div className="row justify-content-center d-none d-lg-flex">
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-12.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-13.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-14.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-15.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-16.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-17.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-18.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-19.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-20.png"
                  alt=""
                />
              </div>
              <div className="avatar-xxl rounded-circle">
                <img
                  className="assessor rounded-circle border border-5 border-primary-soft"
                  src="/assets/imgs/testimonial-4/avatar-21.png"
                  alt=""
                />
              </div>
            </div>
            <div className="row mt-6">
              <div className="col-lg-6 mx-auto text-center">
                <Swiper
                  {...swiperOptions}
                  className="swiper slider-two pt-2 pb-3"
                  modules={[Keyboard, Autoplay, Pagination, Navigation]}
                >
                  <div className="swiper-wrapper">
                    {/* prettier-ignore */}
                    <SwiperSlide className="swiper-slide">
											<div className="px-lg-6">
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">John Anderson</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-1.png" alt="Solution Spire" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
												<p className="text-900 mt-5">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
											</div>
										</SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="px-lg-6">
                        <div className="d-flex flex-column">
                          <h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
                          <div className="flag ms-3">
                            <img
                              src="/assets/imgs/testimonial-1/flag-2.png"
                              alt="Solution Spire"
                            />
                            <span className="fs-8">
                              CEO of Tech Innovators Inc
                            </span>
                          </div>
                        </div>
                        <p className="text-900 mt-5">
                          Our collaboration with the team has been instrumental
                          in optimizing our project management processes.{" "}
                          <span className="fw-bold">
                            The extensive selection of over 1200 UI blocks has
                            allowed us to customize our project interfaces to
                            meet specific client needs effectively.
                          </span>{" "}
                          The generous 10 GB of cloud storage has provided ample
                          space for storing project files securely, enabling
                          seamless collaboration across distributed teams.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="px-lg-6">
                        <div className="d-flex flex-column">
                          <h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
                          <div className="flag ms-3">
                            <img
                              src="/assets/imgs/testimonial-1/flag-3.png"
                              alt="Solution Spire"
                            />
                            <span className="fs-8">
                              CEO of Tech Innovators Inc
                            </span>
                          </div>
                        </div>
                        <p className="text-900 mt-5">
                          Our collaboration with the team has been instrumental
                          in optimizing our project management processes.{" "}
                          <span className="fw-bold">
                            The extensive selection of over 1200 UI blocks has
                            allowed us to customize our project interfaces to
                            meet specific client needs effectively.
                          </span>{" "}
                          The generous 10 GB of cloud storage has provided ample
                          space for storing project files securely, enabling
                          seamless collaboration across distributed teams.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="px-lg-6">
                        <div className="d-flex flex-column">
                          <h6 className="ms-3 fs-6 mb-0">Automated reports</h6>
                          <div className="flag ms-3">
                            <img
                              src="/assets/imgs/testimonial-1/flag-4.png"
                              alt="Solution Spire"
                            />
                            <span className="fs-8">
                              CEO of Tech Innovators Inc
                            </span>
                          </div>
                        </div>
                        <p className="text-900 mt-5">
                          Our collaboration with the team has been instrumental
                          in optimizing our project management processes.{" "}
                          <span className="fw-bold">
                            The extensive selection of over 1200 UI blocks has
                            allowed us to customize our project interfaces to
                            meet specific client needs effectively.
                          </span>{" "}
                          The generous 10 GB of cloud storage has provided ample
                          space for storing project files securely, enabling
                          seamless collaboration across distributed teams.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="px-lg-6">
                        <div className="d-flex flex-column">
                          <h6 className="ms-3 fs-6 mb-0">
                            Funnel optimization
                          </h6>
                          <div className="flag ms-3">
                            <img
                              src="/assets/imgs/testimonial-1/flag-1.png"
                              alt="Solution Spire"
                            />
                            <span className="fs-8">
                              CEO of Tech Innovators Inc
                            </span>
                          </div>
                        </div>
                        <p className="text-900 mt-5">
                          Our collaboration with the team has been instrumental
                          in optimizing our project management processes.{" "}
                          <span className="fw-bold">
                            The extensive selection of over 1200 UI blocks has
                            allowed us to customize our project interfaces to
                            meet specific client needs effectively.
                          </span>{" "}
                          The generous 10 GB of cloud storage has provided ample
                          space for storing project files securely, enabling
                          seamless collaboration across distributed teams.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="px-lg-6">
                        <div className="d-flex flex-column">
                          <h6 className="ms-3 fs-6 mb-0">Integrations</h6>
                          <div className="flag ms-3">
                            <img
                              src="/assets/imgs/testimonial-1/flag-2.png"
                              alt="Solution Spire"
                            />
                            <span className="fs-8">
                              CEO of Tech Innovators Inc
                            </span>
                          </div>
                        </div>
                        <p className="text-900 mt-5">
                          Our collaboration with the team has been instrumental
                          in optimizing our project management processes.{" "}
                          <span className="fw-bold">
                            The extensive selection of over 1200 UI blocks has
                            allowed us to customize our project interfaces to
                            meet specific client needs effectively.
                          </span>{" "}
                          The generous 10 GB of cloud storage has provided ample
                          space for storing project files securely, enabling
                          seamless collaboration across distributed teams.
                        </p>
                      </div>
                    </SwiperSlide>
                  </div>
                  <div className="swiper-pagination" />
                </Swiper>
              </div>
            </div>
          </div>
          <div className="position-absolute top-0 start-50 translate-middle-x z-0">
            <img src="/assets/imgs/team-1/bg-line.png" alt="Solution Spire" />
          </div>
          <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
          <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
        </section>
        {/* Contact 2*/}
        <section className="section-contact-2 position-relative section-padding bg-5">
          <div className="container position-relative z-1">
            <div className="text-center">
              <h5 className="ds-5 mt-3 mb-3">
                Thinking about a project? <br className="d-md-block d-none" />
                Get in touch with us.
              </h5>
              <span className="fs-5 fw-medium">
                Connect with Us Today through the Details Below or Fill{" "}
                <br className="d-md-block d-none" />
                Out the Form for a Prompt Response
              </span>
            </div>
            <div className="row mt-8">
              <div className="col-lg-10 mx-lg-auto">
                <div className="row">
                  <div className="col-lg-6 ps-lg-0 pb-5 pb-lg-0">
                    <h4>Leave a message</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row mt-5">
                        <div className="col-md-6">
                          <div className="input-group rounded-1 d-flex align-items-center">
                            <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  className="stroke-dark"
                                  d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  className="stroke-dark"
                                  d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <input
                              {...register("name", {
                                required: "Name is required",
                              })}
                              type="text"
                              className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                              placeholder="Your name *"
                            />
                            {errors.name && (
                              <span className="text-danger mt-1">
                                {errors.name.message}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group rounded-1 d-flex align-items-center mt-4 mt-md-0">
                            <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  className="stroke-dark"
                                  d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <input
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Invalid email address",
                                },
                              })}
                              type="email"
                              className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                              placeholder="info@"
                            />
                            {errors.email && (
                              <span className="text-danger mt-1">
                                {errors.email.message}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group rounded-1 d-flex align-items-center mt-4">
                            <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  className="stroke-dark"
                                  d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  className="stroke-dark"
                                  d="M5.5 6.5L12 12.25L18.5 6.5"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <input
                              {...register("phone", {
                                required: "Phone is required",
                              })}
                              type="text"
                              className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                              placeholder="Your name *"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group rounded-1 d-flex align-items-center mt-4">
                            <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  className="stroke-dark"
                                  d="M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.75001L12 4.75L4.75 9.75001V17.25C4.75 18.3546 5.64544 19.25 6.75 19.25Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  className="stroke-dark"
                                  d="M9.75 15.749C9.75 14.6444 10.6455 13.749 11.75 13.749H12.25C13.3546 13.749 14.25 14.6444 14.25 15.749V19.249H9.75V15.749Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <input
                              {...register("subject", {
                                required: "Phone is required",
                              })}
                              type="text"
                              className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                              placeholder="Your name *"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group rounded-1 d-flex mt-4">
                            <div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  className="stroke-dark"
                                  d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  className="stroke-dark"
                                  d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.3285 2.74984 17.3286 2.74984 17.3286 2.74981C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344ZM9.69678 9.05607L8.31606 9.33225L8.59224 7.95153L14.3461 2.19754L15.4507 3.30214L9.69678 9.05607ZM16.6658 2.0871L16.1135 2.6394L15.0089 1.53479L15.5612 0.982524C15.6221 0.921601 15.7212 0.92157 15.7821 0.982493L16.6658 1.86618C16.7267 1.92707 16.7267 2.0262 16.6658 2.0871Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                            <textarea
                              {...register("message", {
                                required: "Message is required",
                              })}
                              className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10"
                              placeholder="Describe Your Project in Short"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary hover-up mt-4"
                          >
                            Send Message
                            <svg
                              className="ms-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                className="stroke-white"
                                d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z"
                                fill="black"
                                stroke="white"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <div className="ps-lg-6">
                      <h6>Chat with us</h6>
                      <p className="text-500">
                        The support team is always available 24/7
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
                      <div className="d-flex mb-2">
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
                      </div>
                      <div className="d-flex mb-2 mb-5">
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
                      </div>
                      <h6>Send us an email</h6>
                      <p className="text-500">
                        Our team will respond promptly to your inquiries
                      </p>
                      <div className="d-flex mb-2">
                        <img
                          src="/assets/imgs/contact-2/icon-4.svg"
                          alt="Solution Spire"
                        />
                        <Link
                          className="ms-2 text-decoration-underline text-900 fs-7"
                          href="mailto:connect@solutionspire.com"
                        >
                          connect@solutionspire.com
                        </Link>
                      </div>
                      <div className="d-flex mb-2 mb-5">
                        <img
                          src="/assets/imgs/contact-2/icon-4.svg"
                          alt="Solution Spire"
                        />
                        <Link
                          className="ms-2 text-decoration-underline text-900 fs-7"
                          href="#"
                        >
                          sale@Solution Spire.com
                        </Link>
                      </div>
                      <h6>For more inquiry</h6>
                      <p className="text-500">
                        Reach out for immediate assistance
                      </p>
                      <div className="d-flex mb-2">
                        <img
                          src="/assets/imgs/contact-2/icon-5.svg"
                          alt="Solution Spire"
                        />
                        <Link
                          className="ms-2 text-decoration-underline text-900 fs-7"
                          href="tel:917869249982"
                        >
                          +91 78692 49982
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
