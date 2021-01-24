import React from "react"
import Content from "../components/content"
import Footer from "../components/footer"
import Header from "../components/header"

export default function Home() {
    return (
        <>
            <div class={"flex flex-col bg-white w-full h-full"}>
                <Header />

                <Content>
                    <h1>I’m in a layout!</h1>
                </Content>

                <Footer />
            </div>
        </>
    );
}
