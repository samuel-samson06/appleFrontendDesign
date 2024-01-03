import iphone from "../../images/image-grid-iphone_2x.png"
import ipad from "../../images/image-grid-ipad_2x.png"
import mac from "../../images/image-grid-mac_2x.png"
import music from "../../images/image-grid-music_2x.png"
import watch from "../../images/image-grid-watch-_2x.png"
import airpod from "../../images/image-grid-airpods_2x.png"
import tv from "../../images/image-grid-tv_2x.png"


function AppleSupportSection() {
  return (
    <div>
        <main className=" flex flex-col gap-10">
        <h1 className=" text-3xl text-center font-semibold">Apple Support</h1>
        <div className=" grid grid-cols-2 gap-7 items-center">
          <section className=" flex flex-col items-center gap-3 text-[15px]">
            <img className=" w-9" src={iphone} alt="iPhone" loading="lazy"/>
            <p>iPhone</p>
          </section>
          <section className=" flex flex-col items-center gap-3 text-[15px]">
            <img className=" w-24" src={mac} alt="Mac" loading="lazy"/>
            <p>Mac</p>
          </section>
          <section className=" flex flex-col items-center gap-3 text-[15px]">
            <img className=" w-20" src={ipad} alt="iPad" loading="lazy"/>
            <p>iPad</p>
          </section>
          <section className=" flex flex-col items-center gap-3 text-[15px]">
            <img className=" w-12" src={watch} alt="Music" loading="lazy"/>
            <p>Watch</p>
          </section>
          <section className=" flex flex-col items-center gap-3 text-[15px]">
            <img className=" w-20" src={airpod} alt="Music" loading="lazy"/>
            <p>AirPods</p>
          </section>
          <section className=" flex flex-col items-center gap-3 text-[15px]">
            <img className=" w-16" src={music} alt="Music" loading="lazy"/>
            <p>Music</p>
          </section>
          <section className=" flex flex-col items-center gap-3 text-[15px]">
            <img className=" w-16" src={tv} alt="Music" loading="lazy"/>
            <p>TV</p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default AppleSupportSection