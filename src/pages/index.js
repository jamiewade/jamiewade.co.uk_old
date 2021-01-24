import React from "react"
import { Helmet } from "react-helmet"
import Content from "../components/content"
import Footer from "../components/footer"
import memoji from "../images/memoji.png"

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Welcome | Jamie Wade</title>
                <meta name="description" content="Jamie Wade is a Front-end Developer based in the UK. Jamie has years of experience working with Craft CMS, as well as experience with using tools such as Gatsby, Tailwind, Shopify, Vue, and Laravel." />
            </Helmet>

            <div class={"flex flex-col bg-white text-gray-600 w-full h-full"}>
                <Content>
                    <div className={"text-center sm:mx-auto sm:max-w-2xl"}>
                        <img src={memoji}
                             alt={"Jamie Wade"}
                             className={"block mx-auto mb-6 w-36"}
                             loading={"lazy"}/>

                        <h1 className={"mb-3 font-bold text-gray-800 text-3xl sm:mb-4 sm:text-4xl md:text-5xl"}>Nice to meet you <span role={"img"} aria-label={"Waving hand emoji"}>👋</span></h1>

                        <p className={"mb-2 sm:mb-3 sm:text-lg md:text-xl"}>I'm Jamie Wade. I'm a Front-end Developer based in the UK, working with Craft CMS, Tailwind, and Gatsby.</p>

                        <p className={"mb-8 text-gray-400 sm:mb-10 md:mb-10 md:text-lg"}>I also have experience with Shopify, Vue, and Laravel.</p>

                        <p>
                            <a href="mailto:jamie.wade.contact@icloud.com" className={"rounded bg-indigo-600 p-2.5 text-white sm:p-3 sm:text-lg md:p-3.5 md:text-xl duration-300 hover:bg-indigo-700"}>Get in touch</a>
                        </p>
                    </div>
                </Content>

                <Footer />
            </div>
        </>
    );
}
