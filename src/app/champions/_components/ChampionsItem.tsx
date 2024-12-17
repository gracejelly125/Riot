import { Champion } from "@/types/champion.type";
import Image from "next/image";
import Link from "next/link";

type ChampionsItemProps = {
  champion: Champion;
  version: string;
};

const ChampionsItem = ({ champion, version }: ChampionsItemProps) => {
  return (
    <Link href={`/champions/${champion.id}`}>
      <li className="list-none flex flex-col items-center p-6 rounded-lg shadow-md w-60 h-60 border-solid border-gray-200 border-2 rounded-xl">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
          alt={champion.name}
          width={100}
          height={100}
          loading="lazy"
        />
        <p className="mt-2 text-lg text-red-500 font-semibold">
          {champion.name}
        </p>
        <p className="text-sm text-gray-500">{champion.title}</p>
      </li>
    </Link>
  );
};

export default ChampionsItem;
