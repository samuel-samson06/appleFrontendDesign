import img1 from "../../images/iphone_buy_setup.png"
import mobile from "../../images/carrier_9mobile.png"
import glo from "../../images/carrier_glo.png"


function WhereToBuyIphone() {
  return (
    <div>
    <div className="px-2 flex flex-col gap-4 py-10 border-2 mx-4 rounded-lg bg-gray-100 ">
        <img src={img1} alt="mac_ipad_ipod_hero" className=" w-72" />
        <article className="">
            <p className=" text-2xl font-semibold">iPhone</p>
            <p className=" text-sm py-4">iPhone is available at Glo and 9mobile locations across Nigeria. <br /> Which means there&apos;s probably one near you.</p>
            <div className=" py-5 flex gap-2">
                <img src={glo} alt="glo" />
                <img src={mobile} alt="mobile" />
            </div>
            <p className=" text-blue-500">Find nearest Glo Store ▸</p>
            <p className=" text-blue-500">Find nearest 9mobile Store ▸</p>
        </article>
    </div>
    </div>
  )
}

export default WhereToBuyIphone