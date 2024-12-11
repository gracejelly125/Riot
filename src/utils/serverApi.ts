import { Champion } from "@/types/champion.type";
import { ChampionDetail } from "@/types/detail.type";
import { Item } from "@/types/item.type";

export const fetchItemList = async (version: string): Promise<Item[]> => {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }
  const data = await response.json();
  return data.data;
};

export const fetchChampionList = async (
  version: string
): Promise<Champion[]> => {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch champions");
  }
  const data = await response.json();
  return data.data;
};

export const fetchChampionDetail = async (
  version: string,
  id: string
): Promise<ChampionDetail> => {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch details");
  }
  const data = await response.json();
  // data.data[id] id에 해당하는 특정 챔피언의 정보를 리턴한다.
  return data.data[id];
};
