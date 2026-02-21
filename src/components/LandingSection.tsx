import landing from "../assets/landing-section.jpg";
import watch from "../assets/watch.jpg";
import laptop from "../assets/landingLaptop.jpg";
import ipad from "../assets/ipad.jpg";
import watch2 from "../assets/landing-watch-2.jpg";
import airpod from "../assets/landing-airpod.jpg";
import trade from "../assets/trade-in.jpg";
import card from "../assets/card.jpg";
import Section from "./Section";
import Header from "./Header";
import iphone from "../assets/hearder-bg.jpg";

type LandingSectionProp = {
  appleLogo: string;
};

const LandingSection = ({ appleLogo }: LandingSectionProp) => {
  return (
    <>
      <Header
        img={iphone}
        title="iPhone"
        description="Say hello to the latest generation of iPhone"
        button1="Learn more"
        button2="Shop iPhone"
      />

      <Header
        img={landing}
        title="iPad"
        italic="Air"
        description="Now supercharged by the M3 chip"
        button1="Learn more"
        button2="Buy"
      />
{/* WATCH */}
      <Header 
        img={watch}
        bold="WATCH"
        title="SERIES 11"
        img2={appleLogo}
        description="The ultimate way to watch your health."
        button1="Learn more"
        button2="Buy"
      />

      {/* Wrap section */}
      {/* LAPTOP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-6">
        <div
          className="relative flex flex-col items-center justify-start text-white bg-cover bg-center w-full min-h-[600px]"
          style={{ backgroundImage: `url(${laptop})` }}
        >
          <div
            className="flex
        flex-col items-center mt-18 gap-5"
          >
            <h2 className="text-4xl font-bold">MacBook Pro 14"</h2>
            <p className="text-2xl">Supercharged by M5.</p>
            <div className="flex gap-8">
              <button className="rounded-xl bg-blue-500 text-white text-xl py-2 px-4 hover:bg-blue-400 cursor-pointer">
                Learn more
              </button>
              <button className="rounded-3xl border border-blue-500 py-2 px-5 text-xl text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer">
                Buy
              </button>
            </div>
          </div>
        </div>

        {/* IPAD */}
        {/* <div className="flex flex-wrap gap-6 min-h-screen text-center"> */}
        <div
          className="relative flex flex-col items-center justify-start text-white bg-cover bg-center w-full min-h-[600px]"
          style={{ backgroundImage: `url(${ipad})` }}
        >
          <div className="flex flex-col items-center mt-18 gap-6">
            <h2 className="text-4xl font-bold">iPad Pro</h2>
            <p className="text-2xl text-wrap">
              Advanced AI perfomance <br /> and game-changing capabilities.
            </p>
            <div className="flex gap-8">
              <button className="rounded-xl bg-blue-500 text-white text-xl py-2 px-4 hover:bg-blue-400 cursor-pointer">
                Learn more
              </button>
              <button className="rounded-3xl border border-white py-2 px-5 text-xl text-blue-500 hover:bg-white hover:text-black cursor-pointer">
                Buy
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* WATCH-2 */}
        {/* <div className="flex flex-wrap gap-6 min-h-screen text-center"> */}

        <div
          className="relative flex flex-col items-center justify-start text-center text-white bg-cover bg-center w-full min-h-[600px]"
          style={{ backgroundImage: `url(${watch2})` }}
        >
          <div className="flex flex-col items-center mt-18 gap-6">
            <div className="flex items-center gap-1">
              <img
                src={appleLogo}
                alt="Apple logo"
                className="w-5 h-5 apple-img"
              />

              <h2 className="text-5xl">
                <span className="font-bold">WATCH</span> ULTRA 3
              </h2>
            </div>
            <p className="text-3xl">Personal beast.</p>

            <div className="flex gap-8">
              <button className="rounded-xl bg-blue-500 text-white text-xl py-2 px-4 hover:bg-blue-400 cursor-pointer">
                Learn more
              </button>
              <button className="rounded-3xl border border-white py-2 px-5 text-xl text-blue-500 hover:bg-white hover:text-black cursor-pointer">
                Buy
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* AIRPOD */}
        <div
          className="relative flex flex-col items-center justify-start text-white bg-cover bg-center w-full min-h-[600px]"
          style={{ backgroundImage: `url(${airpod})` }}
        >
          <div className="flex flex-col items-center text-center mt-15 gap-5">
            <h2 className="text-5xl">AirPods Pro 3</h2>
            <p className="text-3xl">
              The world's best in-ear
              <br />
              Active Noise Cancellation.
            </p>
            <div className="flex gap-8">
              <button className="rounded-xl bg-blue-500 text-white text-xl py-2 px-4 hover:bg-blue-400 cursor-pointer">
                Learn more
              </button>
              <button className="rounded-3xl border border-white py-2 px-5 text-xl text-blue-500 hover:bg-white hover:text-black cursor-pointer">
                Buy
              </button>
            </div>
          </div>
        </div>

        {/* TRADE IN */}
        <div
          className="relative flex flex-col items-center text-white bg-cover bg-center w-full min-h-[600px]"
          style={{ backgroundImage: `url(${trade})` }}
        >
          <div className="flex flex-col gap-5 mt-18">
            <div className="flex items-center gap-1">
              <img src={appleLogo} alt="Apple logo" className="w-5 h-5" />
              <h2 className="text-5xl">Trade In</h2>
            </div>

            <p className="text-2xl">
              Get up to $180-$600.
              <br />
              in credit when you trade in
              <br />
              iPhone 13 or higher
            </p>
            <button className="rounded-xl bg-blue-500 text-white text-xl py-2 px-4 hover:bg-blue-400 cursor-pointer">
              Get your estimate
            </button>
          </div>
        </div>

        {/* CREDIT CARD */}

        <Section
          img={card}
          title="iPad Pro"
          description="Advanced AI perfomance nd game-changing capabilities."
          button1="Learn more"
          button2="Buy"
        />
      </div>
    </>
  );
};

export default LandingSection;
