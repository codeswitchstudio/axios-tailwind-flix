import React from "react";
import logo from './../assets/react.svg';
// import './../App.css';
import { HiHome,
			HiMagnifyingGlass,
			HiStar,
			HiPlayCircle,
			HiTv }  
			from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from "./HeaderItem";	

const menu = [
	{
		name: 'HOME',
		icon: HiHome,
	},
	{
		name: 'SEARCH',
		icon: HiMagnifyingGlass,
	},
	{
		name: 'WATCHLIST',
		icon: HiPlus,
	},
	{
		name: 'ORIGINALS',
		icon: HiStar,
	},
	{
		name: 'MOVIES',
		icon: HiPlayCircle,
	},
	{
		name: 'SERIES',
		icon: HiTv,
	}
]	;


function Header() {
	return (
		<div className='flex Items-center justify-between'>
			<div className='flex gap-8 '>
				<img src={logo}className='w-[80px] md:w-[115px]object-cover' />
			{menu.map((item)=>
				<HeaderItem name={item.name} Icon={item.icon} />

			
			)}
		</div>
		<img src="" className='w=[40px] rounded-full' />
		</div>
	)  
}

export default Header