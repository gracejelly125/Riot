// ISR 방식

import ChampionsItem from "@/app/champions/_components/ChampionsItem";
import { Champion } from "@/types/champion.type";
import { fetchChampionList } from "@/utils/serverApi";

// 24시간 마다 재검증하여 업데이트
export const revalidate = 86400;

const Champions = async () => {
  const version = process.env.NEXT_PUBLIC_DDRAGON_VERSION!;
  // 전체 챔피언 목록 가져오기
  const data = await fetchChampionList(version);
  const champions: Champion[] = data;

  return (
    <div>
      <h1 className="text-3xl text-red-500 font-bold mt-14 mb-6 p-2">
        챔피언 목록
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {Object.values(champions).map((champion) => (
          <ChampionsItem
            key={champion.id}
            champion={champion}
            version={version}
          />
        ))}
      </div>
    </div>
  );
};

export default Champions;
