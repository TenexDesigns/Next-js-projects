import { useSelector, useDispatch } from 'react-redux';
import Search from '@/components/screen1/search';
import Search2 from '@/components/screen1/search2';
import SearchInput from '@/components/screen1/search';
import CategoryChip from '../components/screen1/chips';
import Navbar from '../components/screen1/navbar';
import Image from 'next/image';
import {Button, ButtonBanner} from '../components/button';
import { ButtonBase } from '@mui/material';
import Banner from '../components/screen1/banner';
import {Deals, Deals2, SourceText }from '../components/screen1/deals';
import Card from '../components/card';
import Card2 from '../components/screen1/card_2';
import { DealsCard } from '../components/screen1/deals_card';
import { ConsumerCard } from '../components/screen1/consumer_cards';
import Food1 from '../../public/svg/food';
import Banner2 from '../components/screen1/banner_2';
import { Recommended } from '../components/screen1/recomened_items';



export default function Home() {
  const categories = ['All category','Electronics', 'Clothing', 'HomeClothing','utensiles', 'farmtools'];
  const images = ['/img/banner.png','/img/curry.jpg','/img/noodles.jpg','/img/stew.jpg']
 
    return (
      <div className=' bg-blue-100'>

       <Navbar/>
        <Search2/>
        <div className=' flex overflow-x-scroll  scrollbar-hide'>
        {categories.map((category) => (
        <CategoryChip key={category} category={category} />
      ))}</div>
<Banner/>

<DealsCard/>
<ConsumerCard title ={'Home and Out door'}/>

<ConsumerCard title={'Consumer Electronics'}/>
<Banner2/>
<div className=' mt-5 ml-3 mb-3'>Recommended Items </div>
<Recommended/>




    
      </div>)
  }



  


