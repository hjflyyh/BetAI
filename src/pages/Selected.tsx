import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";

const Selected: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    // Please sync "selected_details" to the project
  }, []);

  const onArrowLeftGreen1IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-dimgray overflow-hidden flex flex-col items-start justify-start pt-3 px-0.5 pb-[23px] box-border gap-[123px] leading-[normal] tracking-[normal] text-left text-3xl text-floralwhite font-pixelify-sans mq412:gap-[61px]">
      <section className="w-[408px] flex flex-col items-end justify-start gap-[27px] max-w-full text-left text-3xl text-floralwhite font-pixelify-sans">
        <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
          <div className="w-[213px] flex flex-row items-start justify-start py-0 px-[22px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[7px]">
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
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[22px] box-border max-w-full">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[8px] max-w-full">
              <div className="flex flex-row items-start justify-start">
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
              <a className="[text-decoration:none] flex-1 relative tracking-[-0.79px] leading-[31px] text-[inherit] inline-block min-w-[106px]">
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
                    className="absolute top-[4.3px] left-[7.3px] w-[22.5px] h-[22.5px] object-cover z-[1]"
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
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[16px] max-w-full">
            <div className="w-[305px] flex flex-row items-start justify-start gap-[7px]">
              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                <img
                  className="w-[15px] h-[15px] relative object-cover cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/arrowleftgreen-11@2x.png"
                  onClick={onArrowLeftGreen1IconClick}
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="h-[37px] w-[37px] relative">
                  <img
                    className="absolute top-[7px] left-[7.5px] w-[22.5px] h-[22.5px] object-contain"
                    loading="lazy"
                    alt=""
                    src="/chest01outlined-1-22@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    alt=""
                    src="/ui-flat-select-01a1-5@2x.png"
                  />
                </div>
              </div>
              <a className="[text-decoration:none] flex-1 relative tracking-[-0.79px] leading-[31px] text-[inherit]">
                selected warriors
              </a>
            </div>
            <FrameComponent2 onGroupContainerClick={onGroupContainerClick} />
          </div>
        </div>
        <FrameComponent2 />
        <FrameComponent2 />
      </section>
      <div className="w-[329px] flex flex-row items-start justify-start py-0 px-[22px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[9px]">
          <div className="flex flex-row items-start justify-start">
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
                src="/chest01outlined-1-2@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 relative tracking-[-0.79px] leading-[31px]">
            start!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selected;
