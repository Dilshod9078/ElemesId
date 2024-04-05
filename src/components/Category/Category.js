import React from 'react'

import CategoryList from '../CategoryList/CategoryList'

import CupCake from '../../assets/Images/cupcake.svg'
import Pizza from '../../assets/Images/pizza.svg'
import Kebab from '../../assets/Images/kebab.svg'
import Salmon from '../../assets/Images/salmon.svg'
import Doughnut from '../../assets/Images/doughnut.svg'
import Prev from '../../assets/Images/prev.svg'
import Next from '../../assets/Images/next.svg'

function Category() {

   const [changeCard, setchangeCard] = React.useState(0)
   const [stopTimeOut, setStopTimeOut] = React.useState(false)

   function nextBtn(){
    setStopTimeOut(true)
    if(changeCard == -2400){
      setchangeCard(changeCard + 2400)
    }
    else{
      setchangeCard(changeCard-120)
    }
  }

  if(changeCard == -2400){
    const data = setTimeout(() =>{
      setchangeCard(0)
    },500)

    if(stopTimeOut){
      clearTimeout(data)
    }
  }
  else{
    const data = setTimeout(() =>{
      setchangeCard(changeCard - 120)
    }, 1000)
    if(stopTimeOut){
      clearTimeout(data)
    }
  }

  function prevBtn(){
    setStopTimeOut(true)
    if(changeCard != 0){
      const data = setTimeout(() => {
        setchangeCard(changeCard+120)
        if(stopTimeOut){
          clearTimeout(data)
        }
      })
    }
  }

  if(stopTimeOut){
    setTimeout(() =>{
      setStopTimeOut(false)
    }, 5000)
  }

  return (
    <section className="category-section">
            <div>
              <div className="container mx-auto">
               <div className="w-[500px]">
                <h2 className="text-[#333333] font-medium text-[38px] leading-[50px]"> Browser Our Category <strong className="text-[#8BAC3E] font-medium text-[38px] leading-[50px]"> Receipt</strong></h2>
               </div>
              </div>
               <ul className="category-list w-full mt-[32px] pl-[140px] flex items-center gap-[10px] justify-between overflow-x-auto">

                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#F0FEEB]"} img={CupCake} alt={"Cupcake image"} width={47} height={52} title={"Cupcake"} text={"22 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#E6F3F5]"} img={Pizza} alt={"Pizza image"} width={47} height={47} title={"Pizza"} text={"25 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#F0FEEB]"} img={CupCake} alt={"Cupcake image"} width={47} height={52} title={"Cupcake"} text={"22 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#E6F3F5]"} img={Pizza} alt={"Pizza image"} width={47} height={47} title={"Pizza"} text={"25 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#F0FEEB]"} img={CupCake} alt={"Cupcake image"} width={47} height={52} title={"Cupcake"} text={"22 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#EAEEFA]"} img={Kebab} alt={"Kebab image"} width={47} height={47} title={"Kebab"} text={"12 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#E6F3F5]"} img={Pizza} alt={"Pizza image"} width={47} height={47} title={"Pizza"} text={"25 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#EAEEFA]"} img={Kebab} alt={"Kebab image"} width={47} height={47} title={"Kebab"} text={"12 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#F9EEF3]"} img={Salmon} alt={"Salmon image"} width={47} height={47} title={"Salmon"} text={"22 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#EAEEFA]"} img={Kebab} alt={"Kebab image"} width={47} height={47} title={"Kebab"} text={"12 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#F3F7D9]"} img={Doughnut} alt={"Doughnut image"} width={52} height={47} title={"Doughnut"} text={"11 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#F9EEF3]"} img={Salmon} alt={"Salmon image"} width={47} height={47} title={"Salmon"} text={"22 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#F3F7D9]"} img={Doughnut} alt={"Doughnut image"} width={52} height={47} title={"Doughnut"} text={"11 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#F9EEF3]"} img={Salmon} alt={"Salmon image"} width={47} height={47} title={"Salmon"} text={"22 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[30px]"} itemBg={"bg-[#F3F7D9]"} img={Doughnut} alt={"Doughnut image"} width={52} height={47} title={"Doughnut"} text={"11 Items"}/>
                <CategoryList state={changeCard} itemPadding={"py-[73.5px]"} itemBg={"bg-[#F0FEEB]"}/>
                  <span className="w-[230px] h-[180px] bg-white absolute left-[-100px]"></span>
               </ul>
               <div className=" mt-[46px] flex items-center justify-end gap-[13px] pr-[40px]">
                <button onClick={prevBtn} className={`w-[113px] bg-[#8BAC3E] rounded-[100px] py-[9px] flex items-center justify-center gap-[7px] ${changeCard == 0 ? "cursor-not-allowed opacity-50" : ""}`}>
                    <img src={Prev} alt="Prev icon" width={33} height={33} />
                    <span className="text-[16px] font-medium leading-[19px] text-white">PREV</span>
                </button>
                <button onClick={nextBtn} className="w-[113px] bg-[#8BAC3E] rounded-[100px] py-[9px] flex items-center justify-center gap-[7px]">
                    <img src={Next} alt="Next icon" width={33} height={33} />
                    <span className="text-[16px] font-medium leading-[19px] text-white">NEXT</span>
                </button>
               </div>
            </div>
    </section>
  )
}

export default Category