import React from "react"
import { Helmet } from "react-helmet"
import AOS from "aos";
import "aos/dist/aos.css";

import Content from "../components/content"
import Footer from "../components/footer"
import memoji from "../images/memoji.png"

class IndexPage extends React.Component {
	componentDidMount() {
		AOS.init()
	}

	render() {
		return (
			<>
				<Helmet>
					<title>Welcome | Jamie Wade - Front-end Developer</title>
					<meta
						name={"description"}
						content={"Jamie Wade is a Front-end Developer based in the UK. Jamie has years of experience working with Craft CMS, as well as experience with using tools such as Tailwind, PostCSS, JavaScript, Alpine.js, React, Gatsby, Next.js, Shopify, Laravel, and Python."} />
				</Helmet>

				<div className={"flex flex-col bg-white text-gray-600 w-full h-full"}>
					<Content>
						<div className={"text-center sm:mx-auto sm:max-w-2xl"}>
							<img
								src={memoji}
								alt={"Jamie Wade"}
								className={"block mx-auto mb-6 w-36"}
								data-aos={"fade-zoom-in"}
								data-aos-easing={"ease-in-back"}
								data-aos-delay={"2500"}
								data-aos-duration={"750"}
								data-aos-offset={"0"}
								loading={"lazy"} />

							<h1
								className={"mb-3 font-bold text-gray-800 text-3xl sm:mb-4 sm:text-4xl md:text-5xl"}
								data-aos={"fade-zoom-in"}
								data-aos-easing={"ease-in-back"}
								data-aos-delay={"250"}
								data-aos-duration={"750"}
								data-aos-offset={"0"}>
								<span>Nice to meet you </span>

								<span
									role={"img"}
									aria-label={"Waving hand emoji"}>👋</span>
							</h1>

							<p
								className={"mb-2 sm:mb-3 sm:text-lg md:text-xl"}
								data-aos={"fade-zoom-in"}
								data-aos-easing={"ease-in-back"}
								data-aos-delay={"1000"}
								data-aos-duration={"750"}
								data-aos-offset={"0"}>I'm Jamie Wade. I'm a Front-end Developer based in the UK, working with Craft CMS, Tailwind, PostCSS, JavaScript, and Alpine.js.</p>

							<p
								className={"mb-8 text-gray-400 sm:mb-10 md:mb-10 md:text-lg"}
								data-aos={"fade-zoom-in"}
								data-aos-easing={"ease-in-back"}
								data-aos-delay={"1500"}
								data-aos-duration={"750"}
								data-aos-offset={"0"}>I also have experience with React, specifically Gatsby and Next.js, as well as experience with Shopify, Laravel, and Python.</p>

							<p
								data-aos={"fade-zoom-in"}
								data-aos-easing={"ease-in-back"}
								data-aos-delay={"2000"}
								data-aos-duration={"750"}
								data-aos-offset={"0"}>
								<a
									href={"mailto:jamie.wade.contact@icloud.com"}
									className={"rounded bg-indigo-600 p-2.5 text-white sm:p-3 sm:text-lg md:p-3.5 md:text-xl duration-300 hover:bg-indigo-700"}>Get in touch</a>
							</p>
						</div>
					</Content>

					<Footer />
				</div>
			</>
		)
	}
}

export default IndexPage;
