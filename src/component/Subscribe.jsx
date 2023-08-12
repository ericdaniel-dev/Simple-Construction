export default function Subscribe(){
	return(
		<div id="subscribeBox" className="flex flex-col items-center justify-center w-full h-auto bg-white">
			<div id="subscribe" className="flex gap-5 flex-col justify-center items-center w-full md:w-3/4 h-[300px] bg-white">
				<h3 className="text-5xl font-medium">Let's Talk</h3>
				<span className="text-xl font-medium">or want to get update from us?</span>
				<form className="flex flex-col md:flex-row gap-5 bg-yellow-400 w-full h-1/2 items-center justify-center rounded-xl">
					<input type="text" placeholder="Your Email" 
						id="email" name="email" autoComplete="off"
						className="w-[90%] md:w-1/2 px-3 py-2 border-b-2 border-black bg-yellow-400 text-black placeholder-black text-lg"
						/>
					<button className="px-4 py-2 border-2 bg-white text-xl rounded-2xl">Subscribe</button>
				</form>
			</div>
		</div>
		);
}