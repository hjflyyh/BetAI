import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onArrowLeftGreen1IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start py-0 pr-[22px] pl-0 box-border gap-[12px] max-w-full text-left text-3xl text-floralwhite font-pixelify-sans ${className}`}
    >
      <div className="w-[213px] flex flex-row items-start justify-start pt-0 px-[22px] pb-2.5 box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-[7px]">
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
              src="/cash-11@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <a className="[text-decoration:none] self-stretch relative tracking-[-0.79px] leading-[31px] text-[inherit]">
              0.00
            </a>
          </div>
        </div>
      </div>
      <header className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[22px] box-border max-w-full text-left text-3xl text-floralwhite font-pixelify-sans">
        <div className="flex-1 flex flex-row items-start justify-start gap-[8px] max-w-full">
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
                src="/chest01outlined-11@2x.png"
              />
            </div>
          </div>
          <a className="[text-decoration:none] flex-1 relative tracking-[-0.79px] leading-[31px] text-[inherit] whitespace-nowrap">
            connect wallet
          </a>
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
                src="/chest01outlined-1-11@2x.png"
              />
            </div>
          </div>
          <a className="[text-decoration:none] w-[125px] relative tracking-[-0.79px] leading-[31px] text-[inherit] inline-block shrink-0">
            treasures
          </a>
        </div>
      </header>
      <div className="w-[300px] flex flex-col items-start justify-start text-sm text-black font-b">
        <div className="w-[222px] flex flex-row items-start justify-start gap-[9px]">
          <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
            <img
              className="w-[15px] h-[15px] relative object-cover cursor-pointer"
              loading="lazy"
              alt=""
              src="/arrowleftgreen-1@2x.png"
              onClick={onArrowLeftGreen1IconClick}
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-end pt-[19px] px-6 pb-[7.7px] bg-[url('/public/ui-flat-banner-01-upward-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="h-[66px] w-[198px] relative object-cover hidden"
              alt=""
              src="/ui-flat-banner-01-upward-1@2x.png"
            />
            <div className="h-[39.3px] w-[132px] relative leading-[28px] inline-block shrink-0 z-[1]">
              Chapter1-1:
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[22px]">
          <div className="flex-1 flex flex-row items-start justify-start z-[2]">
            <div className="h-[285px] flex-1 relative">
              <div className="absolute top-[0px] left-[0px] w-full h-full">
                <img
                  className="absolute w-[calc(100%_-_22px)] top-[15px] right-[11px] left-[11px] max-w-full overflow-hidden h-64 object-cover"
                  alt=""
                  src="/ui-flat-frame-02-standard-1@2x.png"
                />
                <img
                  className="absolute top-[260px] left-[254px] w-6 h-[25px] object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/ui-flat-select-01a1-1@2x.png"
                />
                <img
                  className="absolute top-[261px] left-[0px] w-[23px] h-6 object-contain z-[1]"
                  alt=""
                  src="/ui-flat-select-01a1-3@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[23px] h-6 object-contain z-[1]"
                  alt=""
                  src="/ui-flat-select-01a1-4@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[252px] w-[26px] h-[26px] object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/ui-flat-select-01a1-2@2x.png"
                />
              </div>
              <img
                className="absolute top-[23px] left-[19px] w-60 h-60 object-cover z-[2]"
                alt=""
                src="/image-37@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
