import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
	const [firstParagraphText, setFirstParagraphText] = useState("");
	const [secondParagraphText, setSecondParagraphText] = useState("");

	useEffect(() => {
		const firstParagraph =
			"Cloud design Lab  is an innovative AI solutions company dedicated to transforming industries through intelligent automation and personalized user experiences.";
		let index = 0;

		const interval = setInterval(() => {
			setFirstParagraphText(firstParagraph.substring(0, index));
			index++;

			if (index > firstParagraph.length) {
				clearInterval(interval);

				// Start displaying the second paragraph
				let secondIndex = 0;
				const secondInterval = setInterval(() => {
					const secondParagraph =
						" We specialize in cutting-edge AI products that enhance productivity, simplify workflows, and empower businesses to thrive in the digital age.";
					setSecondParagraphText(secondParagraph.substring(0, secondIndex));
					secondIndex++;

					if (secondIndex > secondParagraph.length) {
						clearInterval(secondInterval);
					}
				}, 20); // Adjust the interval duration as needed
			}
		}, 20); // Decreased interval duration for faster display

		return () => clearInterval(interval);
	}, []);

	return (
		<section className={`relative w-full h-screen mx-auto`}>
			<div
				className={`absolute inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915EFF]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, We are <span className="text-[#915EFF]">Cloud design.</span>
					</h1>

					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						{/* <h1>Transform your business.</h1> */}
						{firstParagraphText}
					</p>

					<p className={`${styles.heroSubText} mt-2 text-white-100`}>{secondParagraphText}</p>
				</div>
			</div>

			{/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0]
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop"
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div> */}
		</section>
	);
};

export default Hero;
