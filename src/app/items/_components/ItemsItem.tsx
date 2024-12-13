import { Item } from "@/types/item.type";
import Image from "next/image";

type ItemsItemProps = {
  item: Item;
  version: string;
};

const ItemsItem = ({ item, version }: ItemsItemProps) => {
  return (
    <li className="list-none flex flex-col items-center p-6 rounded-lg shadow-md w-60 h-60 border-solid border-gray-200 border-2 rounded-xl">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
        alt={item.name}
        width={100}
        height={100}
      />
      <p className="mt-2 text-lg text-red-500 font-semibold">{item.name}</p>
      <p className="text-sm text-gray-500">{item.plaintext}</p>
    </li>
  );
};

export default ItemsItem;
