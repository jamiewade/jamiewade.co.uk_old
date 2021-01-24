import React from "react"
import logo from "../images/logo.svg";

export default function Header() {
    return (
        <header>
            <div className={"py-6 container"}>
                <div className={"flex flex-row items-center justify-between text-center"}>
                    <div>
                        <img src={logo}
                             alt={"Jamie Wade"}
                             className={"block mx-auto w-20 sm:w-24 md:w-28"}
                             loading={"lazy"}/>
                    </div>

                    <div>
                        <a href="mailto:jamie.wade.contact@icloud.com" className={"rounded bg-purple-600 p-2.5 text-white"}>Get in touch</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
