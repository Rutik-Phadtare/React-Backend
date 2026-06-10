import Leftcontent from "./Leftcontent"
import Rightcontent from "./Rightcontent"

export const Middle = () => {
  return (
    <div className=" flex p-0.5 gap-0.5 h-140">
        <Leftcontent />
        <Rightcontent />
    </div>
  )
}

export default Middle