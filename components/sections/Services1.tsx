
import { ComputerDesktopIcon } from "@heroicons/react/16/solid"
import Link from "next/link"

export default function Services1() {
	return (
		<>
			<section className="section-padding">
				<div className="container">
					<div className="text-center">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="Solution Spire" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
						</div>
						<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={300}>Explore Our Services</h3>
						<p data-aos="fade-zoom-in" data-aos-delay={100}>By doing a financial analysis of these statements, you can see <br /> whether you have enough working capital.</p>
					</div>
					<div className="row mt-6 position-relative">
						<div className="col-lg-4">
							<div className="p-2 mt-lg-8 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="card-service bg-white p-6 border rounded-4">
									<img src="/assets/imgs/service-1/webdevelopment.png" alt="webdevelopment" />
									<h6 className="my-3">Web Development</h6>
									<p className="mb-6"> Crafting dynamic, responsive, and user-friendly websites tailored to your business needs.</p>
									{/* <Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
										<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<g clipPath="url(#clip0_226_5470)">
												<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={16} height={16} fill="white" />
												</clipPath>
											</defs>
										</svg>
										<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
											<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
										</svg>
										<span className="fw-bold fs-7 text-900">Learm More</span>
									</Link> */}
								</div>
							</div>
							<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="card-service bg-white p-6 border rounded-3">
									<img src="/assets/imgs/service-1/uiux.png" alt="uiux" />
									<h6 className="my-3">UI/UX Designing</h6>
									<p className="mb-6">Designing intuitive interfaces that enhance user experiences and drive engagement.</p>
									{/* <Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
										<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<g clipPath="url(#clip0_226_5470)">
												<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={16} height={16} fill="white" />
												</clipPath>
											</defs>
										</svg>
										<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
											<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
										</svg>
										<span className="fw-bold fs-7 text-900">Learm More</span>
									</Link> */}
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="card-service bg-white p-6 border rounded-3">
									<img src="/assets/imgs/service-1/softwaredevelopment.png" alt="softwaredevelopment" />
									<h6 className="my-3">Software Development</h6>
									<p className="mb-6">Building custom software solutions to streamline operations and boost productivity.</p>
									{/* <Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
										<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<g clipPath="url(#clip0_226_5470)">
												<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={16} height={16} fill="white" />
												</clipPath>
											</defs>
										</svg>
										<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
											<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
										</svg>
										<span className="fw-bold fs-7 text-900">Learm More</span>
									</Link> */}
								</div>
							</div>
							<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="card-service bg-white p-6 border rounded-3">
									<img src="/assets/imgs/service-1/graphic.png" alt="graphic designing" />
									<h6 className="my-3">Graphic Designing</h6>
									<p className="mb-6">Creating compelling visuals and designs that leave a lasting impression.</p>
									{/* <Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
										<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<g clipPath="url(#clip0_226_5470)">
												<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={16} height={16} fill="white" />
												</clipPath>
											</defs>
										</svg>
										<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
											<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
										</svg>
										<span className="fw-bold fs-7 text-900">Learm More</span>
									</Link> */}
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="p-2 mt-lg-8 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up hover-up" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="card-service bg-white p-6 border rounded-3">
									<img src="/assets/imgs/service-1/mobileappdevelopment.png" alt="mobileappdevelopment" />
									<h6 className="my-3">Mobile Application Development</h6>
									<p className="mb-6">Developing seamless, feature-rich mobile apps for iOS and Android platforms.</p>
									{/* <Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
										<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<g clipPath="url(#clip0_226_5470)">
												<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={16} height={16} fill="white" />
												</clipPath>
											</defs>
										</svg>
										<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
											<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
										</svg>
										<span className="fw-bold fs-7 text-900">Learm More</span>
									</Link> */}
								</div>
							</div>
							<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="card-service bg-white p-6 border rounded-3">
									<img src="/assets/imgs/service-1/seo.png" alt="digital marketing and seo" />
									<h6 className="my-3">SEO and Digital Marketing</h6>
									<p className="mb-6">Elevating your online presence with data-driven SEO strategies and impactful digital campaigns.</p>
									{/* <Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
										<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<g clipPath="url(#clip0_226_5470)">
												<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={16} height={16} fill="white" />
												</clipPath>
											</defs>
										</svg>
										<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
											<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
										</svg>
										<span className="fw-bold fs-7 text-900">Learm More</span>
									</Link> */}
								</div>
							</div>
						</div>
						<div className="position-absolute top-50 start-50 translate-middle z-0">
							<img src="/assets/imgs/service-1/img-bg.png" alt="Solution Spire" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
