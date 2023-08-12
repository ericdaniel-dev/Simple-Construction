export default function Introduction(){
	return(
		<section id="introductionBox" className="flex items-center justify-center w-full h-auto p-1 md:p-3 bg-yellow-400 rounded-bl-xl rounded-br-xl">
			<div id="introduction" className="flex flex-col lg:flex-row w-[95%] h-auto rounded-3xl bg-white p-2 md:p-10 border-2 border-red-200">
				<div id="intro" className="flex items-center lg:items-start flex-col w-full lg:w-1/2 h-auto lg:h-[450px] p-2 gap-5 lg:gap-10">
					<h2 className="text-2xl md:text-7xl font-semibold text-center lg:text-left">BUILD YOUR DREAM HOUSE</h2>
					<p className="text-lg md:text-xl text-slate-800">
						We are here to help you build your dream house
					</p>
					<div id="quickbutton" className="flex gap-2">
						<button className="text-xl px-4 py-2 border-2 border-white bg-yellow-300 rounded-xl">Estimate Price</button>
						<button className="text-xl px-4 py-2 border-2 border-black rounded-xl">See Our Works</button>
					</div>
					<div id="latestwork" className="flex gap-5 p-2">
						<div>
							<span className="text-2xl font-semibold text-slate-700">250+</span>
							<p className="text-lg font-semibold text-slate-700">Awesome Projects</p>
						</div>
						<div>
							<span className="text-2xl font-semibold text-slate-700">62+</span>
							<p className="text-lg font-semibold text-slate-700">Interested Clients</p>
						</div>
					</div>
				</div>
				<div id="cover" className="hidden lg:flex items-center justify-center w-full lg:w-1/2 h-[450px] relative">
					<img src="./images/Covers Image.png" className="absolute mt-0 lg:mt-20 w-full h-full"/>
				</div>
			</div>
		</section>
		);
}