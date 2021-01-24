import React from "react"
import gitHub from '../images/github.svg'

const today = new Date();

export default function Footer() {
    return (
        <footer className={"text-gray-400 text-sm"}>
            <div className={"flex flex-col py-6 text-center container sm:py-8"}>
                <div>
                    <p>Built with &hearts; using Gatsby & Tailwind</p>
                </div>

                <div className={"flex flex-col mt-4 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between sm:mt-6 sm:pt-6"}>
                    <div>
                        <p>&copy; {today.getFullYear()} Jamie Wade. All rights reserved</p>
                    </div>

                    <div className={"mt-3 sm:mt-0"}>
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
