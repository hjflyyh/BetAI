import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent6Type = {
  className?: string;
  tSubtitle?: string;
  tSubtitle1?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
  tSubtitle,
  tSubtitle1,
  propPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[22px] box-border max-w-full text-left text-3xl text-floralwhite font-pixelify-sans ${className}`}
      style={frameDivStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[18px] box-border max-w-full">
        <div className="flex-1 relative tracking-[-0.79px] leading-[31px] inline-block max-w-full">
          {tSubtitle}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-4 box-border max-w-full text-base">
        <div className="flex-1 relative tracking-[-0.79px] leading-[20px] inline-block max-w-full z-[1]">
          {tSubtitle1}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-end justify-between py-0 pr-1 pl-0 gap-[20px]">
        <img
          className="h-6 w-[23px] relative object-cover"
          loading="lazy"
          alt=""
          src="/ui-flat-select-01a1-4@2x.png"
        />
        <img
          className="h-[25px] w-6 relative object-cover min-h-[25px] z-[2]"
          loading="lazy"
          alt=""
          src="/ui-flat-select-01a1-12@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent6;
