import WhereToBuyIphone from "./WhereToBuyIphone"
import WhereToBuyProducts from "./WhereToBuyProducts"

function WhereToBuy() {
  return (
    <div >
      <p className=" font-semibold text-2xl pt-4 px-4">Where to buy</p>
      <div className=" flex flex-col gap-8 py-10">
        <WhereToBuyProducts/>
        <WhereToBuyIphone/>
      </div>
    </div>
  )
}

export default WhereToBuy