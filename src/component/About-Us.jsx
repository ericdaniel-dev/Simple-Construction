export default function AboutUs(){
	return(
		<section id="aboutusBox" className="flex flex-col p-5 lg:p-10 items-center justify-center w-full h-auto">
			<div id="aboutus" className="flex flex-col lg:flex-row flex-1 w-full lg:w-[80%] h-auto gap-2 lg:gap-5 justify-center lg:justify-between">
				<div className="flex flex-col gap-2 lg:gap-5 order-2 lg:order-1 w-full lg:w-1/2 h-[400px]">
					<h3 className="text-2xl font-semibold lg:text-5xl">Dedication, experience, and a passion for perfection.</h3>
					<p className="text-slate-800 text-base lg:text-lg text-justify">
						At <b>Simple Construction</b>, our focus is on You and 
						what You want to achive. We pride ourselves on forging 
						strong, lasting relationships, which help us to continue 
						to thrive and develop. 
					</p>
					<p className="text-slate-800 text-base lg:text-lg text-justify">
						Our desire to work closely with those who share the same 
						vision and values is why many of our clients have a multiple 
						project history. Exceeding client expectations has resulted. 
					</p>
				</div>
				<div className="flex items-center justify-center w-full order-1 lg:order-2 lg:w-1/3 h-[350px]">
					<img src="./images/workers-examining-work.jpg"
						className="w-full h-full object-cover rounded-xl scale-[0.8] lg:scale-[1]"
					 alt="workers examining"/>
				</div>
			</div>
			<div id="passion" className="flex flex-col flex-1 w-[90%] h-auto bg-yellow-400 gap-5 p-2 md:p-10 rounded-2xl">
				<h2 className="text-5xl p-5">We Build With Passion</h2>
				<div className="flex items-center gap-5 justify-center p-3 flex-wrap w-full h-auto">
					<div className="flex flex-col justify-between w-[200px] h-auto p-5">
						<h3 className="text-2xl">The Best Color</h3>
						<p>
							We choose the right color for your home
						</p>
					</div>
					<div className="flex flex-col justify-between w-[200px] h-auto p-5">
						<h3 className="text-2xl">The Best Price</h3>
						<p>
							We are very affordable from the shop next door
						</p>
					</div>
					<div className="flex flex-col justify-between w-[200px] h-auto p-5">
						<h3 className="text-2xl">The Best Material</h3>
						<p>
							For a dream house, you have to use good materials
						</p>
					</div>
					<div className="flex flex-col justify-between w-[200px] h-auto p-5">
						<h3 className="text-2xl">The Best Condition</h3>
						<p>
							The buildings we make are resistant to all weather conditions
						</p>
					</div>
				</div>
			</div>
		</section>
		);
}