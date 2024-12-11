import { Rotation } from "@/types/rotation.type";

export const getChampionRotation = async (): Promise<number[]> => {
  const response = await fetch("http://localhost:3000/api/rotation");
  if (!response.ok) {
    throw new Error("Failed to fetch rotation");
  }
  const data: { data: Rotation } = await response.json();
//   console.log("data.data.freeChampionIds", data.data.freeChampionIds);
  return data.data.freeChampionIds;
};
