import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
  image16?: string;
  image17?: string;
  image18?: string;
  image19?: string;
  image20?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  image16,
  image17,
  image18,
  image19,
  image20,
}) => {
  return (
    <section
      className={`w-[417px] flex flex-row items-start justify-start pt-0 px-[22px] pb-4 box-border max-w-full text-left text-sm text-floralwhite font-zpix ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[17px] max-w-full">
        <div className="h-[78px] flex-1 relative min-w-[60px] max-w-[61px]">
          <div className="absolute top-[50px] left-[1px] leading-[28px] inline-block w-2.5 min-w-[10px] z-[1]">
            1.
          </div>
          <div className="absolute top-[0px] left-[0px] w-[61px] h-[61px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              alt=""
              src="/choice@2x.png"
            />
            <img
              className="absolute top-[4px] left-[2px] w-[57px] h-[45px] object-cover z-[2]"
              loading="lazy"
              alt=""
              src={image16}
            />
          </div>
        </div>
        <div className="h-[78px] flex-1 relative min-w-[60px] max-w-[61px]">
          <div className="absolute top-[50px] left-[1px] leading-[28px] inline-block w-[13px] min-w-[13px] z-[1]">
            2.
          </div>
          <div className="absolute top-[0px] left-[0px] w-[61px] h-[61px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              alt=""
              src="/choice@2x.png"
            />
            <img
              className="absolute top-[4px] left-[2px] w-[57px] h-[45px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src={image17}
            />
          </div>
        </div>
        <div className="h-[78px] flex-1 relative min-w-[60px] max-w-[61px]">
          <div className="absolute top-[50px] left-[1px] leading-[28px] inline-block w-[13px] min-w-[13px] z-[1]">
            3.
          </div>
          <div className="absolute top-[0px] left-[0px] w-[61px] h-[61px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              alt=""
              src="/choice@2x.png"
            />
            <img
              className="absolute top-[4px] left-[2px] w-[57px] h-[45px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src={image18}
            />
          </div>
        </div>
        <div className="h-[78px] flex-1 relative min-w-[60px] max-w-[61px]">
          <div className="absolute top-[50px] left-[1px] leading-[28px] inline-block w-[13px] min-w-[13px] z-[1]">
            4.
          </div>
          <div className="absolute top-[0px] left-[0px] w-[61px] h-[61px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              alt=""
              src="/choice@2x.png"
            />
            <img
              className="absolute top-[4px] left-[2px] w-[57px] h-[45px] object-cover z-[2]"
              alt=""
              src={image19}
            />
          </div>
        </div>
        <div className="h-[78px] flex-1 relative min-w-[60px] max-w-[61px]">
          <div className="absolute top-[50px] left-[1px] leading-[28px] inline-block w-[13px] min-w-[13px] z-[1]">
            5.
          </div>
          <div className="absolute top-[0px] left-[0px] w-[61px] h-[61px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              alt=""
              src="/choice@2x.png"
            />
            <img
              className="absolute top-[4px] left-[2px] w-[57px] h-[45px] object-cover z-[2]"
              alt=""
              src={image20}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
