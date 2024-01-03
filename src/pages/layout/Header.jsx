import React, { useContext } from "react"
import {FaApple} from "react-icons/fa6"
import {motion} from "framer-motion"
import { Context } from "../../context/Context"
import { NavLink } from "react-router-dom"

function Header() {
  const{navigationTrigger,setNavigationTrigger}=useContext(Context)

  const handleNavigation=()=>{
    setNavigationTrigger(!navigationTrigger)
  }
  return (
    <React.Fragment>
      <nav className=" py-4 px-4 items-center bg-zinc-500 flex justify-between">
        <NavLink to={"/"}>
          <FaApple className=" text-3xl text-gray-200"/>
        </NavLink>
        <div onClick={handleNavigation} className=" z-50 flex gap-2 flex-col cursor-pointer">
          <motion.span 
          initial={{
            rotate:"0deg",
            y:0,
          }}
          animate={{
            rotate:navigationTrigger?"45deg":'0deg',
            y:navigationTrigger?6:0,
          }}
          transition={{
            duration:"0.01",
            ease:"easeIn"
          }} 
          className={`transition-all w-5 h-[2px] bg-gray-200`}></motion.span>
          <motion.span initial={{rotate:"0deg",y:0,}}
          animate={{
            rotate:navigationTrigger?"-45deg":"0deg",
            y:navigationTrigger?-3:0,
          }}
          transition={{
            duration:"0.01",
            ease:"easeIn"
          }}
           className={`transition-all w-5 h-[2px] bg-gray-200`}></motion.span>
        </div>
      </nav>
      <motion.div className={` font-[helvetica] bg-zinc-700 fixed top-0 w-full h-screen`}
        variants={{
          initial:{
            y:-800,
            opacity:0,
          },
          final:{
            opacity:1,
            y:0,
            transition:{
              duration:0.5
            }
          },
          finalRemoved:{
            y:-800,
            opacity:0,
            transition:{
              duration:0.7
            }
          }
        }}
        initial='initial'
        animate={`${navigationTrigger?'final':'finalRemoved'}`}
      >
        <motion.ul 
        variants={{
          hidden:{opacity:0},
          show:{
            opacity:1,
            transition:{
              staggerChildren:0.2
            }
          }
        }}
        initial="hidden" animate={`${navigationTrigger&&"show"}`} className={` flex flex-col text-zinc-100 text-2xl px-10 gap-4 font-bold `}>
          <br />
          <motion.li variants={{hidden:{opacity:0},show:{opacity:1}}}>
            <NavLink to={"/mac"} onClick={handleNavigation}>Mac</NavLink>
          </motion.li>
          <motion.li variants={{hidden:{opacity:0},show:{opacity:1}}}>
            <NavLink to={"/ipad"} onClick={handleNavigation}>iPad</NavLink>
          </motion.li>
          <motion.li variants={{hidden:{opacity:0},show:{opacity:1}}}>
            <NavLink to={"/iphone"} onClick={handleNavigation}>iPhone</NavLink>
          </motion.li>
          <motion.li variants={{hidden:{opacity:0},show:{opacity:1}}}>
            <NavLink to={"/support"} onClick={handleNavigation}>Support</NavLink>
          </motion.li>
          <motion.li variants={{hidden:{opacity:0},show:{opacity:1}}}>
            <NavLink to={"/buy"} onClick={handleNavigation}>Where to Buy</NavLink>
          </motion.li>
        </motion.ul >
      </motion.div>
    </React.Fragment>
  )
}

export default Header