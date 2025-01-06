"use client";
import Link from "next/link";
import CountUp from "react-countup";

export default function Features8() {
  return (
    <>
      <section>
        <div className="container-fluid position-relative bg-primary-light section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-8 pe-5 pe-lg-10 position-relative z-1">
                <img
                  src="/assets/imgs/features-8/icon-star.svg"
                  alt="Solution Spire"
                />
                <h2 className="text-white mt-3 mb-4 fw-black">Core values</h2>
                <p className="text-white">
                  We break down barriers so teams can focus on what matters –
                  working together to create products their customers love.
                </p>
                <div className="col d-flex align-items-center mt-5 min-w-">
                  <span className="h2 count fw-black text-white min-w-70">
                    <span className="odometer" />
                    <CountUp end={98} enableScrollSpy={true} />
                  </span>
                  <span className="fw-medium text-white fs-4 align-self-start">
                    %
                  </span>
                  <p className="ms-3 text-white">
                    Genuine repeated <br />
                    happy customers.
                  </p>
                </div>
                <div className="col d-flex align-items-center mt-5">
                  <span className="h2 count fw-black text-white min-w-70">
                    <span className="odometer" />
                    <CountUp end={98} enableScrollSpy={true} />
                  </span>
                  <span className="fs-4 fw-medium text-white align-self-start">
                    %
                  </span>
                  <p className="ms-3 text-white">
                    Genuine repeated <br />
                    happy customers.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-8 pe-lg-8">
                <ul className="list-unstyled ">
                  <li>
                    <Link href="#" className="d-flex align-items-start mb-6">
                      <img
                        className="mt-2"
                        src="/assets/imgs/features-2/tick.svg"
                        alt="Solution Spire"
                      />
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">Innovation</h5>
                        <p className="text-white mb-0">
                          We embrace creativity and cutting-edge technology to
                          deliver groundbreaking solutions.
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="d-flex align-items-start mb-6">
                      <img
                        className="mt-2"
                        src="/assets/imgs/features-2/tick.svg"
                        alt="Solution Spire"
                      />
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">Integrity</h5>
                        <p className="text-white mb-0">
                          Honesty and transparency are the cornerstones of our
                          relationships with clients and partners.
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="d-flex align-items-start mb-6">
                      <img
                        className="mt-2"
                        src="/assets/imgs/features-2/tick.svg"
                        alt="Solution Spire"
                      />
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">Excellence</h5>
                        <p className="text-white mb-0">
                          We strive for perfection in every project, ensuring
                          exceptional quality and satisfaction.
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 mb-lg-0 mb-8 pe-lg-8">
                <ul className="list-unstyled ">
                  <li>
                    <Link href="#" className="d-flex align-items-start mb-6">
                      <img
                        className="mt-2"
                        src="/assets/imgs/features-2/tick.svg"
                        alt="Solution Spire"
                      />
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">Collaboration</h5>
                        <p className="text-white mb-0">
                          Teamwork and open communication drive our success and
                          strengthen our partnerships.
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="d-flex align-items-start mb-6">
                      <img
                        className="mt-2"
                        src="/assets/imgs/features-2/tick.svg"
                        alt="Solution Spire"
                      />
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">Customer-Centricity</h5>
                        <p className="text-white mb-0">
                          Your goals are our priority, and we tailor our
                          services to exceed your expectations.
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="d-flex align-items-start mb-6">
                      <img
                        className="mt-2"
                        src="/assets/imgs/features-2/tick.svg"
                        alt="Solution Spire"
                      />
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">Sustainability</h5>
                        <p className="text-white mb-0">
                          We focus on solutions that are not only effective but
                          also environmentally and socially responsible.
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="position-absolute bottom-0 start-0 bg-rotate z-0">
            <img
              className="rotate-center"
              src="/assets/imgs/features-8/bg-img-favicon.png"
              alt="Solution Spire"
            />
          </div>
          <div className="position-absolute top-0 end-0 z-1 p-8">
            <div className="bloom" />
          </div>
        </div>
      </section>
    </>
  );
}
