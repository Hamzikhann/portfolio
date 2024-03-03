import { BrowserRouter } from "react-router-dom";

import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
	Services,
	Footer
} from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Services />
				<Experience />

				<Tech />
				<Works />
				<Feedbacks />

				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>

				<Footer/>
			</div>
		</BrowserRouter>
	);
};

export default App;
