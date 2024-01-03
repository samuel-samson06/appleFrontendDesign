import billing from "../../images/tile-topic-billing_2x.svg"
import repair from "../../images/tile-topic-repair_2x.svg"
import password from "../../images/tile-topic-password_2x.svg"


function AppleExtras() {
  return (
    <div className=" flex flex-col gap-5 mt-12 mb-10">
        <section className=" flex flex-col items-center bg-gray-100 text-blue-600 mx-6 rounded-lg shadow-md py-5 ">
            <img src={password} className=" w-20" alt="" />
            <p>Forgot Apple ID or Password</p>
        </section>
        <section className=" flex flex-col items-center bg-gray-100 text-blue-600 mx-6 rounded-lg shadow-md py-5 ">
            <img src={repair} className=" w-20" alt="" />
            <p>Apple Repair</p>
        </section>
        <section className=" flex flex-col items-center bg-gray-100 text-blue-600 mx-6 rounded-lg shadow-md py-5 ">
            <img src={billing}  className=" w-20"alt=""  />
            <p>Billing and Subscriptions</p>
        </section>
    </div>
  )
}

export default AppleExtras