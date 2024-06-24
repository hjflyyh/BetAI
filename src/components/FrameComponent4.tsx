import { FunctionComponent } from "react";
import FrameComponent6 from "./FrameComponent6";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-[22px] box-border max-w-full text-left text-3xl text-floralwhite font-pixelify-sans ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between py-0 pr-1 pl-0 gap-[20px]">
          <div className="w-[235px] flex flex-row items-start justify-start gap-[43px]">
            <div className="flex flex-row items-start justify-start relative">
              <img
                className="h-6 w-[23px] relative object-cover"
                alt=""
                src="/ui-flat-select-01a1-4@2x.png"
              />
              <div className="h-[37px] w-[37px] absolute !m-[0] right-[-30px] bottom-[-36px] z-[1]">
                <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start w-full h-full">
                  <img
                    className="h-[37px] w-[37px] relative object-cover"
                    alt=""
                    src="/group-53@2x.png"
                  />
                </div>
                <img
                  className="absolute top-[0px] left-[2px] w-[31px] h-[31px] object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-51@2x.png"
                />
              </div>
            </div>
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
                    0.15
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
        <FrameComponent6
          tSubtitle="Newbie Treasures"
          tSubtitle1="Complete Newbie Treasures first to see other Treaseures"
          propPadding="unset"
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
