import appleVid from "../../images/large_2x.mp4"

function Video() {

  return (
    <div className=" mx-2 my-2">
        <video loop={true} autoPlay className=" rounded-lg">
          <source src={appleVid}  type="video/mp4" />
        </video>
    </div>
  )
}

export default Video

