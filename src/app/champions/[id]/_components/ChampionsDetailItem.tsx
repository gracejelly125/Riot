import { ChampionDetail } from "@/types/detail.type";
import Image from "next/image";

type ChampionsDetailItemProps = {
  data: ChampionDetail;
  version: string;
};

const ChampionsDetailItem = ({ data, version }: ChampionsDetailItemProps) => {
  return (
    <div className="flex flex-col justify-center max-w-[700px]">
      <h1 className="text-4xl text-red-500 font-bold mt-20 mb-4">
        {data.name}
      </h1>
      <h2 className="text-2xl text-gray-500 mb-4">{data.title}</h2>
      <Image
        className="mb-6 mx-auto"
        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${data.image.full}`}
        alt={data.name}
        width={200}
        height={200}
        loading="lazy"
      />
      <p className="text-red-500 mb-6">{data.blurb}</p>
      <h3 className="text-xl text-red-500 font-bold mb-2">스탯</h3>
      <ul className="text-red-500 list-disc list-inside">
        <li>공격력: {data.info.attack}</li>
        <li>방어력: {data.info.defense}</li>
        <li>마법력: {data.info.magic}</li>
        <li>난이도: {data.info.difficulty}</li>
      </ul>
    </div>
  );
};

export default ChampionsDetailItem;
