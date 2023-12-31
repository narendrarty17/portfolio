const developerInfo = {
    "name": "Narendra",
    "designation": "Full Stack Web Developer",
    "image": "/images/developer.png",
    "experience": "2 Years",
    "tagLine": "Narendra exceptional coding skills ensures smooth business operations"
}

const DeveloperIntro = () => {
    return (
        <div>
            {/* For smaller screens */}
            <div className="flex flex-col lg:hidden gap-10 mb-10 justify-center items-center mt-10">
                <div
                    className="items-center mb-[-25px] flex flex-col gap-4 mt-5"
                >
                    <img
                        loading="lazy"
                        src="/images/hello.svg"
                    />
                    <div className="text-4xl w-[75%] tracking-tighter text-center relative z-10">
                        <p className="text-neutral-900">
                            I'm <span className="text-orange-400">Narendra,</span>
                        </p>
                        <p className="text-neutral-900">Full Stack Web Developer</p>
                    </div>
                    <div className="relative">
                        <div className="z-10 rounded-t-full absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[150px] w-[300px] sm:h-[190px] sm:w-[380px] bg-orange-400" />
                        <img
                            loading="lazy"
                            className="relative z-20 ml-auto mr-auto"
                            src={developerInfo.image}
                            alt="Developer Portrait"
                        />
                    </div>
                </div>
                <div
                    style={{ gap: "10%" }}
                    className="flex justify-center w-full gap-1/5"
                >
                    <div className="flex flex-col items-end justify-center">
                        <div className="flex">
                            <img loading="lazy" src="/images/star.png" />
                            <img loading="lazy" src="/images/star.png" />
                            <img loading="lazy" src="/images/star.png" />
                            <img loading="lazy" src="/images/star.png" />
                            <img loading="lazy" src="/images/star.png" />
                        </div>
                        <div className="text-neutral-900 text-center text-3xl font-bold tracking-tighter mt-2">
                            {developerInfo.experience}
                        </div>
                        <div className="text-neutral-900 text-center text-xl tracking-tight whitespace-nowrap mt-1.5">
                            Experience
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <img
                            loading="lazy"
                            src="/images/quote-up.svg"
                        />
                        <div className="text-slate-700 text-lg w-[150px] font-medium tracking-tight">
                            {developerInfo.tagLine}
                        </div>
                    </div>
                </div>
            </div>

            {/* For bigger screens */}
            <div className="hidden lg:flex flex-wrap lg:flex-no-wrap gap-10 mb-10 md:mb-0 justify-center items-center mt-10">
                <div className="flex flex-col md:w-lg order-3 md:order-1 items-start">
                    <img
                        loading="lazy"
                        src="/images/quote-up.svg"
                    />
                    <div className="text-slate-700 w-[170px] text-lg md:text-xl font-medium tracking-tight">
                        {developerInfo.tagLine}
                    </div>
                </div>
                <div
                    className="items-center md:w-auto mb-[-25px] md:mb-auto order-1 md:order-2 flex flex-col gap-4 mt-5"
                >
                    <img
                        loading="lazy"
                        src="/images/hello.svg"
                    />
                    <div className="text-5xl tracking-tighter text-center relative z-10">
                        <p className="text-neutral-900">
                            I'm <span className="text-orange-400">Narendra,</span>
                        </p>
                        <p className="text-neutral-900">Full Stack Web Developer</p>
                    </div>
                    <div className="relative">
                        <img
                            loading="lazy"
                            className="relative z-20 w-[400px]"
                            src="/images/developer.png"
                            alt="Developer Portrait"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-[150px] order-2 md:order-3 items-end justify-center">
                    <div className="flex">
                        <img loading="lazy" src="/images/star.png" />
                        <img loading="lazy" src="/images/star.png" />
                        <img loading="lazy" src="/images/star.png" />
                        <img loading="lazy" src="/images/star.png" />
                        <img loading="lazy" src="/images/star.png" />
                    </div>
                    <div className="text-neutral-900 text-center text-4xl font-bold tracking-tighter mt-3">
                        2 Years
                    </div>
                    <div className="text-neutral-900 text-center text-xl tracking-tight whitespace-nowrap mt-1.5">
                        Experience
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeveloperIntro;