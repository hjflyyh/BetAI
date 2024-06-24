import { FunctionComponent } from "react";

export type LayoutType = {
  className?: string;
};

const Layout: FunctionComponent<LayoutType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[397px] flex flex-row items-start justify-start pt-0 px-1 pb-[35px] box-border max-w-full text-left text-xl text-floralwhite font-pixelify-sans ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[19px] box-border max-w-full">
            <h3 className="m-0 flex-1 relative text-inherit leading-[28px] font-bold font-inherit inline-block max-w-full">
              <p className="m-0">So warrior, your final choice is...</p>
            </h3>
          </div>
          <div className="w-[159px] flex flex-row items-start justify-end pt-2 px-[7px] pb-[17px] box-border bg-[url('/public/ui-flat-banner-02-upward-1@2x.png')] bg-cover bg-no-repeat bg-[top] text-black font-zpix">
            <img
              className="h-[53px] w-[159px] relative object-cover hidden"
              alt=""
              src="/ui-flat-banner-02-upward-1@2x.png"
            />
            <div className="w-[104px] relative leading-[28px] inline-block shrink-0 z-[1]">
              123543
            </div>
          </div>
        </div>
        <div className="w-[318px] flex flex-row items-start justify-start py-0 px-5 box-border">
          <div className="flex-1 flex flex-row items-start justify-start">
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
                className="absolute top-[23px] left-[19px] w-[239px] h-60 object-cover z-[2]"
                alt=""
                src="/image-36@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
