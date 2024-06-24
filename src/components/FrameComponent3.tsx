import { FunctionComponent } from "react";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-[22px] box-border max-w-full text-left text-3xl text-floralwhite font-pixelify-sans ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[5px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-0 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
            <div className="w-[235px] flex flex-row items-start justify-start gap-[43px]">
              <img
                className="h-6 w-[23px] relative object-cover"
                alt=""
                src="/ui-flat-select-01a1-4@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
                <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
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
                    <div className="self-stretch relative tracking-[-0.79px] leading-[31px]">
                      0.10
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="h-[26px] w-[26px] relative object-cover"
              loading="lazy"
              alt=""
              src="/ui-flat-select-01a1-22@2x.png"
            />
          </div>
        </div>
        <div className="w-[366px] flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
            <div className="flex-1 relative tracking-[-0.79px] leading-[31px] inline-block max-w-full">
              Claim treasures on our profile
            </div>
          </div>
          <div className="self-stretch relative text-base tracking-[-0.79px] leading-[20px] z-[1]">
            Go to @BetAI profile to Claim Treasures
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
