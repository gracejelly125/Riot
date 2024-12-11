// CSR 방식
"use client";

import { Champion } from "@/types/champion.type";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const Rotation = () => {
  const version = "14.23.1";

  // 로테이션 정보 관리
  const { data: rotation } = useQuery<number[]>({
    queryKey: ["rotation"],
    queryFn: getChampionRotation,
  });

  // 무료 챔피언 목록 관리
  const { data: freeChampions } = useQuery<Champion[]>({
    queryKey: ["freeChampions", rotation],
    queryFn: async () => {
      if(!rotation || rotation.length === 0) return [];
      const response = await fetchChampionList(version);
      return Object.values(response).filter((res) => rotation.includes(Number(res.key)))},
    enabled: !!rotation,
  });


  return (
    <div>
      <h1 className="text-3xl text-red-500 font-bold mt-8 mb-4 p-2">
        챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {freeChampions?.map((champion) => (
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

export default Rotation;
