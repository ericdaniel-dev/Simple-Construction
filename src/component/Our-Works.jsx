import PrevButton from './atom/prev-button.jsx';
import NextButton from './atom/next-button.jsx';
import WorksCard from './molecules/works-card.jsx';

export default function OurWorks(){
	const worksData = {
		items:[
			{
				title: "Brahmana 01",
				size: "244m",
				rooms: "5 bedrooms",
				thumb: "./images/House 1.jpg"
			},
			{
				title: "Hanoman 02",
				size: "244m",
				rooms: "6 bedrooms",
				thumb: "./images/house 2.webp"
			}
		]
	};
	return(
		<div id="ourworkBox" className="flex justify-center w-full h-auto bg-white">
			<div id="ourworks" className="flex flex-col w-full lg:w-[90%] h-auto bg-blue-300 gap-5 p-10">
				<div id="workshead" className="flex flex-col lg:flex-row items-center justify-between">
					<h2 className="text-5xl">Our Works</h2>
					<div className="flex gap-2">
						<PrevButton/>
						<NextButton/>
					</div>
				</div>
				<div id="worksimage" className="flex flex-col lg:flex-row items-center justify-center gap-5">
					{worksData.items.map((obj, index) => (
						<WorksCard 
							key={index}
							data={obj}
						/>
						))}
				</div>
			</div>
		</div>
		);
}