import React from 'react'

type NavbarProps = {
  appleLogo: string;
  search: string;
  bag:string
}

const Navbar = ({ appleLogo, search, bag }: NavbarProps) => {
  return (
    <div className='flex justify-around py-8 px-4 font-semibold text-lg'>
      <img src={appleLogo} alt=""  className='w-5 h-5'/>
      <p>Store</p>
      <p>Mac</p>
      <p>iPad</p>
      <p>iPhone</p>
      <p>Watch</p>
      <p>Vision</p>
      <p>AirPods</p>
      <p>Tv & Home</p>
      <p>Entertainment</p>
      <p>Accessories</p>
      <p>Support</p>
      <img src={search} alt="search icon" className='w-5 h-5'/>
      <img src={bag} alt="search icon" className='w-5 h-5'/>

    </div>
  )
}

export default Navbar
