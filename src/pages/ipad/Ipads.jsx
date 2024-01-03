import { FcIpad } from "react-icons/fc"
import {FaTabletAlt} from "react-icons/fa"
import { FaTablet } from "react-icons/fa"
import { FaTabletScreenButton } from "react-icons/fa6"
import ipad from "../../images/thirdIpad.jpeg"
import chip from "../../images/m2.jpeg"
import iPad2 from "../../images/ipadStacked.jpeg"
import { motion } from "framer-motion"


function Ipads() {
  return (
    <div>
        <section className=" text-white bg-black pt-5">
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
          className=" flex text-5xl justify-evenly items-center ">
            <li className=" flex flex-col items-center gap-3"><FaTabletAlt/><span className=" text-sm">iPad Pro</span></li>
            <li className=" flex flex-col items-center gap-3"><FaTabletScreenButton/><span className=" text-sm">iPad Air</span></li>
            <li className=" flex flex-col items-center gap-3"><FaTablet/><span className=" text-sm">iPad</span></li>
            <li className=" flex flex-col items-center gap-3"><FcIpad/><span className=" text-sm">iPad mini</span></li>
          </motion.ul>
          <main className=" flex flex-col items-center pt-10">
            <p className=" text-center text-3xl font-semibold">iPad Pro</p>
            <div className="text-center gap-2 flex items-center ">
              <p className=" font-semibold text-xl">Supercharged by</p>
              <img src={chip} alt="M2 chip" className=" w-12" />
            </div>
            <button type="button" className=" bg-blue-500 px-3 py-1 rounded-3xl">Find a Store</button>
            <p className=" text-blue-500 py-3">Learn more &gt;</p>
            <img src={ipad} alt="iPad" />
          </main>
        </section>
        <section>
          <main className=" flex flex-col items-center pt-10">
              <p className=" text-center text-3xl font-semibold">iPad</p>
              <div className="text-center gap-2 flex items-center ">
                <p className=" font-semibold text-xl">Lovable. Drawable. <br /> Magical.</p>
              </div>
              <button type="button" className=" text-white bg-blue-500 px-3 py-1 my-1 rounded-3xl">Find a Store</button>
              <p className="  text-blue-500 pt-3 pb-4">Learn more &gt;</p>
              <img src={iPad2} alt="iPad" className=" rounded-lg w-80"/>
            </main>
        </section>
    </div>
  )
}

export default Ipads