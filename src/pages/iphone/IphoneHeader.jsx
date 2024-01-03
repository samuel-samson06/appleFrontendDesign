import { motion } from "framer-motion"
import {FcIphone} from "react-icons/fc"
import {MdOutlinePhoneIphone} from "react-icons/md"
import { MdPhoneIphone } from "react-icons/md"

function IphoneHeader() {
  return (
    <div>
        <div>
        <motion.ul 
            variants={{
              initial:{
                x:400,
              },
              slideIn:{
                x:0,
                transition:{
                  duration:1,
                  type:'spring'
                }
              }
            }}
            initial="initial" animate="slideIn"
          className=" flex text-5xl justify-evenly items-center pt-2 pb-5">
            <li className=" flex flex-col items-center gap-3"><FcIphone/><span className=" text-[10px]">iPhone 15 pro</span></li>
            <li className=" flex flex-col items-center gap-3"><MdPhoneIphone/><span className=" text-[10px]">iPhone 15</span></li>
            <li className=" flex flex-col items-center gap-3"><MdOutlinePhoneIphone/><span className=" text-[10px]">iPhone 14</span></li>
            <li className=" flex flex-col items-center gap-3"><MdOutlinePhoneIphone/><span className=" text-[10px]">iPhone 12</span></li>
          </motion.ul>
    </div>
    </div>
  )
}

export default IphoneHeader