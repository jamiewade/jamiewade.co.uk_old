import React from "react"

export default function Content({ children }) {
    return (
        <div className={"my-auto pt-6 container"}>
            {children}
        </div>
    )
}
