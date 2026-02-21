import React from 'react'


type HeaderProp = {
  title: string
  description: string
  button1: string
  button2: string
  img: string
  italic:string
  bold: string
  img2: string
}

const Header = ( {title, description, button1, button2, img, italic, bold, img2}: HeaderProp ) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center gap-5 min-h-screen text-center text-white bg-cover bg-center mt-8"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h2 className="text-8xl font-bold tracking-tight">
        <span className="font-bold">{bold}</span> {title} <i className="text-blue-200 font-cursive">{italic}</i>
       
      </h2>

      <div className="flex items-center gap-1">
        <img src={img2} alt="" className="w-5 h-5" />
        <h3 className="text-4xl">
          {description}
        </h3>
      </div>

      <div className="flex gap-3">
        <button className="bg-blue-500 text-xl py-2 px-4 rounded-xl text-white hover:bg-blue-400">
          {button1}
        </button>

        <button className="border border-white text-xl py-2 px-4 rounded-xl hover:bg-white hover:text-black">
          {button2}
        </button>
      </div>
    </div>
  )
}

export default Header
