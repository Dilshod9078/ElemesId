import React from 'react'

import Button from '../Button/Button'
import HeroImg from '../../assets/Images/hero-img.png'

function Hero() {
  return (
    <section className="hero-section">
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <div className="w-[482px]">
                    <h1 className="text-[#8BAC3E] text-[64px] leading-[64px] font-medium">Good Food Us Good Mood</h1>
                    <p className="mt-[32px] text-[18px] leading-[29px] font-normal text-[#757575]">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
                    <div className="mt-[32px] flex items-center gap-[16px]">
                    <Button btnWidth={"w-[147px]"} btnShadow={"shadow-[0px_8px_32px_0px_#666BE259]"}  btnPadding={"py-[10px]"}  title={"Daftar Sekarang"}/>
                    <a href="#" className="w-[98px] py-[10px] text-center inline-block rounded-[100px] bg-[#F2F2F2] text-[#333333] text-[14px] leading-[22px] font-medium hover:bg-lime-500 hover:text-white">About us</a>
                    </div>
                </div>
                <img src={HeroImg} alt="Hero image" />
            </div>
        </div>
    </section>
  )
}

export default Hero