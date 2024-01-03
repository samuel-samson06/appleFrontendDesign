import products from "../../images/tile-feature-applecare-plus.image.large_2x.png"
import airtags from "../../images/airtag-1-pack-3-1619005829.jpeg"

function IphoneAccessories() {
  return (
    <div>
        <p className=" text-3xl font-semibold text-center">Featured accessories</p>
        <main className=" py-10">
            <p className=" text-2xl font-semibold text-center">Good Safe Products</p>
            <img src={products} alt="products py-5" />
        </main>
        <main className=" bg-gray-100 py-10 flex flex-col items-center gap-5">
            <p className=" font-semibold text-2xl text-center">AirTag</p>
            <p className=" text-center">Attach one to your keys. <br /> Put another in your backpack. <br /> If they&apos;re misplaced just use <br /> the Find My app.</p>
            <img src={airtags} alt="" />
        </main>
    </div>
  )
}

export default IphoneAccessories