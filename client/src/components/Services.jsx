import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({color,title,icon,subtitle})=>{
    return(
        <div className="flex flex-row cursor-pointer hover:shawdow-xl justify-start items-start white-glassmorphism p-3 m-2">
            <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
        </div>
    )
}

const Services = () => {

    return (
        <div className="flex w-full gradient-bg-services items-center justify-center ">
            <div className="flex flex-col mf:flex-row items-center justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 flex-col justify-start items-start ">
                    <h1 className="text-white text-2xl sm:text-5xl py-2 text-gradient">
                        Services that we
                        <br/>
                        Continue to improve.
                    </h1>
                    <p className=" my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                        Teh best choice for buying and selling your crypto assets , with the various super friendly serbives we offer.
                    </p>

                </div>

            <div className="flex-1 flex-col flex items-center jjustify-center">
            <ServiceCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />

            </div>


            </div>
        </div>
    )
}

export default Services
