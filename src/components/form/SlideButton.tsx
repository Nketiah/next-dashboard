import { BeatLoader } from "react-spinners";

interface ISlideButtonProps {
  type: "submit" | "reset" | "button";
  text: string;
  slide_text: string
  disabled: boolean
  icon: JSX.Element
}

const SlideButton = (props: ISlideButtonProps) => {
  const { type, text, slide_text, disabled, icon } = props
  
  return (
    <button
      type={type}
      disabled={disabled}
      className="relative w-full inline-flex items-center justify-center px-8 py-3 mt-4 overflow-hidden font-medium bg-appBlue-600 transition duration-300 ease-out border-2 rounded-md group"
    >
      {disabled ? (
        <BeatLoader color="#fff" size={12} />
      ) : (
        <>
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-appBlue-700 group-hover:translate-x-0 ease">
            {icon}&nbsp;{slide_text}
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            {text}
          </span>
          <span className="relative invisible">{text}</span>
        </>
      )}
    </button>
  );
};

export default SlideButton
