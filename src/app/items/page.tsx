import { Item } from "@/types/item.type";
import { fetchItems } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const Items = async () => {
  const version = "14.23.1";
  const data = await fetchItems(version);
  const items: Item[] = data;

  return (
    <div>
      <h1 className="text-3xl text-red-500 font-bold mt-8 mb-4 p-2">아이템 목록</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {Object.values(items).map((item) => (
          <li
            key={item.name}
            className="list-none flex flex-col items-center p-6 rounded-lg shadow-md w-60 h-60 border-solid border-white border-2 rounded-xl"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
              alt={item.name}
              width={100}
              height={100}
            />
            <p className="mt-2 text-lg text-red-500 font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500">{item.plaintext}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Items;
