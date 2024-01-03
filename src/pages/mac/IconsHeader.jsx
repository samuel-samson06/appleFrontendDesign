import React, { useState } from "react"
import {LuMonitor} from "react-icons/lu"
import {FaLaptop} from "react-icons/fa6"
import {IoIosLaptop} from "react-icons/io"
import {HiServer} from "react-icons/hi2"
import {HiOutlineServer} from "react-icons/hi"
import {BsFillCpuFill} from "react-icons/bs"
import {PiComputerTower} from "react-icons/pi"
import {RiComputerLine} from "react-icons/ri"
import {motion} from "framer-motion"

function IconsHeader() {

    const [initial, setiInital] = useState(true);

    const handleNext=function(){
        setiInital(!initial)
        
    }
    const handlePrevious=function(){
        setiInital(!initial)
    }

  return (
    <React.Fragment>
        <div className=" flex justify-evenly bg-gray-50 py-3">
            <button onClick={handlePrevious} className={`${initial?'hidden':''}`}>≺</button>
            <main className={` h-16 overflow-hidden  text-3xl items-center ${initial?'':'border-l-[1px]'} ${initial?'border-r-[1px]':''} border-l-gray-300`}>
                <motion.ul
                variants={{
                    initial:{
                        x:0,
                    },
                    animate:{
                        x:-300,
                        transition:{
                            duration:0.5,
                        }
                    }
                }}
                initial="initial" animate={`${initial?"":"animate"}`}
                className={` grid grid-cols-4  gap-3  px-3`}>
                    <li className=" flex flex-col items-center">
                        <FaLaptop/>
                        <p className="text-[10px]">MacBook Air</p>
                    </li>
                    <li className=" flex flex-col items-center">
                        <IoIosLaptop/>
                        <p className="text-[10px]">MacBook Pro</p>
                    </li>
                    <li className=" flex flex-col items-center">
                        <LuMonitor/>
                        <p className="text-[10px]">iMac</p>
                    </li>
                    <li className=" flex flex-col items-center">
                        <HiServer/>
                        <p className="text-[10px]">Mac mini</p>
                    </li>
                </motion.ul>
                <motion.ul 
                        variants={{
                            initial:{
                                x:300,
                                y:-65
                            },
                            animate:{
                                x:0,
                                y:-65,
                                transition:{
                                    duration:0.5
                                }
                            },
                            
                        }}

                        initial="initial" animate={`${!initial&&"animate"}`}
                    className={` grid grid-cols-4  justify-evenly gap-3 items-center `}>
                    <li className=" flex flex-col items-center">
                        <RiComputerLine/>
                        <p className="text-[10px]">MacBook Air</p>
                    </li>
                    <li className=" flex flex-col items-center">
                        <BsFillCpuFill/>
                        <p className="text-[10px]">MacBook Pro</p>
                    </li>
                    <li className=" flex flex-col items-center">
                        <PiComputerTower/>
                        <p className="text-[10px]">iMac</p>
                    </li>
                    <li className=" flex flex-col items-center">
                        <HiOutlineServer/>
                        <p className="text-[10px]">Mac mini</p>
                    </li>      
                </motion.ul>
            </main>
            <button onClick={handleNext} className={`${!initial?'hidden':''}`}>≻</button>
      </div>
    </React.Fragment>
  )
}

export default IconsHeader