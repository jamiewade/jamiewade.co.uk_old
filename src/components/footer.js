import React from "react"
import gitHub from '../images/github.svg'

const today = new Date();

export default function Footer() {
    return (
        <footer className={"text-gray-400 text-center text-sm"}>
            <div className={"container"}>
                <div className={"grid gap-3 border-t border-gray-100 py-6 md:flex md:justify-between"}>
                    <div className={"md:order-2"}>
                        <p>Built with &hearts; using Gatsby & Tailwind</p>
                    </div>

                    <div className={"md:order-1"}>
                        <p>&copy; {today.getFullYear()} Jamie Wade. All rights reserved</p>
                    </div>

                    <div className={"md:order-3"}>
                        <img src={gitHub}
                             alt={"Follow me on GitHub"}
                             className={"block mx-auto w-6"}
                             title={"Follow me on GitHub"}
                             loading={"lazy"}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}
