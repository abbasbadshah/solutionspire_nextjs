"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function SectionTestimonial() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={3}>
        <section className="section-page-header py-10 fix position-relative">
          <div className="container position-relative z-1">
            <div className="text-start">
              <h3>Testimonials</h3>
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
                <p className="text-primary mb-0">Testimonials</p>
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
        <section className="section-testimonial-2 position-relative bg-white section-padding">
          <div className="container position-relative z-1">
            <div className="row pb-9">
              <div className="col-lg-7 mx-lg-auto">
                <div className="text-center mb-lg-0 mb-5">
                  <h4 className="ds-4 my-3">
                    +100k users <span className="fw-regular">have loved </span>
                    <br />
                    Solution Spire Conference{" "}
                    <span className="fw-regular">System</span>
                  </h4>
                  <p className="fs-5 mb-0">
                    Provide your team with top-tier group mentoring{" "}
                    <br className="d-none d-lg-block" />
                    programs and exceptional professional benefits.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div
                  className="bg-neutral-100 p-5 rounded-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={0}
                >
                  <p className="text-900">
                  Working with Solution Spire has been an absolute game-changer for us! Their team created a seamless, visually stunning e-commerce platform that perfectly represents our brand. The process was smooth, and they delivered on every promise. Highly recommend their services!
                  </p>
                  <div className="d-flex align-items-center mt-5">
                    {/* <img
                      className="avatar-lg"
                      src="/assets/imgs/testimonial-1/avatar-1.png"
                      alt="Solution Spire"
                    /> */}
                    <div className="d-flex flex-column">
                      <h6 className="ms-3 fs-6 mb-0">Aliasger</h6>
                      <div className="flag ms-3">
                        <img
                          src="/assets/imgs/testimonial-1/uaeflag1611.png"
                          alt="Solution Spire"
                        />
                        <span className="fs-8">{" "}Manager, Ferrarrucci Cosmetics</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-neutral-100 p-5 mt-5 rounded-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  <p className="text-900">
                  SolutionSpire turned my small business vision into a reality with a user-friendly and professional website. The team was incredibly responsive, and the delivery was faster than expected. My customers love it!
                  </p>
                  <div className="d-flex align-items-center mt-5">
                    {/* <img
                      className="avatar-lg"
                      src="/assets/imgs/testimonial-1/avatar-4.png"
                      alt="Solution Spire"
                    /> */}
                    <div className="d-flex flex-column">
                      <h6 className="ms-3 fs-6 mb-0">Rohit Sharma,</h6>
                      <div className="flag ms-3">
                        <img
                          src="/assets/imgs/testimonial-1/flag-4.png"
                          alt="Solution Spire"
                        />
                        <span className="fs-8"> Entrepreneur, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  <p className="text-900">
                  The e-commerce site developed by SolutionSpire has been a huge success for our brand. Their attention to detail and dedication to quality is truly commendable. We’re already seeing increased engagement!
                  </p>
                  <div className="d-flex align-items-center mt-5">
                    {/* <img
                      className="avatar-lg"
                      src="/assets/imgs/testimonial-1/avatar-3.png"
                      alt="Solution Spire"
                    /> */}
                    <div className="d-flex flex-column">
                      <h6 className="ms-3 fs-6 mb-0">Emily Williams</h6>
                      <div className="flag ms-3">
                        <img
                          src="/assets/imgs/testimonial-1/flag-3.png"
                          alt="Solution Spire"
                        />
                        <span className="fs-8">Marketing Manager, USA</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-neutral-100 p-5 mt-5 rounded-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={0}
                >
                  <p className="text-900">
                  From start to finish, the SolutionSpire team was fantastic to work with. They understood our requirements perfectly and created a platform that is both functional and visually appealing. Highly professional!
                  </p>
                  <div className="d-flex align-items-center mt-5">
                    {/* <img
                      className="avatar-lg"
                      src="/assets/imgs/testimonial-1/avatar-3.png"
                      alt="Solution Spire"
                    /> */}
                    <div className="d-flex flex-column">
                      <h6 className="ms-3 fs-6 mb-0">Arjun Patel</h6>
                      <div className="flag ms-3">
                        <img
                          src="/assets/imgs/testimonial-1/flag-3.png"
                          alt="Solution Spire"
                        />
                        <span className="fs-8">Business Owner, Australia</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  <p className="text-900">
                  SolutionSpire has completely transformed our digital presence. Their team’s expertise and creativity are unmatched, and they delivered an exceptional website that exceeded our expectations. Thank you for such a seamless experience!
                  </p>
                  <div className="d-flex align-items-center mt-5">
                    {/* <img
                      className="avatar-lg"
                      src="/assets/imgs/testimonial-1/avatar-2.png"
                      alt="Solution Spire"
                    /> */}
                    <div className="d-flex flex-column">
                      <h6 className="ms-3 fs-6 mb-0">Sophia Martinez</h6>
                      <div className="flag ms-3">
                        <img
                          src="/assets/imgs/testimonial-1/flag-2.png"
                          alt="Solution Spire"
                        />
                        <span className="fs-8">Founder, LuxeBeauty, USA</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-neutral-100 p-5 mt-5 rounded-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  <p className="text-900">
                  I’m amazed by the quality and speed of work SolutionSpire provided. Our new website is not only sleek and modern but also incredibly user-friendly. The team was supportive at every step. Highly recommend their services!
                  </p>
                  <div className="d-flex align-items-center mt-5">
                    {/* <img
                      className="avatar-lg"
                      src="/assets/imgs/testimonial-1/avatar-1.png"
                      alt="Solution Spire"
                    /> */}
                    <div className="d-flex flex-column">
                      <h6 className="ms-3 fs-6 mb-0">Kabir Mehta</h6>
                      <div className="flag ms-3">
                        <img
                          src="/assets/imgs/testimonial-1/flag-1.png"
                          alt="Solution Spire"
                        />
                        <span className="fs-8">Owner, Mehta & Co., India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 position-relative z-3">
            <Link href="#" className="btn btn-dark hover-up">
              View More Testimonials
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
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="stroke-white"
                  d="M17 7L6.75 17.25"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="mask-image-2 position-absolute top-50 bottom-0 start-0 end-0 z-1" />
        </section>
      </Layout>
    </>
  );
}
