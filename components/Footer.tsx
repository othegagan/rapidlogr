const Footer = () => {
    return (
        <footer className="py-6  md:py-0 my-10">
            <div className="container flex flex-col items-center justify-between gap-4  ">
                <p className="text-center text-sm leading-loose text-muted-foreground  ">
                    Designed and developed by{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                        href="https://thegagan-portfolio.vercel.app/">
                        Gagan Kumar
                    </a>{" "}
                    . Crafted
                    with{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                        href="https://nextjs.org/">
                        Nextjs 13{" "}
                    </a>{" "}
                    and{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                        href="https://tailwindcss.com/">
                        Tailwind CSS{" "}
                    </a>
                    , deployed with{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                        href="https://vercel.com/">
                        Vercel{" "}
                    </a>{" "}
                    and{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                        href="https://github.com/othegagan">
                        GitHub
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
};

export default Footer;
