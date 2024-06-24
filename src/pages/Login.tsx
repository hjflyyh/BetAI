import { FunctionComponent, useCallback } from "react";
import FrameComponent7 from "../components/FrameComponent7";
import { useNavigate } from "react-router-dom";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-dimgray overflow-hidden flex flex-col items-start justify-start pt-3 pb-[238px] pr-5 pl-6 box-border gap-[373px] leading-[normal] tracking-[normal] text-center text-3xl text-floralwhite font-pixelify-sans">
      <img
        className="w-6 h-6 absolute !m-[0] right-[22px] bottom-[331px] object-contain"
        loading="lazy"
        alt=""
        src="/torchoutlined-1@2x.png"
      />
      <div className="w-[389px] absolute !m-[0] bottom-[327px] left-[22px] tracking-[-0.79px] leading-[31px] whitespace-pre-wrap inline-block">
        Test your fortune in this AI story
      </div>
      <div className="w-[389px] absolute !m-[0] bottom-[207px] left-[22px] tracking-[-0.79px] leading-[31px] inline-block">
        Login with Twitter
      </div>
      <FrameComponent7 />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[5px] pl-0">
        <div className="flex flex-row items-start justify-start">
          <div
            className="h-[39px] w-[37px] relative cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <img
              className="absolute top-[2px] left-[0px] w-[37px] h-[37px] object-cover"
              alt=""
              src="/ui-flat-button-small-press-02a1-1@2x.png"
            />
            <img
              className="absolute top-[0px] left-[1px] w-[34px] h-[34px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image-50@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
