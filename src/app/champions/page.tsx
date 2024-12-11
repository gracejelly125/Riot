// ISR 방식

import { Champion } from "@/types/champion.type";
import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// 24시간 마다 재검증하여 업데이트
export const revalidate = 86400;

const Champions = async () => {
  const version = "14.23.1";
  // 전체 챔피언 목록 가져오기
  const data = await fetchChampionList(version);
  const champions: Champion[] = data;

  return (
    <div>
      <h1 className="text-3xl text-red-500 font-bold mt-8 mb-4 p-2">
        챔피언 목록
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {Object.values(champions).map((champion) => (
          <Link key={champion.id} href={`/champions/${champion.id}`}>
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
        ))}
      </div>
    </div>
  );
};

export default Champions;
