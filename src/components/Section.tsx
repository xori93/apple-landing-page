type SectionProp = {
  title: string
  description: string
  button1: string
  button2: string
  img: string
}
const Section = ({title, description, button1, button2, img}: SectionProp) => {
  return (
    <div>
      <div className="relative flex flex-col items-center text-center text-white bg-cover bg-center w-full min-h-[600px]" style={{backgroundImage: `url(${img})`}}>
          <div className="flex flex-col items-center gap-5 mt-18 text-center">
          <h2 className="text-5xl">{title}</h2>
          <p className="text-2xl">{description}</p>
          <div className="flex gap-8">
            <button className="rounded-xl bg-blue-500 text-white text-xl py-2 px-4 hover:bg-blue-400 cursor-pointer">
              {button1}
            </button>
            <button className="rounded-3xl border border-white py-2 px-5 text-xl text-blue-500 hover:bg-white hover:text-black cursor-pointer">
              {button2}
            </button>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Section