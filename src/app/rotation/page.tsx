// CSR 방식
"use client";

import RotationItem from "@/components/ui/RotationItem";
import { Champion } from "@/types/champion.type";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading";

const Rotation = () => {
  const version = process.env.NEXT_PUBLIC_DDRAGON_VERSION!;

  // 로테이션 정보 관리
  const { data: rotation, isPending } = useQuery<number[]>({
    queryKey: ["rotation"],
    queryFn: getChampionRotation,
  });

  // 무료 챔피언 목록 관리
  const { data: freeChampions } = useQuery<Champion[]>({
    queryKey: ["freeChampions", rotation],
    queryFn: async () => {
      const response = await fetchChampionList(version);
      return Object.values(response).filter((res) =>
        rotation?.includes(Number(res.key))
      );
    },
    enabled: !!rotation,
  });

  if (isPending) return <Loading />;

  return (
    <div>
      <h1 className="text-3xl text-red-500 font-bold mt-8 mb-4 p-2">
        챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {freeChampions?.map((champion) => (
          <RotationItem
            key={champion.id}
            champion={champion}
            version={version}
          />
        ))}
      </div>
    </div>
  );
};

export default Rotation;
