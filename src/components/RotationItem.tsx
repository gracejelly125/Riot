import { Champion } from "@/types/champion.type";
import Image from "next/image";
import Link from "next/link";

type RotationItemProps = {
  champion: Champion;
  version: string;
};

const RotationItem = ({ champion, version }: RotationItemProps) => {
  return (
    <Link href={`/champions/${champion.id}`}>
      <li className="list-none flex flex-col items-center p-6 rounded-lg shadow-md w-60 h-60 border-solid border-white border-2 rounded-xl">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
          alt={champion.name}
          width={100}
          height={100}
        />
        <p className="mt-2 text-lg text-red-500 font-semibold">
          {champion.name}
        </p>
        <p className="text-sm text-gray-500">{champion.title}</p>
      </li>
    </Link>
  );
};

export default RotationItem;
