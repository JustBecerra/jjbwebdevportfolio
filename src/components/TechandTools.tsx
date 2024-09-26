import { TechandToolsList, type TechandToolsTypes } from "../consts";
import { SingleTech } from "./SingleTech";

const TechListWrapper = () => {
  const items = [...TechandToolsList, ...TechandToolsList];

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <h1 className="text-green font-bold text-2xl mb-8">Tools & Technologies I use</h1>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 w-full animate-scroll h-[6rem]">
          {items.map((tt: TechandToolsTypes, index: number) => (
            <SingleTech key={index} logo={tt.logo} name={tt.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechListWrapper;
