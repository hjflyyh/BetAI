import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Layout from "../components/Layout";
import BetOptionsContent from "../components/BetOptionsContent";

const Lottery: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-dimgray overflow-hidden flex flex-col items-start justify-start pt-3 px-0.5 pb-[141px] box-border gap-[8px] leading-[normal] tracking-[normal] text-left text-xl text-white font-pixelify-sans">
      <FrameComponent1 />
      <section className="w-[419px] flex flex-row items-start justify-start pt-0 px-[22px] pb-3.5 box-border max-w-full text-left text-xl text-floralwhite font-pixelify-sans">
        <h3 className="m-0 flex-1 relative text-inherit leading-[28px] inline-block max-w-full font-inherit">
          <p className="m-0">{`In the heart of a mystical kingdom, a grand costume ball is held once a year at the royal palace. This ball is no ordinary event; it's a night of magic, mystery, and transformation, where attendees don enchanting costumes that reveal their true selves. As you step into the magnificent ballroom, you are asked a single question that will determine your appearance for the evening. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            <b>What do you look like at the Mysterious Costume Ball? - - -</b>
          </p>
        </h3>
      </section>
      <section className="w-[417px] flex flex-row items-start justify-start pt-0 px-[22px] pb-4 box-border max-w-full text-left text-xl text-floralwhite font-pixelify-sans">
        <div className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-full">
          <h3 className="m-0 w-[365px] relative text-inherit leading-[28px] font-normal font-inherit inline-block max-w-full">
            A. the color of your outfit：
          </h3>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[17px] text-sm font-zpix">
            <div className="flex-1 flex flex-col items-start justify-start min-w-[60px] max-w-[61px]">
              <div className="self-stretch h-[61px] relative shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                  alt=""
                  src="/choice@2x.png"
                />
                <img
                  className="absolute top-[4px] left-[2px] w-[57px] h-[46px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-4@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-px mt-[-6px]">
                <div className="relative leading-[28px] inline-block min-w-[10px] shrink-0 z-[1]">
                  1.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[60px] max-w-[61px]">
              <div className="self-stretch h-[61px] relative shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                  alt=""
                  src="/choice@2x.png"
                />
                <img
                  className="absolute top-[4px] left-[2px] w-[57px] h-[45px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-5@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-px mt-[-6px]">
                <div className="relative leading-[28px] inline-block min-w-[13px] shrink-0 z-[1]">
                  2.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[60px] max-w-[61px]">
              <div className="self-stretch h-[61px] relative shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                  alt=""
                  src="/choice@2x.png"
                />
                <img
                  className="absolute top-[4px] left-[2px] w-[57px] h-[46px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-6@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-px mt-[-6px]">
                <div className="relative leading-[28px] inline-block min-w-[13px] shrink-0 z-[1]">
                  3.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[60px] max-w-[61px]">
              <div className="self-stretch h-[61px] relative shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                  alt=""
                  src="/choice@2x.png"
                />
                <img
                  className="absolute top-[4px] left-[2px] w-[57px] h-[45px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-5-1@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-px mt-[-6px]">
                <div className="relative leading-[28px] inline-block min-w-[13px] shrink-0 z-[1]">
                  4.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[60px] max-w-[61px]">
              <div className="self-stretch h-[61px] relative shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                  alt=""
                  src="/choice@2x.png"
                />
                <img
                  className="absolute top-[4px] left-[2px] w-[57px] h-[45px] object-cover z-[1]"
                  alt=""
                  src="/image-7@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-px mt-[-6px]">
                <div className="relative leading-[28px] inline-block min-w-[13px] shrink-0 z-[1]">
                  5.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-4 pr-[9px] pl-[22px] box-border max-w-full text-left text-xl text-white font-pixelify-sans">
        <div className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-full">
          <h3 className="m-0 self-stretch relative text-inherit leading-[28px] font-medium font-inherit">
            B. the kind of hat or headpiece do you wear?
          </h3>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[26px] pl-0 gap-[17px] text-sm text-floralwhite font-zpix">
            <div className="flex-1 flex flex-col items-start justify-start min-w-[60px] max-w-[61px]">
              <div className="self-stretch h-[61px] relative shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                  alt=""
                  src="/choice@2x.png"
                />
                <img
                  className="absolute top-[4px] left-[2px] w-[57px] h-[45px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-15@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-px mt-[-6px]">
                <div className="relative leading-[28px] inline-block min-w-[10px] shrink-0 z-[1]">
                  1.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[60px] max-w-[61px]">
              <div className="self-stretch h-[61px] relative shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                  alt=""
                  src="/choice@2x.png"
                />
                <img
                  className="absolute top-[4px] left-[2px] w-[57px] h-[45px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-13@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-px mt-[-6px]">
                <div className="relative leading-[28px] inline-block min-w-[13px] shrink-0 z-[1]">
                  2.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[60px] max-w-[61px]">
              <div className="self-stretch h-[61px] relative shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                  alt=""
                  src="/choice@2x.png"
                />
                <img
                  className="absolute top-[4px] left-[2px] w-[57px] h-[46px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-12@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-px mt-[-6px]">
                <div className="relative leading-[28px] inline-block min-w-[13px] shrink-0 z-[1]">
                  3.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[60px] max-w-[61px]">
              <div className="self-stretch h-[61px] relative shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                  alt=""
                  src="/choice@2x.png"
                />
                <img
                  className="absolute top-[4px] left-[2px] w-[57px] h-[45px] object-cover z-[1]"
                  alt=""
                  src="/image-11@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-px mt-[-6px]">
                <div className="relative leading-[28px] inline-block min-w-[13px] shrink-0 z-[1]">
                  4.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[60px] max-w-[61px]">
              <div className="self-stretch h-[61px] relative shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                  alt=""
                  src="/choice@2x.png"
                />
                <img
                  className="absolute top-[4px] left-[2px] w-[57px] h-[45px] object-cover z-[1]"
                  alt=""
                  src="/image-14@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-px mt-[-6px]">
                <div className="relative leading-[28px] inline-block min-w-[13px] shrink-0 z-[1]">
                  5.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-4 pr-[9px] pl-[22px] box-border max-w-full">
        <h3 className="m-0 flex-1 relative text-inherit leading-[28px] font-normal font-inherit inline-block max-w-full">
          C. the type of clothing are you wearing:
        </h3>
      </div>
      <FrameComponent
        image16="/image-16@2x.png"
        image17="/image-17@2x.png"
        image18="/image-18@2x.png"
        image19="/image-19@2x.png"
        image20="/image-20@2x.png"
      />
      <div className="w-[57px] h-[53px] relative hidden" />
      <div className="w-[57px] h-[53px] relative hidden" />
      <div className="w-[57px] h-[53px] relative hidden" />
      <div className="w-[57px] h-[53px] relative hidden" />
      <div className="w-[57px] h-[53px] relative hidden" />
      <div className="w-[57px] h-[53px] relative hidden" />
      <div className="w-[57px] h-[53px] relative hidden" />
      <div className="w-[57px] h-[53px] relative hidden" />
      <div className="w-[404px] flex flex-row items-start justify-start pt-0 px-[22px] pb-4 box-border max-w-full">
        <h3 className="m-0 flex-1 relative text-inherit leading-[28px] font-normal font-inherit inline-block max-w-full">
          D. choose the pattern or design on your outfit:
        </h3>
      </div>
      <div className="w-[57px] h-[53px] relative hidden" />
      <div className="w-[57px] h-[53px] relative hidden" />
      <div className="w-[57px] h-[53px] relative hidden" />
      <div className="w-[57px] h-[53px] relative hidden" />
      <FrameComponent
        image16="/image-21@2x.png"
        image17="/image-22@2x.png"
        image18="/image-23@2x.png"
        image19="/image-24@2x.png"
        image20="/image-25@2x.png"
      />
      <div className="w-[364px] flex flex-row items-start justify-start pt-0 px-[22px] pb-[17px] box-border max-w-full">
        <h3 className="m-0 flex-1 relative text-inherit leading-[28px] font-normal font-inherit">
          E. choose magical accessory do you carry:
        </h3>
      </div>
      <FrameComponent
        image16="/image-26@2x.png"
        image17="/image-27@2x.png"
        image18="/image-28@2x.png"
        image19="/image-29@2x.png"
        image20="/image-30@2x.png"
      />
      <div className="w-[416px] flex flex-row items-start justify-start pt-0 px-[22px] pb-[17px] box-border max-w-full">
        <h3 className="m-0 flex-1 relative text-inherit leading-[28px] font-normal font-inherit inline-block max-w-full">
          F. choose type of footwear completes your look:
        </h3>
      </div>
      <FrameComponent
        image16="/image-31@2x.png"
        image17="/image-32@2x.png"
        image18="/image-33@2x.png"
        image19="/image-34@2x.png"
        image20="/image-35@2x.png"
      />
      <Layout />
      <div className="w-[255px] flex flex-row items-start justify-start pt-0 px-6 pb-[15px] box-border">
        <BetOptionsContent />
      </div>
      <div className="w-[255px] flex flex-row items-start justify-start py-0 px-6 box-border text-3xl text-floralwhite">
        <div className="flex-1 flex flex-row items-start justify-start gap-[7px]">
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
                src="/chest01outlined-1-21@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
            <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.79px] leading-[31px] font-normal font-inherit">
              bet warrior?
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lottery;
