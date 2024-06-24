import { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-dimgray overflow-hidden flex flex-col items-start justify-start pt-3 pb-7 pr-5 pl-6 box-border gap-[63px] leading-[normal] tracking-[normal] text-left text-3xl text-floralwhite font-pixelify-sans">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[236px] box-border gap-[22px] max-w-full text-left text-3xl text-floralwhite font-pixelify-sans">
        <div className="w-[169px] flex flex-row items-start justify-start gap-[7px]">
          <div className="h-[37px] w-[37px] relative bg-[url('/public/ui-flat-select-01a1-5@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
              alt=""
              src="/ui-flat-select-01a1-5@2x.png"
            />
            <img
              className="absolute top-[6px] left-[7px] w-6 h-6 object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/cash-1@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <a className="[text-decoration:none] self-stretch relative tracking-[-0.79px] leading-[31px] text-[inherit]">
              0.00
            </a>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
          <div className="flex flex-row items-start justify-start z-[1]">
            <div className="h-[37px] w-[37px] relative">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                alt=""
                src="/ui-flat-button-small-press-02a1-1@2x.png"
              />
              <img
                className="absolute top-[3px] left-[6px] w-[25px] h-[25px] object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/chest01outlined-1@2x.png"
              />
            </div>
          </div>
          <a className="[text-decoration:none] flex-1 relative tracking-[-0.79px] leading-[31px] text-[inherit] inline-block min-w-[106px] z-[1]">
            connect wallet
          </a>
          <div className="flex flex-row items-start justify-start z-[1]">
            <div className="h-[37px] w-[37px] relative">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                alt=""
                src="/ui-flat-button-small-press-02a1-1@2x.png"
              />
              <img
                className="absolute top-[4.3px] left-[7.3px] w-[22.5px] h-[22.5px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/chest01outlined-1-1@2x.png"
              />
            </div>
          </div>
          <a className="[text-decoration:none] w-[125px] relative tracking-[-0.79px] leading-[31px] text-[inherit] inline-block shrink-0 z-[1]">
            treasures
          </a>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-35xl font-b">
          <img
            className="h-[473px] w-[437px] absolute !m-[0] bottom-[-284px] left-[-24px] object-cover"
            alt=""
            src="/group-62@2x.png"
          />
          <h1 className="m-0 flex-1 relative text-inherit tracking-[-1.35px] leading-[60px] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fffdf5,_#d7f8c7)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full z-[1]">
            <p className="m-0">{`Bet on `}</p>
            <p className="m-0">AI Story</p>
          </h1>
        </div>
      </section>
      <section className="w-[364px] flex flex-col items-start justify-start max-w-full text-left text-3xl text-floralwhite font-pixelify-sans">
        <div className="self-stretch h-[186px] relative max-w-full">
          <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start max-w-full h-full">
            <div className="h-[186px] flex-1 relative tracking-[-0.79px] leading-[31px] inline-block max-w-full">
              <p className="m-0 whitespace-pre-wrap">
                Make your choice, and the oracle will decide who is the selected
                warrior!
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">So warriors, are you ready to set sail?</p>
            </div>
            <img
              className="h-[27px] w-[27px] absolute !m-[0] top-[5px] right-[8px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/gear-1@2x.png"
            />
          </div>
          <img
            className="absolute top-[63px] left-[90px] w-8 h-8 object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/helmet03outlined-1@2x.png"
          />
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="h-[37px] w-[37px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              alt=""
              src="/ui-flat-button-small-press-02a1-1@2x.png"
            />
            <img
              className="absolute top-[3px] left-[6px] w-[25px] h-[25px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/chest01outlined-1-2@2x.png"
            />
          </div>
        </div>
      </section>
      <div className="w-[285px] flex flex-row items-start justify-start gap-[9px]">
        <div className="flex flex-row items-start justify-start">
          <div className="h-[37px] w-[37px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              alt=""
              src="/ui-flat-button-small-press-02a1-1@2x.png"
            />
            <img
              className="absolute top-[4.3px] left-[7.3px] w-[22.5px] h-[22.5px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/chest01outlined-1-3@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 relative tracking-[-0.79px] leading-[31px]">
          selected warriors
        </div>
      </div>
    </div>
  );
};

export default Home;
