import React from 'react'

import TrendingList from '../TrendingList/TrendingList'
import Button from '../Button/Button'

import Paperoni from '../../assets/Images/paperoni.svg'
import Meat from '../../assets/Images/meat.svg'
import Doner from '../../assets/Images/Doner.svg'
import Roll from '../../assets/Images/Roll.svg'
import Choco from '../../assets/Images/choco.svg'
import Milk from '../../assets/Images/Milk.svg'
import Unicorn from '../../assets/Images/unicorn.svg'
import Kathi from '../../assets/Images/Kathi.svg'

import Star1 from '../../assets/Images/star1.svg'
import Star2 from '../../assets/Images/star2.svg'
import Star3 from '../../assets/Images/star3.svg'

function Trending() {
  return (
    <section className="treding-section">
        <div className="container mx-auto">
           <div>
           <div className="w-[500px]">
                <h2 className="text-[#333333] font-medium text-[38px] leading-[50px]"> Browser Our Trending <strong className="text-[#8BAC3E] font-medium text-[38px] leading-[50px]"> Receipt</strong></h2>
            </div>
            <ul className="mt-[56px] flex flex-wrap items-center justify-between gap-[30px]">
                <TrendingList itemBg={"bg-[#E6F3F5]"} img={Paperoni} alt={"Paperoni image"} title={"Pizza Paperoni"} text={"Pizza"} StarImg={Star1}/>
                <TrendingList itemBg={"bg-[#E6F3F5]"} img={Meat} alt={"Meat image"} title={"Pizza Meat"} text={"Pizza"} StarImg={Star2}/>
                <TrendingList itemBg={"bg-[#EAEEFA]"} img={Doner} alt={"Doner image"} title={"Doner Kebab"} text={"Kebab"} StarImg={Star3}/>
                <TrendingList itemBg={"bg-[#F9EEF3]"} img={Roll} alt={"Roll image"} title={"Salmon Roll"} text={"Salmon"} StarImg={Star1}/>
                <TrendingList itemBg={"bg-[#F0FEEB]"} img={Choco} alt={"Choco image"} title={"Cupcake Choco"} text={"Cupcake"} StarImg={Star1}/>
                <TrendingList itemBg={"bg-[#F3F7D9]"} img={Milk} alt={"milk image"} title={"Doughnut Milk"} text={"Doughnut"} StarImg={Star3}/>
                <TrendingList itemBg={"bg-[#F3F7D9]"} img={Unicorn} alt={"Unicorn image"} title={"Doughnut Unicorn"} text={"Doughnut"} StarImg={Star1}/>
                <TrendingList itemBg={"bg-[#EAEEFA]"} img={Kathi} alt={"Kathi image"} title={"Kathi Kebab"} text={"Kebab"} StarImg={Star1}/>
            </ul>
            <div className="mt-[68px] flex items-center justify-center">
                <Button btnWidth={"w-[160px]"} btnPadding={"py-[15px]"} title={"ALL Receipt"} />
            </div>
           </div>
        </div>
    </section>
  )
}

export default Trending