import Collage from "../../images/Collage.png"
import AppleExtras from "./AppleExtras"
import AppleSupportSection from "./AppleSupportSection"
import SupportSection from "./SupportSection"


function Support() {
  return (
    <div>
      <section className=" pb-10">
        <img src={Collage} alt="Apple Inc." loading="lazy" />
      </section>
      <AppleSupportSection/>
      <AppleExtras/>
      <section className=" flex  flex-col items-center px-5">
        <p className=" text-center text-2xl font-semibold">Search for more topics</p>
        <input type="text" className=" w-full  border-2 my-4 rounded-md py-2 px-2 outline-none p" placeholder="Search Support"/>
      </section>
      <SupportSection/>
    </div>
  )
}

export default Support