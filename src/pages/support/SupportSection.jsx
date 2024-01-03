import img1 from "../../images/tile-feature-AppleSupport-YouTube-promo.image.large_2x.png"
import img2 from "../../images/tile-feature-taa-fundamentals.image.large_2x.png"
import img3 from "../../images/tile-split-getsupport.image.large_2x.png"
import img4 from "../../images/tile-split-supportapp.image.large_2x.png"
import img5 from "../../images/tile-feature-applecare-plus.image.large_2x.png"
import img6 from "../../images/tile-feature-appletradein.image.large_2x.png"
import svg from "../../images/nav-icon-giftcard_2x.svg"



function SupportSection() {
  return (
    <div className=" flex flex-col gap-10 bg-zinc-100 py-10 ">
        <section className=" flex flex-col items-center gap-5 mx-7 px-2 pt-5 rounded-lg bg-white">
            <p className="text-center font-semibold text-3xl">Apple Support on <br /> Youtube</p>
            <p className=" text-zinc-700 text-center">Check out our official YouTube <br /> channel to help you get the most <br />from your Apple devices and <br />services</p>
            <p className=" text-center text-blue-600">Visit Apple Support on Youtube ↗</p>
            <img src={img1} alt="tile-feature-AppleSupport-YouTube-promo.image.large_2x" loading="lazy" className=" pt-5"/>
        </section>
        <section className=" flex flex-col items-center gap-5 mx-7 px- pt-5 rounded-lg bg-white">
            <p className="text-center font-semibold text-[28px]">Join free sessions at <br /> your Apple Store</p>
            <p className=" text-zinc-700 text-center">Learn about the latest features and<br />how to go further with your Apple <br />devices. </p>
            <p className=" text-center text-blue-600">Sign up &gt;</p>
            <img src={img2} alt="tile-feature-AppleSupport-YouTube-promo.image.large_2x" loading="lazy" className="rounded-lg pt-5"/>
        </section>
        <section className=" flex flex-col items-center gap-5 px-2 pt-5 rounded-lg bg-white">
            <p className="text-center font-semibold text-3xl">Get Support</p>
            <p className=" text-zinc-700 text-center">Give us a few details and we&apos;ll offer the<br />best solution. Connect by phone, chat,<br />email, and more</p>
            <button className=" text-center bg-black py-2 px-5 rounded-full text-white" >Start now</button>
            <img src={img3} alt="tile-feature-AppleSupport-YouTube-promo.image.large_2x" loading="lazy" className=" h-[100px]  pt-5"/>
        </section>
        <section className=" flex flex-col items-center gap-5 px-2 pt-5 rounded-lg bg-white">
            <p className="text-center font-semibold text-3xl">Apple Support app</p>
            <p className=" text-zinc-700 text-center">Get help for all of your Apple products in<br />one place, or connect with an expert</p>
            <p className=" text-center text-blue-600">Download ↗</p>
            <p className=" text-center text-blue-600"><span className=" underline">Get to know the Apple Support app</span> ↗</p>
            <img src={img4} alt="tile-feature-AppleSupport-YouTube-promo.image.large_2x" loading="lazy" className=" pt-5"/>
        </section>
        <section className=" flex flex-col items-center gap-5 mx-7 px-2 py-5 rounded-lg bg-white">
            <p className="text-center font-semibold text-3xl">My Support</p>
            <p className=" text-zinc-700 text-center">Get warranty information, check<br />your coverage status, or look up an<br />existing repair</p>
            <p className=" text-center text-blue-600">Sign in with your Apple ID &gt;</p>
        </section>
        <section className=" flex flex-col items-center gap-5 mx-7 px-2 pt-5 rounded-lg bg-white">
            <p className="text-center font-semibold text-3xl">Apple Care+</p>
            <p className=" text-zinc-700 text-center">Get unlimited repairs for accidental<br />damage protection, 24/7 priority<br />access to Apple experts, and more.</p>
            <p className=" text-center text-blue-600">Learn more &gt;</p>
            <img src={img5} alt="tile-feature-AppleSupport-YouTube-promo.image.large_2x" loading="lazy" className=" pt-5"/>
        </section>
        <section className=" flex flex-col items-center gap-5 mx-7 px-2 pt-5 rounded-lg bg-white">
            <p className="text-center font-semibold text-3xl">Apple Trade In</p>
            <p className=" text-zinc-700 text-center">Turn an eligble device into credit<br />towards a new one, or recycle it for<br />free.<br />services</p>
            <p className=" text-center text-blue-600">Learn more &gt;</p>
            <img src={img6} alt="tile-feature-AppleSupport-YouTube-promo.image.large_2x" loading="lazy" className=" pt-5"/>
        </section>
        <section className=" flex flex-col items-center text-center gap-5 mx-7 px-2 py-10 rounded-lg bg-white">
            <p className=" text-xl font-semibold">Safe and reliable repairs</p>
            <p>At Apple, every product we make is <br /> built to last. We design durable, <br /> easy-to-use devices with <br /> innovative features that customers <br /> depend on, all while protecting <br /> their privacy and data. Customers <br /> should have access to safe, <br /> reliable, and secure repairs with <br /> genuine Apple parts if they need <br /> them.</p>
            <p>Learn more about Apple&apos;s approach <br /> to expanding access to safe and <br />reliable repairs. <span className=" text-blue-600">View (PDF)</span> </p>
        </section>
        <section className=" flex flex-col items-center gap-5 mx-7 px-2 py-10 rounded-lg bg-white">
            <p className=" text-xl font-semibold">Beware of counterfeit parts</p>
            <p>Some counterfeit and third party <br /> power adapters and batteries <br /> easy-to-use devices with <br /> innovative features that customers <br /> depend on, all while protecting <br /> their privacy and data. Customers <br /> should have access to safe, <br /> reliable, and secure repairs with <br /> genuine Apple parts if they need <br /> them.</p>
            <p>Learn more about Apple&apos;s approach <br /> to expanding access to safe and <br />reliable repairs. <span className=" text-blue-600">View (PDF)</span> </p>
        </section>
        <section className=" flex flex-col   gap-5 mx-7 px-10 py-5 rounded-lg bg-white">
            <img src={svg} alt="" className="  w-24"/>
            <p className=" text-zinc-700 ">Be aware of scams involving Apple<br />Gift Cards, App Store & iTunes Gift<br />Cards, and Apple Store Gift Cards.</p>
            <p className="  text-blue-600">Learn more&gt;</p>
        </section>
    </div>
  )
}

export default SupportSection