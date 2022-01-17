import {HiMenuAlt4} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react"



const NavbarItems=({title,classProps})=>{
return(
    <li className={`mx-4 cursor-pointer ${classProps}`}>
        {title}
    </li>
)
}

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="w-full flex md:justify-center items-center p-4 justify-between ">
          <div className="md:flex-[0.5] flex-initial justify-center items-center  ">
          <img src="images/logo.png" className=" w-32 cursor-pointer" alt="logo"/>
          </div>
          
                 
                 <ul className="text-white md:flex hidden list-none items-center flex-row flex-initial items-center justify-between ">
                    {
                        ["Market","Transactions","Tutorials","Wallets"].map(
                            item=><NavbarItems title={item} key={item}/>
                        )
                    }
                    <li className=" mx-4 cursor-pointer px-7 py-3 border-[2px] border-[#3d4f7c] hover:bg-blue-500 rounded-full ">Login</li>
                 </ul>
                 
                 <div className="flex relative text-white">
                    {toggle?
                <AiOutlineClose fontSize={28} className="text-white text-center md:hidden cursor-pointer" onClick={()=>{ setToggle(false)}}/>:<HiMenuAlt4 fontSize={28} className="text-center md:hidden cursor-pointer text-white" onClick={()=>{ setToggle(true)}}/>    
                }
              {toggle && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggle(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavbarItems key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
                 </div>
                  </div>
    )
}

export default Navbar
