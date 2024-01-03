import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/layout/Layout"
import Home from "./pages/home/Home"
import Ipad from "./pages/ipad/Ipad"
import Iphone from "./pages/iphone/Iphone"
import Mac from "./pages/mac/Mac"
import Support from "./pages/support/Support"
import WhereToBuy from "./pages/where_to_buy/WhereToBuy"


function AppleSiteApp() {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/ipad" element={<Ipad/>}/>
          <Route path="/iphone" element={<Iphone/>}/>
          <Route path="/mac" element={<Mac/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/buy" element={<WhereToBuy/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppleSiteApp