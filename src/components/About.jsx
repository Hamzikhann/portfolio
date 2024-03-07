import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { industries } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Count } from "../components";

const ServiceCard = ({ index, title, icon, description }) => (
	<div className="w-full sm:w-[calc(33.33% - 16px)] max-w-[320px] m-2">
		<div className=" p-[1px] rounded-[20px] shadow-card">
			<div className="bg-tertiary rounded-[20px] py-5 flex items-center justify-between px-4">
				<div className="flex items-center">
					<img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[17px] font-bold ml-4">{title}</h3>
				</div>
			</div>
			<div className="bg-gray-300 rounded-b-[20px] py-4 px-4">
				<p className="text-center text-gray-900 mt-4">{description}</p>
			</div>
		</div>
	</div>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Our Mission ?</h2>
			</motion.div>

			<motion.p variants={fadeIn("", "", 0.05, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
				To empower businesses with innovative technology solutions that drive growth and success. We strive to deliver
				exceptional services, tailored to the unique needs of each client, while fostering creativity, collaboration,
				and excellence in everything we do. With the focus on customer satisfaction and technological advancement to
				solve real-world problems. Let's work together to bring your ideas to life!
			</motion.p>
			<Count />

			<motion.p
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-3xl text-center font-bold pb-3"
			>
				Industries We Serve
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{industries.map((industry, index) => (
					<ServiceCard key={industry.title} index={index} {...industry} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
