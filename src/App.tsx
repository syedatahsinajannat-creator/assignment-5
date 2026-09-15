import { useState } from "react";
import banner from "../assets/banner-stack.png";
import Technologies from "./technologies";
import Footer from "./footer";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
                    <button
                        className="text-2xl text-slate-900 md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        aria-controls="navigation-links"
                        onClick={() => setIsOpen(!isOpen)}>
                        ☰
                    </button>

                    <a href="#home" className="flex shrink-0 items-center gap-2">
                        <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white">
                            DS
                        </span>
                        <span className="brand-text text-lg font-bold">
                            Dev Stack
                        </span>
                    </a>

                    <div
                        id="navigation-links"
                        className={`${isOpen ? "flex" : "hidden"
                            } absolute top-full left-0 w-full flex-col gap-6 border-b border-slate-100 bg-white p-6 text-sm text-slate-600 md:static md:flex md:w-auto md:flex-row md:border-0 md:p-0`}
                        onClick={() => setIsOpen(false)} >
                        <a href="#home" className="text-pink-600">Home</a>
                        <a href="#technologies">Technologies</a>
                        <a href="#projects">Projects</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="flex shrink-0 items-center gap-3 text-xs sm:gap-5 sm:text-sm">
                        <button className="text-slate-700">Sign In</button>
                        <button className="brand-gradient rounded-full px-3 py-2 text-white sm:px-5">
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>

            <main>
                <section
                    id="home"
                    className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 px-6 py-16 md:flex-row md:py-28"
                >
                    <div className="w-full text-left md:w-3/5">
                        <h1 className="text-4xl leading-tight font-bold tracking-tight text-slate-900 lg:text-5xl">
                            Build Your Ideal
                            <span className="brand-text block">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-500">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that
                            fits your next project.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <a
                                href="#technologies"
                                className="brand-gradient rounded-md px-5 py-3 text-sm font-semibold text-white"
                            >
                                Explore Technologies
                            </a>

                            <a
                                href="#about"
                                className="rounded-md border border-slate-200 px-8 py-3 text-sm text-slate-600"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="flex w-full justify-center md:w-2/5">
                        <img
                            src={banner}
                            alt="Illustration of a development stack"
                            className="h-auto w-72 max-w-full lg:w-80"
                        />
                    </div>
                </section>
                <Technologies />
            </main>
            <Footer />
        </>
    );
}

export default App;