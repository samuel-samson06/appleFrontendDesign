import React from "react"
import macBook from "../../images/macbookPro.jpg"
import monitors from "../../images/macbookMonitor.jpeg"
import iphone15 from "../../images/iPhone15.jpeg"
import iPhonePro from "../../images/iPhone15pro.jpeg"
import ipad from "../../images/ipad.jpeg"
import tabs from "../../images/thirdIpad.jpeg"
import mac from "../../images/charger.jpg"

function Home() {
  return (
    <React.Fragment>
      <main className=" bg-gray-100 py-7 flex flex-col items-center">
        <section className=" gap-1 flex flex-col items-center">
          <h1 className=" text-2xl font-semibold">MacBook Pro</h1>
          <p className=" text-zinc-700 text-lg font-normal">Mind-blowing. Head-turning.</p>
          <a href="https://www.apple.com/ng/macbook-pro/" className=" text-blue-500 font-semibold pb-6">Learn more <span className=" font-bold">&gt;</span></a>
          <img loading={"lazy"} src={macBook} alt="Mac Book Pro" className=" w-full rounded-md " />
        </section>
        <p className=" bg-white w-full text-transparent h-5">m</p>
        <section className=" py-7 gap-1 flex flex-col items-center">
          <h1 className=" text-2xl font-semibold">iMac</h1>
          <p className=" text-zinc-700 text-lg font-normal">Packed with more juice.</p>
          <a href="https://www.apple.com/ng/macbook-pro/" className=" text-blue-500 font-semibold pb-6">Learn more <span className=" font-bold">&gt;</span></a>
          <img loading={"lazy"} src={monitors} alt="Mac Book Pro" className=" w-full rounded-md pb-6" />
        </section>
        <section className=" rounded-md bg-gradient-to-br from-black  to-slate-400 w-full pt-7 gap-1 flex flex-col items-center">
          <h1 className=" text-white text-2xl font-semibold">iPhone 15 Pro</h1>
          <p className=" text-white text- font-normal">Titanium. So Strong. So Light. So Pro</p>
          <a href="https://www.apple.com/ng/macbook-pro/" className=" text-blue-600 font-semibold pb-6">Learn more <span className=" font-bold">&gt;</span></a>
          <img loading={"lazy"} src={iphone15} alt="Mac Book Pro" className=" w-full rounded-md" />
        </section>
        <section className=" text-black w-full pt-10 gap-1 flex flex-col items-center">
          <h1 className=" text-2xl font-semibold">iPhone 15</h1>
          <p className=" text- font-normal">New camera. New design. Newphoria.</p>
          <a href="https://www.apple.com/ng/macbook-pro/" className=" text-blue-500 font-semibold pb-6">Learn more <span className=" font-bold">&gt;</span></a>
          <img loading={"lazy"} src={iPhonePro} alt="Mac Book Pro" className=" w-full rounded-md " />
        </section>
        <section className=" bg-white  text-black w-full pt-10 gap-1 flex flex-col items-center">
          <h1 className=" text-2xl font-semibold">iPad</h1>
          <p className=" text- font-normal">Lovable. Drawable. Magical.</p>
          <a href="https://www.apple.com/ng/macbook-pro/" className=" text-blue-500 font-semibold pb-6">Learn more <span className=" font-bold">&gt;</span></a>
          <img loading={"lazy"} src={ipad} alt="Mac Book Pro" className=" w-full rounded-md " />
        </section>
        <section className=" bg-black text-white w-full pt-10 gap-1 flex flex-col items-center">
          <h1 className=" text-2xl font-semibold">iPad Pro</h1>
          <p className=" text- font-normal">Supercharged by M2 chip</p>
          <a href="https://www.apple.com/ng/macbook-pro/" className=" text-blue-500 font-semibold pb-6">Learn more <span className=" font-bold">&gt;</span></a>
          <img loading={"lazy"} src={tabs} alt="Mac Book Pro" className=" w-full rounded-md" />
        </section>
        <section className=" bg-white text-black w-full pt-10 gap-1 flex flex-col items-center">
          <h1 className=" text-2xl font-semibold">Mac Studio</h1>
          <p className=" text- font-normal">Supercharged by <br /> M2 Max and M2 Ultra</p>
          <a href="https://www.apple.com/ng/macbook-pro/" className=" text-blue-500 font-semibold pb-6">Learn more <span className=" font-bold">&gt;</span></a>
          <img loading={"lazy"} src={mac} alt="Mac Book Pro" className=" w-full rounded-md mb-16" />
        </section>
        
      </main>
    </React.Fragment>
  )
}

export default Home