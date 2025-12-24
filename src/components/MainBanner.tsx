import { Button } from "./ui/button";
import DetailDecoration from "./ui/DetailDecoration";

const MainBanner = () => {
  return (
    <div className="relative flex justify-between items-center">
      <DetailDecoration position="left" />
      <div className="mt-28 ml-16 flex flex-col gap-6">
        <span className="text-3xl font-bold leading-snug">
          Educação de Qualidade <br />
          para um Futuro Melhor! <br />
          Explore o EducaPlus
        </span>
        <Button className="w-32 rounded-2xl">Explore</Button>
      </div>
      <div className="mr-32 mt-4">
        <img
          src="src/assets/girl-banner.svg"
          alt="Banner"
          width={420}
          height={420}
        />
      </div>
      <DetailDecoration position="right" />
    </div>
  );
};

export default MainBanner;
