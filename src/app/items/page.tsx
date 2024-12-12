//SSG 방식

import { Item } from "@/types/item.type";
import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const Items = async () => {
  const version = process.env.NEXT_PUBLIC_DDRAGON_VERSION!;
  // 아이템 목록 가져오기
  const data = await fetchItemList(version);
  const items: Item[] = data;

  return (
    <div>
      <h1 className="text-3xl text-red-500 font-bold mt-8 mb-4 p-2">
        아이템 목록
      </h1>
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
            <p className="mt-2 text-lg text-red-500 font-semibold">
              {item.name}
            </p>
            <p className="text-sm text-gray-500">{item.plaintext}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Items;
