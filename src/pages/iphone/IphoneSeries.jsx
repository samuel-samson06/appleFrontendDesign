import iPhone from "../../images/iPhone15pro.jpeg"
import iphone1 from "../../images/iPhoneCamera-removebg-preview.png"
import iphones2 from "../../images/banner-1.jpg"
function IPhoneSeries() {
  return (
    <div>
        <main className=" mb-5 pt-10 bg-gradient-to-r text-center from-gray-200 via-gray-100 to-gray-200">
            <div className=" flex flex-col gap-3 items-center py-3">
                <p className=" text-[15px] font-medium text-yellow-500">New</p>
                <p className=" text-lg">iPhone 15 Pro</p>
                <p className=" text-5xl font-semibold text-zinc-700 drop-shadow-2xl">Titanium</p>
                <p className=" text-zinc-600">Check back later for availability</p>
                <button className=" bg-blue-500 px-2 py-1 outline-none text-white rounded-full">Find a Store</button>
                <p className=" text-blue-500">Learn more &gt;</p>
            </div>
            <div>
                <img src={iPhone} alt="iphone" />
            </div>
        </main>
        <section className=" bg-white">
            <div className=" flex flex-col gap-3 items-center py-3">
                    <p className=" text-[15px] font-medium text-yellow-500">New</p>
                    <p className=" text-lg">iPhone 15</p>
                    <p className=" text-4xl font-semibold text-zinc-700 drop-shadow-2xl">Newphoria</p>
                    <p className=" text-zinc-600">Check back later for availability</p>
                    <button className=" bg-blue-500 px-2 py-1 outline-none text-white rounded-full">Find a Store</button>
                    <p className=" text-blue-500">Learn more &gt;</p>
            </div>
            <div>
                <img src={iphone1} alt="iphone"  className=" w-screen py-10"/>
            </div>
        </section>
        <section>
            <div className=" flex flex-col gap-4 items-center py-3">
                        <p className=" text-lg">iPhone</p>
                        <p className=" bg-gradient-to-r from-blue-800 text-transparent bg-clip-text via-blue-700 to-blue-500 text-center text-3xl font-semibold ">Love the power. <br />Love the price.</p>
                        <button className=" bg-blue-500 px-2 py-1 outline-none text-white rounded-full">Find a Store</button>
                        <p className=" text-blue-500">Learn more &gt;</p>
                        <br />
            </div>
            <div>
                <img src={iphones2} alt="iphone" />
            </div>
        </section>
    </div>
  )
}

export default IPhoneSeries