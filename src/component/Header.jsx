export default function Header(){
	return(
		<header className="w-full h-auto p-3 border-2">
			<div id="headers" className="flex items-center justify-around">
				<h1 className="text-lg md:text-2xl">Simple Construction</h1>
				<nav id="navbar">
					<ul className="hidden md:flex gap-1 items-center">
						<li className="text-lg lg:text-xl font-semibold text-slate-700 p-2"><a href="/">Home</a></li>
						<li className="text-lg lg:text-xl font-semibold text-slate-700 p-2"><a href="#aboutus">About Us</a></li>
						<li className="text-lg lg:text-xl font-semibold text-slate-700 p-2"><a href="#">Our Works</a></li>
						<li className="text-lg lg:text-xl font-semibold text-slate-700 p-2"><a href="#">Service</a></li>
						<li className="text-lg lg:text-xl font-semibold text-slate-700 p-2"><a href="#">Pricing</a></li>
					</ul>
				</nav>
				<span className="text-base md:text-lg font-semibold border-2 border-yellow-300 rounded-3xl px-3 py-2">
					<a href="#">Contact Us</a>
				</span>
			</div>
		</header>
		);
}