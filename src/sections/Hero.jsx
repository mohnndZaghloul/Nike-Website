import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section id="home" 
      className="w-full flex-nowrap flex lg:flex-row flex-col gap-10 min-h-screen justify-center max-container">
      <div className="relative lg:w-2/5 flex flex-col justify-center items-start w-full mt-10 sm:mt-0 padding lg:pl-0">
        <p className="text-base font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-8 font-palanquin text-4xl sm:text-8xl xl:text-9xl leading-0 font-bold">
          <span className="lg:bg-white lg:whitespace-nowrap lg:relative z-10 sm:pr-8">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-2">Nike</span>
          Shoes
        </h1>
        <p className="info-text mt-3 mb-10 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop Now" iconURL={arrowRight}/>
        <div className="flex justify-start items-start flex-nowrap w-full mt-10 gap-12">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-32 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="shoe collection" className="object-contain relative z-9 p-20 xl:p-36"/>
        <div className="flex sm:gap-6 gap-3 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} bigShoeImage={bigShoeImg}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero