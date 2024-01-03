import Video from "./Video"
import { motion } from "framer-motion"

function Main() {
  return (
    <div>
        <main className=" flex flex-col gap-5 mb-10">
            <motion.div
              variants={{ 
                initial:{
                  y:100,
                  opacity:0,
                },
                final:{
                  y:0,
                  opacity:1,
                  transition:{
                    staggerChildren:0.5
                  }  
                }
              }}
              initial="initial" animate="final"
            className=" flex flex-col gap-4 px-5">
                <motion.p variants={{initial:{opacity:0},final:{opacity:1}}} className=" text-3xl font-semibold">Mac</motion.p>
                <motion.p variants={{initial:{opacity:0},final:{opacity:1}}} className=" font-semibold">If you can dream it, <br />Mac can do it</motion.p>
            </motion.div>
            <Video/>
        </main>
    </div>
  )
}

export default Main