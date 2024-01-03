import IphoneAccessories from "./IphoneAccessories"
import IphoneHeader from "./IphoneHeader"
import IphoneSpecs from "./IphoneSpecs"
import IPhoneSeries from "./IphoneSeries"

function Iphone() {
  return (
    <div className=" flex flex-col gap-10">
      <IphoneHeader/>
      <IPhoneSeries/>
      <IphoneSpecs/>
      <IphoneAccessories/>
      <ul className=" list-decimal text-zinc-700 pb-16 text-[10px] flex flex-col gap-3 mx-5 px-2">
        <li>
          Apple Footer The display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.42 inches (iPhone 13 mini, iPhone 12 mini), 5.85 inches (iPhone 11 Pro, iPhone XS, iPhone X), 6.06 inches (iPhone 14, iPhone 13 Pro, iPhone 13, iPhone 12 Pro, iPhone 12, iPhone 11, iPhone XR), 6.12 inches (iPhone 14 Pro, iPhone 15, iPhone 15 Pro), 6.46 inches (iPhone 11 Pro Max, iPhone XS Max), 6.68 inches (iPhone 14 Plus, iPhone 13 Pro Max, iPhone 12 Pro Max), or 6.69 inches (iPhone 14 Pro Max, iPhone 15 Plus, iPhone 15 Pro Max) diagonally. Actual viewable area is less.
        </li>
        <li>
          iPhone 14, iPhone 14 Pro, iPhone 15 and iPhone 15 Pro can detect a severe car crash and call for help. Requires a cellular connection or Wi‑Fi calling.
        </li>
        <li>
          Battery life claim refers to larger models. All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced. Battery life and charge cycles vary by use and settings. See apple.com/ng/batteries and apple.com/iphone/battery.html for more information.
        </li>
        <li>
          USB 3 cable with 10Gb/s speed required.
        </li>
        <li>
          All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced. Battery life and charge cycles vary by use and settings. See apple.com/ng/batteries and apple.com/iphone/battery.html for more information.  
        </li> 
      </ul>
    </div>
  )
}

export default Iphone


