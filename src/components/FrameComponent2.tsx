import { FunctionComponent, useCallback } from "react";

export type FrameComponent2Type = {
  className?: string;

  /** Action props */
  onGroupContainerClick?: () => void;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  onGroupContainerClick,
}) => {
  const onGroupContainerClick1 = useCallback(() => {
    // Please sync "selected_details" to the project
  }, []);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[22px] box-border max-w-full text-left text-sm text-black font-b ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-start gap-[26px] max-w-full mq339:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[129px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div
              className="self-stretch flex flex-row items-start justify-end pt-[19px] px-6 pb-[7.7px] bg-[url('/public/ui-flat-banner-01-upward-1@2x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
              onClick={onGroupContainerClick}
            >
              <img
                className="h-[66px] w-[198px] relative object-cover hidden"
                alt=""
                src="/ui-flat-banner-01-upward-1@2x.png"
              />
              <div className="h-[39.3px] w-[132px] relative leading-[28px] inline-block shrink-0 z-[1]">
                Chapter1-1:
              </div>
            </div>
            <div className="w-[189px] flex flex-row items-start justify-start gap-[5px] text-xl text-floralwhite font-pixelify-sans">
              <div className="h-[37px] w-[37px] relative bg-[url('/public/ui-flat-select-01a1-5@2x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                  alt=""
                  src="/ui-flat-select-01a1-5@2x.png"
                />
                <img
                  className="absolute top-[6px] left-[7px] w-6 h-6 object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/helmet03outlined-11@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="self-stretch relative leading-[28px]">
                  0x3422...432
                </div>
              </div>
            </div>
          </div>
          <div className="w-32 flex flex-row items-start justify-start gap-[5px] text-xl text-floralwhite font-pixelify-sans">
            <div className="h-[37px] w-[37px] relative bg-[url('/public/ui-flat-select-01a1-5@2x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                alt=""
                src="/ui-flat-select-01a1-5@2x.png"
              />
              <img
                className="absolute top-[7px] left-[7px] w-6 h-6 object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/pouchredcoinsgoldoutlined-11@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="self-stretch relative leading-[28px]">
                0.23ETH
              </div>
            </div>
          </div>
        </div>
        <div className="w-[142.4px] flex flex-row items-start justify-start min-w-[142.4px] mq339:flex-1">
          <div className="h-[146px] flex-1 relative">
            <div className="absolute top-[0px] left-[0px] w-full h-full">
              <img
                className="absolute w-[calc(100%_-_11.3px)] top-[7.7px] right-[5.7px] left-[5.6px] max-w-full overflow-hidden h-[131.1px] object-cover"
                alt=""
                src="/ui-flat-frame-02-standard-1@2x.png"
              />
              <img
                className="absolute top-[133.2px] left-[130.1px] w-[12.3px] h-[12.8px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/ui-flat-select-01a1-11@2x.png"
              />
              <img
                className="absolute top-[133.7px] left-[0px] w-[11.8px] h-[12.3px] object-contain z-[1]"
                alt=""
                src="/ui-flat-select-01a1-3@2x.png"
              />
              <img
                className="absolute top-[0px] left-[0px] w-[11.8px] h-[12.3px] object-contain z-[1]"
                alt=""
                src="/ui-flat-select-01a1-3@2x.png"
              />
              <img
                className="absolute top-[0px] left-[129.1px] w-[13.3px] h-[13.3px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/ui-flat-select-01a1-21@2x.png"
              />
            </div>
            <img
              className="absolute w-[calc(100%_-_20px)] top-[11.8px] right-[10.3px] left-[9.7px] max-w-full overflow-hidden h-[122.9px] object-cover z-[2]"
              alt=""
              src="/image-36@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
