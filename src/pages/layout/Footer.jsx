import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <div className=" text-zinc-700 bg-zinc-100 py-2 px-4 flex flex-col gap-3 font-normal">
      <section className=" border-b-2 py-3 border-gray-300">
        <details className=" flex flex-col">
          <summary>Explore</summary>
          <NavLink className={` px-5 py-1 text-zinc-700 text-sm`}>Mac</NavLink>
          <NavLink className={` px-5 py-1 text-zinc-700 text-sm`}>iPad</NavLink>
          <NavLink className={` px-5 py-1 text-zinc-700 text-sm`}>iPhone</NavLink>
        </details>
      </section>

      <section className=" border-b-2 py-3 border-gray-300">
        <details className=" flex flex-col">
          <summary>Account</summary>
          <a href="http://" className={`px-5 py-1 text-zinc-700 text-sm`}>Manage Your Apple ID</a>
          <a href="http://" className={`px-5 py-1 text-zinc-700 text-sm`}>iCloud.com</a>
        </details>

      </section>
      
      <section className=" border-b-2 py-3 border-gray-300">
        <details className=" flex flex-col">
          <summary>Apple Values</summary>
          <a href="http://" className="px-5 text-zinc-700 py-1 text-sm">Privacy</a>
        </details>

      </section>
      
      <section className=" border-b-2 py-3 border-gray-300">
        <details className=" flex flex-col">
          <summary>About Apple</summary>
          <a href="http://" className={`px-5 py-1 text-zinc-700 text-sm`}>Newsroom</a>
          <a href="http://" className={`px-5 py-1 text-zinc-700 text-sm`}>Apple Leadership</a>
          <a href="http://" className={`px-5 py-1 text-zinc-700 text-sm`}>Career Opportunities</a>
          <a href="http://" className={`px-5 py-1 text-zinc-700 text-sm`}>Investors</a>
          <a href="http://" className={`px-5 py-1 text-zinc-700 text-sm`}>Ethics & Compliance</a>
        </details>

      </section>
      <section className={` text-sm flex flex-col gap-3 py-4`}>
        <p><span className=" text-blue-600 underline">Find a retailer</span> near you.</p>
        <p>Nigeria</p>
        <aside>
          <p className=" font-light">Copyright &copy; 2023 Apple Inc. All rights reserved</p>
          <p>Terms of Use | SiteMap</p>
        </aside>
      </section>
    
    </div>
  )
}

export default Footer