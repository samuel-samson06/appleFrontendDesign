import { motion, useInView } from "framer-motion"
import React, { useContext, useRef } from "react"
import { Context } from "../../context/Context"


function SpecsBackgroundImages() {
    const {navigationTrigger}=useContext(Context);
    const ref=useRef(null)
    const inView=useInView(ref,{once:true})

  return (
    <React.Fragment>
        <motion.p ref={ref}
         variants={{
             initial:{
                 y:100,
                 opacity:0
             },
             View:{
                y:0,
                opacity:1,
                transition:{
                    duration:1
                }
             }
         }}
         initial="initial" whileInView={!inView&&"View"}
        className={`${navigationTrigger?'-z-50':'z-50'} text-2xl font-semibold  px-5`}>Get to know mac</motion.p>
    <motion.div ref={ref}
         variants={{
             initial:{
                 y:200,
                 opacity:0
             },
             View:{
                y:0,
                opacity:1,
                transition:{
                    duration:1
                }
             }
         }}
         initial="initial" whileInView={!inView&&"View"} className={` relative ${navigationTrigger?'-z-50':'z-50'} overflow-y-auto px-5 py-6`}>
        <div className=" grid grid-flow-col gap-5 w-[500px]">
            
            <section className=" bg-[url('images/mac_ease__bvgkz2zdltxy_large.jpg')] bg-cover rounded-xl px-2  text-white text-xl font-semibold py-3 w-[200px] h-[400px] ">
                <p className=" text-sm font-normal">Getting Started</p>
                <p>Easy to use. Easy <br /> to love.</p>
            </section>
            <section className=" bg-[url('images/mac_performance__dh5hyac1zf8m_large.jpg')] bg-cover rounded-xl px-2 text-white text-xl font-semibold  py-3 w-[200px] h-[400px] ">
                <p className=" text-sm font-normal">Getting Started</p>
                <p>Easy to use. Easy <br /> to love.</p>
            </section>
            <section className=" text-black font-semibold bg-[url('images/mac_iphone__gh1tblkt6bqm_large.jpg')] bg-cover rounded-xl px-2 py-3 w-[200px] h-[400px] ">
                <p className=" text-sm font-normal">Getting Started</p>
                <p>Easy to use. Easy <br /> to love.</p>
            </section>
            <section className=" text-black font-semibold bg-[url('images/mac_compatibility__cu59oukz81ci_large.jpg')] bg-cover rounded-xl px-2 py-3 w-[200px] h-[400px] ">
                <p className=" text-sm font-normal">Getting Started</p>
                <p>Easy to use. Easy <br /> to love.</p>
            </section>
            <section className=" bg-[url('images/mac_security__gfwda10khdym_large.jpg')] bg-cover rounded-xl px-2 text-white text-xl font-semibold py-3 w-[200px] h-[400px] ">
                <p className=" text-sm font-normal">Getting Started</p>
                <p>Easy to use. Easy <br /> to love.</p>
            </section>
            <section className=" text-black font-semibold bg-[url('images/mac_durability__epiwcuk7zkeq_large.jpg')] bg-cover rounded-xl px-2 py-3 w-[200px] h-[400px] ">
                <p className=" text-sm font-normal">Getting Started</p>
                <p>Easy to use. Easy <br /> to love.</p>
            </section>
            <section className=" text-black font-semibold bg-[url('images/mac_values__c9gck9qi4kia_large.jpg')] bg-cover rounded-xl px-2 py-3 w-[200px] h-[400px] ">
                <p className=" text-sm font-normal">Getting Started</p>
                <p>Easy to use. Easy <br /> to love.</p>
            </section>
        </div>
    </motion.div>
    </React.Fragment>
  )
}

export default SpecsBackgroundImages