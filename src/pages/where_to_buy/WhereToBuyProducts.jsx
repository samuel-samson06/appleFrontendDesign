import img1 from "../../images/mac_ipad_ipod_hero.png"

function WhereToBuyProducts() {
  return (
    <div className="px-5 flex flex-col gap-4 py-10 border-2 mx-4 rounded-lg bg-gray-100 ">
        <img src={img1} alt="mac_ipad_ipod_hero" className=" w-72" />
        <article className="">
            <p className=" text-2xl font-semibold">Apple Products</p>
            <p className=" text-sm py-4">Find an Apple Reseller near you.</p>
            <input type={"text"} placeholder="Address, City or Postcode" className=" px-2 py-1 mb-5 rounded-lg outline-none border-2" /><br />
            <select name="" className=" py-1 px-2 rounded-md">
                <option value="" >All products</option>
                <option value="">iPhone</option>
                <option value="">iPad</option>
                <option value="">Mac</option>
                <option value="">Accessories</option>
            </select><br />
            <button className=" bg-gray-300 font-semibold text-lg px-5 rounded-md py-1 mt-5">Go</button>
        </article>
    </div>
  )
}

export default WhereToBuyProducts