
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PageTeam4() {

	return (
		<>

			<Layout >

				{/* head-1 */}
				<section className="bg-linear-3 head-1 pt-110">
					<div className="container">
						<div className="d-flex flex-lg-row flex-column align-items-center">
							<div className="mb-lg-0 mb-8">
								<h3 className="ds-3 fw-regular">
									Stay <span className="fw-bold">updated</span> with <br />
									the <span className="fw-bold">latest news</span> <br />
									from <span className="fw-bold">our team.</span>
								</h3>
								<div className="d-flex mt-3 justify-content-start align-items-center">
									<div className="avt-hero">
										<img className=" icon-shape icon-xxl border border-5 border-white-keep bg-primary-soft rounded-circle" src="/assets/imgs/hero-3/avatar-1.png" alt="infinia" />
									</div>
									<div className="avt-hero">
										<img className=" icon-shape icon-xxl border border-5 border-white-keep bg-primary-soft rounded-circle" src="/assets/imgs/hero-3/avatar-2.png" alt="infinia" />
									</div>
									<div className="avt-hero icon-shape icon-xxl border border-5 border-white-keep bg-primary-soft rounded-circle">
										<img src=" assets/imgs/hero-3/icon.svg" alt="infinia" />
									</div>
									<h6 className="text-500"> Don't miss the trending</h6>
								</div>
							</div>
							<div className="ms-auto rounded-2 border border-5 border-white">
								<img className="rounded-2" src="/assets/imgs/other/img-2.png" alt="infinia" />
							</div>
						</div>
					</div>
				</section>
				{/* prettier-ignore */}
				{/*Team 4*/}
				<section className="section-team-4 section-padding position-relative overflow-hidden">
					<div className="container">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
							</div>
							<h3 className="ds-3 my-3">Meet Our Team</h3>
							<p className="fs-5">
								Meet the talented and passionate team members who drive our
								<br />
								company forward every day.
							</p>
						</div>
						<div className="row mt-8 mb-lg-8 m-0">
							{/* prettier-ignore */}
							<div className="col-lg-4 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-4/avatar-1.png" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-6 shadow-1">
											<h6>Esther Howard</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">Co-Founder</span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
													<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#6d4df2" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-4/avatar-2.png" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-6 shadow-1">
											<h6>Ashley Hardy</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">Chief Finance Officer</span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
													<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#6d4df2" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-4/avatar-3.png" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-6 shadow-1">
											<h6>Clark Roberts</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">VP Sales and Marketing </span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
													<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#6d4df2" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-lg-10 mb-4">
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-4/avatar-4.png" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-4 shadow-1">
											<h6>Dennis Norris</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">Chief Marketing Officer</span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
													<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#6d4df2" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-4/avatar-5.png" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-4 shadow-1">
											<h6>Gina Kennedy</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">Administrator </span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
													<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#6d4df2" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-4/avatar-6.png" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-4 shadow-1">
											<h6>Fernando Torres</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">Tax Consultant</span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
													<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#6d4df2" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-4/avatar-7.png" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-4 shadow-1">
											<h6>Esther Howard</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">Amelia Earhart</span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
													<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#6d4df2" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="text-center pb-120">
					<p className="fs-4 text-900 fw-medium">
						We are actively seeking <span className="fw-bold">talented professionals <br className="d-none d-lg-block" /></span> to join our growing team.
					</p>
					<Link href="#" className="btn btn-gradient mt-2 d-inline-flex">
						Become Our Member
						<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
							<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</Link>
				</div>

			</Layout>
		</>
	)
}