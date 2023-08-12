export default function Footer(){
	return(
		<footer id="footerBox" className="w-full flex items-center justify-center h-auto bg-yellow-400">
			<div id="footer" className="flex flex-col lg:flex-row gap-10 w-[95%] p-2 md:p-10">
				<div id="copyright" className="flex flex-col gap-5 p-2 w-full lg:w-1/3 order-2 lg:order-1">
					<h6 className="text-3xl">Simple Construction</h6>
					<span>Email: Simpleconstruction@email.com</span>
					<p>
						Copyright (c) 2020-2023 Simpleconstruction. All rights reserved.
					</p>	 
				</div>
				<div id="information" className="flex flex-col md:flex-row order-1 lg:order-2 w-full lg:w-2/3 h-auto">
					<div id="info-aboutus" className="w-full md:w-1/4">
						<h6 className="text-xl">About Us</h6>
						<ul>
							<li className="text-slate-800"><a href="#">Project</a></li>
							<li className="text-slate-800"><a href="#">Track Record</a></li>
							<li className="text-slate-800"><a href="#">Pricing</a></li>
							<li className="text-slate-800"><a href="#">Services</a></li>
							<li className="text-slate-800"><a href="#">Professional Worker</a></li>
						</ul>
					</div>
					<div id="info-pricing" className="w-full md:w-1/4">
						<h6 className="text-xl">Pricing</h6>
						<ul>
							<li className="text-slate-800"><a href="#">About Product</a></li>
							<li className="text-slate-800"><a href="#">Management</a></li>
						</ul>
					</div>
					<div id="info-media" className="w-full md:w-1/4">
						<h6 className="text-xl">Media</h6>
						<ul>
							<li className="text-slate-800"><a href="#">Privacy Policy</a></li>
							<li className="text-slate-800"><a href="#">Development</a></li>
							<li className="text-slate-800"><a href="#">Terms & Service</a></li>
						</ul>
					</div>
					<div id="info-contact" className="w-full md:w-1/4">
						<h6 className="text-xl">Contact</h6>
						<span className="text-slate-800">Tel. : +123-456-789</span>
						<span className="text-slate-800">Email : Simpleconstruction@email.com</span>
					</div>
				</div>
			</div>
		</footer>
	);
}