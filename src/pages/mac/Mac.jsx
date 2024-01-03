import React from "react"
import IconsHeader from "./IconsHeader"
import Main from "./Main"
import SpecsBackgroundImages from "./SpecsBackgroundImages"
import MacSpecs from "./MacSpecs"

function Mac() {
  return (
    <React.Fragment>
      <div className=" flex flex-col gap-16">
        <IconsHeader/>
        <div>
          <Main/>
        </div> 
        <div className=" my-5">
          <SpecsBackgroundImages/>
        </div>
        <div>
          <MacSpecs/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Mac