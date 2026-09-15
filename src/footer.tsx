export default function Footer() {
    return (
        <footer className="border-t border-slate-200 px-6 py-10 text-sm text-slate-600">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-8 md:grid-cols-4">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900">
                            Dev Stack
                        </h2>
                        <p className="mt-3">
                            All the tools and tech you need for building modern software.
                        </p>
                        <div className="mt-4 flex gap-4">
                            <a href="https://github.com">GitHub</a>
                            <a href="https://twitter.com">Twitter</a>
                            <a href="https://linkedin.com">LinkedIn</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold">Product</h3>
                        <div className="mt-3 flex flex-col gap-2">
                            <a href="#home">Home</a>
                            <a href="#technologies">Technologies</a>
                            <a href="#projects">Projects</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold">Company</h3>
                        <div className="mt-3 flex flex-col gap-2">
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                            <a href="#careers">Careers</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold">Legal</h3>
                        <div className="mt-3 flex flex-col gap-2">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Service</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-slate-100 pt-6">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#privacy">Privacy</a>
                        <a href="#terms">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}