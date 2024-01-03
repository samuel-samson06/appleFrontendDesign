import iPad1 from "../../images/image-grid-mac_2x.png"
import chip from "../../images/m2.jpeg"
import { FcIpad } from "react-icons/fc"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"



function MacSpecs() {

    const ref=useRef(null)
    const inView=useInView(ref,{once:true})

  return (
    <motion.div
    
    ref={ref}
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



    className=" pt-10 pb-5  bg-gray-100">
        <main className="  flex gap-5 flex-col ">
            <p className=" px-5  text-xl font-semibold">Explore the lineup.</p>
            <p className=" px-5  font-light text-blue-500 text-sm">Comapre all models &gt;</p>
            <ul className=" bg-white  mx-5 py-1.5  mt-4 mb-8 rounded-full flex justify-evenly">
               <li className=" text-base px-3 py-1 rounded-full  hover:bg-black hover:text-white transition-all ">Laptops</li>
               <li className=" text-base px-3 py-1 rounded-full  hover:bg-black hover:text-white transition-all ">Desktops</li>
               <li className=" text-base px-3 py-1 rounded-full  hover:bg-black hover:text-white transition-all ">Display</li> 
            </ul>
        </main>
        <div className=" overflow-y-auto">

        <div className=" w-[700px] mx-10  gap-1 grid grid-cols-3 ">
        <section className="  flex gap-3 flex-col   py-5">
                <img src={iPad1} alt="iPad" className=" w-40" />
                <p className=" text-lg font-semibold">iPad Pro</p>
                <p className=" text-[10px]  text-zinc-700">The ultimate iPad experience with <br /> the most advanced technolgy</p>
                <div className=" items-center flex gap-5">
                  <button className=" text-[10px] bg-blue-600 text-white px-2 w-fit  py-1 rounded-xl">Learn more</button>
                  <p className="  text-blue-500 text-[10px] text-center">Buy &gt;</p>
                </div>
                <hr />
                <p className=" font-semibold text-xl">18</p>
                <p  className=" text-[10px] text-zinc-700">Liquid Retina XDR display or <br /> Liquid retina display</p>
                <p className=" text-[10px] text-zinc-700">ProMotion Technology</p>
                <p className=" text-[10px] text-zinc-700">P3 wide color</p>
                <p className=" text-[10px] text-zinc-700">Antireflective coating</p>
                <div className="flex gap-1 flex-col ">
                    <img src={chip} alt="" className=" rounded-md w-12" />
                    <p>M2 chip</p>
                </div>
                <div className=" flex flex-col ">
                    <FcIpad className=" text-5xl"/>
                    <p className=" text-[10px] text-zinc-700">12MP ultra wide <br /> from camera</p>
                    <p className=" text-[10px] text-zinc-700">12MP ultra wide <br /> from camera</p>
                </div>
            </section>
       
        <section className=" flex gap-3 flex-col    py-5">
                <img src={iPad1} alt="iPad" className=" w-40" />
                <p className=" text-lg font-semibold">iPad Pro</p>
                <p className=" text-[10px] text-zinc-700">The ultimate iPad experience with <br /> the most advanced technolgy</p>
                <div className=" items-center flex gap-5">
                  <button className=" text-[10px] bg-blue-600 text-white px-2 w-fit  py-1 rounded-xl">Learn more</button>
                  <p className="  text-blue-500 text-[10px] text-center">Buy &gt;</p>
                </div>
                <hr />
                <p className=" font-semibold text-xl">18</p>
                <p  className=" text-[10px] text-zinc-700">Liquid Retina XDR display or <br /> Liquid retina display</p>
                <p className=" text-[10px] text-zinc-700">ProMotion Technology</p>
                <p className=" text-[10px] text-zinc-700">P3 wide color</p>
                <p className=" text-[10px] text-zinc-700">Antireflective coating</p>
                <div className="flex gap-1 flex-col ">
                    <img src={chip} alt="" className=" rounded-md w-12" />
                    <p>M2 chip</p>
                </div>
                <div className=" flex flex-col ">
                    <FcIpad className=" text-5xl"/>
                    <p className=" text-[10px] text-zinc-700">12MP ultra wide <br /> from camera</p>
                    <p className=" text-[10px] text-zinc-700">12MP ultra wide <br /> from camera</p>
                </div>
            </section>
        <section className=" flex gap-3 flex-col    py-5">
                <img src={iPad1} alt="iPad" className=" w-40" />
                <p className=" text-lg font-semibold">iPad Pro</p>
                <p className=" text-[10px] text-center text-zinc-700">The ultimate iPad experience with <br /> the most advanced technolgy</p>
                <div className=" items-center flex gap-5">
                  <button className=" text-[10px] bg-blue-600 text-white px-2 w-fit  py-1 rounded-xl">Learn more</button>
                  <p className="  text-blue-500 text-[10px] text-center">Buy &gt;</p>
                </div>
                <hr />
                <p className=" font-semibold text-xl">22</p>
                <p  className=" text-[10px] text-zinc-700">Liquid Retina XDR display or <br /> Liquid retina display</p>
                <p className=" text-[10px] text-zinc-700">ProMotion Technology</p>
                <p className=" text-[10px] text-zinc-700">P3 wide color</p>
                <p className=" text-[10px] text-zinc-700">Antireflective coating</p>
                <div className="flex gap-1 flex-col ">
                    <img src={chip} alt="" className=" rounded-md w-12" />
                    <p>M2 chip</p>
                </div>
                <div className=" flex flex-col ">
                    <FcIpad className=" text-5xl"/>
                    <p className="  text-[10px] text-zinc-700">12MP ultra wide <br /> from camera</p>
                    <p className="  text-[10px] text-zinc-700">12MP ultra wide <br /> from camera</p>
                </div>
            </section>
        </div>
        
        </div>
        <div className="px-2 flex flex-col gap-4 py-10  mx-4 mt-10 mb-10 rounded-2xl bg-gray-200 ">
        <img src={iPad1} alt="mac_ipad_ipod_hero" className=" w-72" />
        <article className="">
            <p className=" text-2xl font-semibold">Mac</p>
            <p>Some counterfeit and third party <br /> power adapters and batteries <br /> easy-to-use devices with <br /> innovative features that customers <br /> depend on, all while protecting <br /> their privacy and data. Customers <br /> should have access to safe, <br /> reliable, and secure repairs with <br /> </p>
            <p>Learn more about Apple&apos;s approach <br /> to expanding access to safe and <br />reliable repairs. <span className=" text-blue-600">View (PDF)</span> </p>
        </article>
    </div>
    </motion.div>
  )
}

export default MacSpecs