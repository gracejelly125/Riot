"use client";

import { Champion } from "@/types/champion.type";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampions } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Rotation = () => {
  const [rotation, setRotation] = useState<number[]>([]);
  const [freeChampions, setFreeChampions] = useState<Champion[]>([]);
  const version = "14.23.1";

  useEffect(() => {
    const fetchRotation = async () => {
      try {
        const selectedChampions = await getChampionRotation();
        setRotation(selectedChampions);
      } catch (error) {
        console.error("Error fetching selectedChampions:", error);
      }
    };

    fetchRotation(); 
  }, []);

  // console.log("rotation", rotation);

  // rotation 이 업데이트 된 이후에 fetchFreeChampions 실행되도록 함
  useEffect(() => {
    if (rotation.length > 0) {
      const fetchFreeChampions = async () => {
        try {
          const response = await fetchChampions(version);

          const filteredFreeChampions = Object.values(response).filter((res) =>
            rotation.includes(Number(res.key))
          );
          setFreeChampions(filteredFreeChampions);
        } catch (error) {
          console.error("Error fetching freeChampions:", error);
        }
      };

      fetchFreeChampions();
    }
  }, [rotation]);

  return (
    <div>
      <h1 className="text-3xl text-red-500 font-bold mt-8 mb-4 p-2">
        챔피언 목록
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {freeChampions.map((champion) => (
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
