import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "./FrameComponent6";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    // Please sync "treasure_details" to the project
  }, []);

  const onArrowLeftGreen1IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start py-0 pr-1 pl-0 box-border gap-[5px] max-w-full text-left text-3xl text-floralwhite font-pixelify-sans ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-0 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq366:flex-wrap">
          <div className="h-[26px] w-[45px] relative">
            <div className="absolute top-[0px] left-[22px] flex flex-row items-start justify-start">
              <img
                className="h-6 w-[23px] relative object-cover"
                alt=""
                src="/ui-flat-select-01a1-4@2x.png"
              />
              <div
                className="h-[37px] w-[37px] absolute !m-[0] right-[-30px] bottom-[-36px] cursor-pointer z-[1]"
                onClick={onGroupContainerClick}
              >
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
            <img
              className="absolute top-[11px] left-[0px] w-[15px] h-[15px] object-cover cursor-pointer"
              loading="lazy"
              alt=""
              src="/arrowleftgreen-11@2x.png"
              onClick={onArrowLeftGreen1IconClick}
            />
          </div>
          <div className="w-[243px] flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border">
            <div className="w-[189px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[7px]">
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
                  0.25
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
      <FrameComponent6
        tSubtitle="Use the Bitget Wallet"
        tSubtitle1="Import the private key of the BetAI wallet into the Bitget wallet"
      />
    </div>
  );
};

export default FrameComponent5;
