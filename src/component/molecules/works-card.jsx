export default function WorksCard(props){
	const {title, size, rooms, thumb} = props.data;
	return(
		<div id="workdcard" className="flex flex-col w-full lg:w-1/2 h-auto gap-2">
			<div id="thumbnail" className="w-full h-[370px] border-2 rounded-xl">
				<img src={thumb} 
					className="w-full h-full object-cover"
					alt={`images of ${title}`}/>
			</div>
			<div id="desc" className="flex flex-col md:flex-row items-center justify-between">
				<h3 className="text-2xl">
					{title}
				</h3>
				<div className="flex gap-5 text-lg">
					<span>{size}</span>
					<span>{rooms}</span>
				</div>
			</div>
		</div>
		);
}