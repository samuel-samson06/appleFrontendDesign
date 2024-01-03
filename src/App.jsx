import { useState } from "react"
import AppleSiteApp from "./AppleSiteApp"
import {Context} from "./context/Context"

function App() {
  const [navigationTrigger,setNavigationTrigger] = useState(false)

  const value={navigationTrigger,setNavigationTrigger}
  return (
    <Context.Provider value={value}>
      <AppleSiteApp/>
    </ Context.Provider>
  )
}

export default App