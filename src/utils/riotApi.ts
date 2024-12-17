"use server";

import { Rotation } from "@/types/rotation.type";

// Route handler 활용, rotation 데이터 정보에서 필요한 ID 값만 가져옴
export const getChampionRotation = async (): Promise<number[]> => {
  const response = await fetch("/api/rotation");
  if (!response.ok) {
    throw new Error("Failed to fetch rotation");
  }
  const data: { data: Rotation } = await response.json();
  return data.data.freeChampionIds;
};
