import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export default function Count() {
	const [countUp, setCountUp] = useState(false);

	return (
		<section className="bg-primary py-10">
			<ScrollTrigger className="trigger" onEnter={() => setCountUp(true)} onExit={() => setCountUp(false)}>
				<div className="flex flex-wrap justify-center max-w-6xl mx-auto">
					<div className="count-item lg:w-1/4 md:w-1/2 sm:w-full flex flex-col items-center justify-center mx-4 mb-8 bg-gray-300 rounded-lg shadow-lg py-8 px-6">
						<h1 className="text-4xl text-black mb-2">
							{countUp && <CountUp start={0} end={25} duration={2} delay={0} />}+
						</h1>
						<p className="text-black">Projects</p>
					</div>
					<div className="count-item lg:w-1/4 md:w-1/2 sm:w-full flex flex-col items-center justify-center mx-4 mb-8 bg-gray-300 rounded-lg shadow-lg py-8 px-6">
						<h1 className="text-4xl text-black mb-2">
							{countUp && <CountUp start={0} end={10} duration={2} delay={0} />}+
						</h1>
						<p className="text-black">Clients</p>
					</div>
					<div className="count-item lg:w-1/4 md:w-1/2 sm:w-full flex flex-col items-center justify-center mx-4 mb-8 bg-gray-300 rounded-lg shadow-lg py-8 px-6">
						<h1 className="text-4xl text-black mb-2">
							{countUp && <CountUp start={0} end={20} duration={2} delay={0} />}+
						</h1>
						<p className="text-black">Members</p>
					</div>
					{/* <div className="count-item lg:w-1/4 md:w-1/2 sm:w-full flex flex-col items-center justify-center mx-4 mb-8 bg-white rounded-lg shadow-lg py-8 px-6">
                        <h1 className="text-4xl text-black mb-2">{countUp && <CountUp start={0} end={50} duration={2} delay={0} />}+</h1>
                        <p className="text-black">Resources Searched</p>
                    </div> */}
				</div>
			</ScrollTrigger>
		</section>
	);
}
