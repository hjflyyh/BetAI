import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";

const Treasures: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-dimgray overflow-hidden flex flex-col items-start justify-start pt-3 px-0.5 pb-7 box-border gap-[133px] leading-[normal] tracking-[normal] mq412:gap-[66px]">
      <section className="w-[408px] flex flex-row items-start justify-start relative max-w-full text-left text-3xl text-floralwhite font-pixelify-sans">
        <img
          className="h-[25px] w-6 absolute !m-[0] right-[8px] bottom-[0px] object-cover"
          loading="lazy"
          alt=""
          src="/ui-flat-select-01a1-12@2x.png"
        />
        <div className="h-[37px] w-[37px] absolute !m-[0] bottom-[101px] left-[38px] z-[1]">
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
        <div className="h-[43.2px] w-[43.2px] absolute !m-[0] right-[20.8px] bottom-[98.8px] z-[1]">
          <img
            className="absolute top-[3.6px] left-[2.6px] w-[37px] h-[37px] object-cover"
            alt=""
            src="/ui-flat-select-01a1-5@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
            alt=""
            src="/cash-1@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[21.8px] max-w-full">
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
                    src="/ui-flat-select-01a1-5@2x.png"
                  />
                  <img
                    className="absolute top-[7px] left-[7.3px] w-[22.5px] h-[22.5px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/chest01outlined-1-12@2x.png"
                  />
                </div>
              </div>
              <a className="[text-decoration:none] w-[125px] relative tracking-[-0.79px] leading-[31px] text-[inherit] inline-block shrink-0">
                treasures
              </a>
            </div>
          </div>
          <FrameComponent5 />
          <FrameComponent4 />
          <FrameComponent3 />
          <div className="flex flex-row items-start justify-start py-0 px-[22px]">
            <img
              className="h-6 w-[23px] relative object-cover"
              loading="lazy"
              alt=""
              src="/ui-flat-select-01a1-4@2x.png"
            />
          </div>
        </div>
      </section>
      <section className="w-[329px] flex flex-row items-start justify-start py-0 px-[22px] box-border max-w-full text-left text-3xl text-floralwhite font-pixelify-sans">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[9px]">
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
          <div className="self-stretch flex flex-row items-start justify-start gap-[9px]">
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
                  src="/chest01outlined-1-31@2x.png"
                />
              </div>
            </div>
            <div className="flex-1 relative tracking-[-0.79px] leading-[31px]">
              selected warriors
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treasures;
