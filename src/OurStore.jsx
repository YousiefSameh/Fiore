import React from "react";

const OurStore = ({ darkMode }) => {
	return (
		<section className={`pb-24 ${darkMode ? "bg-gray-900" : "bg-third"}`}>
			<div
				className={`container mx-auto h-full flex flex-col lg:flex-row gap-12 items-center p-6 lg:p-0 ${
					darkMode ? "text-gray-300" : "text-black"
				}`}
			>
				<img
					src="Images/img24.jpg"
					className={`w-full lg:w-1/2 p-8 lg:p-16 ${
						darkMode ? "bg-gray-800" : "bg-secondary"
					}`}
					alt=""
				/>
				<div
					className={`text w-full lg:w-1/2 ${
						darkMode ? "text-gray-300" : "text-black"
					}`}
				>
					<h1
						className={`font-primary text-4xl sm:text-5xl lg:text-6xl ${
							darkMode ? "text-gray-300" : "text-black"
						}`}
					>
						Our Store
					</h1>
					<div
						className={`row flex flex-col sm:flex-row mt-12 w-full pr-0 lg:pr-12 justify-between gap-6 ${
							darkMode ? "text-gray-300" : "text-black"
						}`}
					>
						<p>
							Goddard Hall 60 <br /> Washington Square E <br /> New York, NY
							10003, USA
						</p>
						<p>
							+20 123-456-7890 <br /> info@fiore.com
						</p>
					</div>
					<hr
						className={`border-fourth my-12 ${
							darkMode ? "border-gray-700" : "border-fourth"
						}`}
					/>
					<div
						className={`row flex flex-col sm:flex-row mt-12 w-full pr-0 lg:pr-12 justify-between gap-6 ${
							darkMode ? "text-gray-300" : "text-black"
						}`}
					>
						<p>
							Monday - Friday <br /> 7am - 7pm <br />
						</p>
						<p>
							Saturday - Sunday <br /> 8am - 7pm <br />
						</p>
					</div>
					<button
						className={`border ${
							darkMode ? "border-gray-500" : "border-black"
						} px-8 sm:px-12 py-4 rounded-full
        ${
					darkMode
						? "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-gray-200"
						: "bg-black text-white hover:bg-gray-800 hover:text-gray-300"
				}
        transition-colors w-fit my-12`}
					>
						<a
							href="#"
							className={`text-inherit uppercase ${
								darkMode
									? "text-gray-300 hover:text-gray-200"
									: "text-black hover:text-white"
							}`}
						>
							View Map
						</a>
					</button>
				</div>
			</div>
		</section>
	);
};

export default OurStore;
