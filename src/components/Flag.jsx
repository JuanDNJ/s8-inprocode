import { flags } from "../config";

export default function Flag({ language }) {
  const ImgFlag = ({ language }) => {
    const flag = flags.find((flag) => flag.key === language);
    if (flag) {
      return (
        <img
          className="w-8 h-8"
          src={flag.img}
          alt="Flag Image"
          title={flag.language}
        />
      );
    } else {
      return (
        <img
          className="w-8 h-8"
          src="#"
          alt="Flag not found"
          title="Flag not found"
        />
      );
    }
  };

  return <ImgFlag language={language} />;
}
