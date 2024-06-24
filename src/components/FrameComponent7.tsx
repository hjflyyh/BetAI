import { FunctionComponent } from "react";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full text-left text-35xl font-b ${className}`}
    >
      <div className="w-[37px] h-[37px] relative bg-[url('/public/ui-flat-select-01a1-5@2x.png')] bg-cover bg-no-repeat bg-[top]">
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
      <div className="w-[254px] flex flex-row items-start justify-between gap-[20px]">
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
        <div className="flex flex-row items-start justify-start z-[1]">
          <div className="h-[37px] w-[37px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              alt=""
              src="/ui-flat-button-small-press-02a1-1@2x.png"
            />
            <img
              className="absolute top-[4.3px] left-[7.3px] w-[22.5px] h-[22.5px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/chest01outlined-1-11@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
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
  );
};

export default FrameComponent7;
