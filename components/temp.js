const myServices = () => {
    return (
        <div className="flex flex-col overflow-x-hidden w-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-3xl">
            <div className="flex flex-col md:flex-row gap-5 items-center justify-between py-8">
                <div className="text-4xl pl-10 tracking-tighter">
                    <span className="text-gray-50">My </span>
                    <span className="text-orange-400">Services</span>
                </div>
                <div className="max-w-lg pr-10 text-white text-xl font-medium tracking-tight">
                    We craft seamless UI/UX, bespoke websites/apps,
                    and robust server-side business logic.
                </div>
            </div >
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-8 px-10">
                <div className="flex-col pt-12 w-[90%] sm:w-[80%] md:w-[400px] overflow-hidden relative flex">
                    <img
                        loading="lazy"
                        src="/images/brown-designer-rectangle.svg"
                        className="absolute w-full h-auto w-auto object-cover object-center inset-0"
                    />
                    <div className="relative pl-6 text-white text-2xl font-medium tracking-tight w-[342px] max-w-[342px]">
                        UI/ UX Design
                    </div>
                    <div className="relative bg-gray-50 bg-opacity-30 min-h-[2px] mt-5" />
                    <div className="relative flex flex-row pt-2 relative overflow-hidden self-stretch flex aspect-[1.1885714285714286] w-full mt-12 pt-12 items-end">
                        <img
                            loading="lazy"
                            src="/images/stacked-rect-0.png"
                            className="absolute h-full rounded-3xl w-full object-cover object-center inset-0"
                        />
                    </div>
                </div>
                <div className="flex-col pt-12 w-[90%] md:w-[400px] overflow-hidden relative flex">
                    <img
                        loading="lazy"
                        src="/images/brown-designer-rectangle.svg"
                        className="absolute w-full h-auto w-auto object-cover object-center inset-0"
                    />
                    <div className="relative pl-6 text-white text-2xl font-medium tracking-tight w-[342px] max-w-[342px]">
                        UI/ UX Design
                    </div>
                    <div className="relative bg-gray-50 bg-opacity-30 min-h-[2px] mt-5" />
                    <div className="relative flex flex-row pt-2 relative overflow-hidden self-stretch flex aspect-[1.1885714285714286] w-full mt-12 pt-12 items-end">
                        <img
                            loading="lazy"
                            src="/images/stacked-rect-0.png"
                            className="absolute h-full rounded-3xl w-full object-cover object-center inset-0"
                        />
                    </div>
                </div>
                <div className="flex-col pt-12 w-[90%] md:w-[400px] overflow-hidden relative flex">
                    <img
                        loading="lazy"
                        src="/images/brown-designer-rectangle.svg"
                        className="absolute w-full h-auto w-auto object-cover object-center inset-0"
                    />
                    <div className="relative pl-6 text-white text-2xl font-medium tracking-tight w-[342px] max-w-[342px]">
                        UI/ UX Design
                    </div>
                    <div className="relative bg-gray-50 bg-opacity-30 min-h-[2px] mt-5" />
                    <div className="relative flex flex-row pt-2 relative overflow-hidden self-stretch flex aspect-[1.1885714285714286] w-full mt-12 pt-12 items-end">
                        <img
                            loading="lazy"
                            src="/images/stacked-rect-0.png"
                            className="absolute h-full rounded-3xl w-full object-cover object-center inset-0"
                        />
                    </div>
                </div>
            </div>
            <div className="hidden md:flex gap-2 mb-8 justify-center">
                <div className="w-10 h-3 bg-orange-400 rounded-lg" />
                <div className="w-3 h-3 bg-white rounded-full" />
                <div className="w-3 h-3 bg-white rounded-full" />
            </div>
        </div >
    );
}

export default myServices;