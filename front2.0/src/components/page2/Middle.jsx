import Card from "./Card"

const Middle = (props) => {
  return (
    <div className="flex p-4 pt-50 pb-35 gap-7  h-max-fit justify-center flex-wrap">
      {/* Loop through the array of images */}
      {props.imag && props.imag.map((image, index) => (
        <Card key={index} sr={image.sr} />
      ))}
    </div>
  )
}

export default Middle