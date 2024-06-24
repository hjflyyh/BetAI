import { FunctionComponent } from "react";

export type BetOptionsContentType = {
  className?: string;
};

const BetOptionsContent: FunctionComponent<BetOptionsContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[11px] text-left text-3xl text-floralwhite font-pixelify-sans ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
        <div className="h-[37px] w-[37px] relative">
          <img
            className="absolute top-[6px] left-[6px] w-[26px] h-[26px] object-contain"
            loading="lazy"
            alt=""
            src="/coin-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
            alt=""
            src="/ui-flat-select-01a1-5@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.79px] leading-[31px] font-normal font-inherit">
            price:
          </h3>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
        <div className="h-[37px] w-[37px] relative">
          <img
            className="absolute top-[6px] left-[6px] w-[25px] h-[25px] object-contain"
            loading="lazy"
            alt=""
            src="/coin2-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
            alt=""
            src="/ui-flat-select-01a1-5@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.79px] leading-[31px] font-normal font-inherit">
            multiplier:
          </h3>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
        <div className="h-[37px] w-[37px] relative">
          <img
            className="absolute top-[7px] left-[6px] w-6 h-6 object-contain"
            loading="lazy"
            alt=""
            src="/pouchredcoinsgoldoutlined-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
            alt=""
            src="/ui-flat-select-01a1-5@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.79px] leading-[31px] font-normal font-inherit">
            total:
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BetOptionsContent;
