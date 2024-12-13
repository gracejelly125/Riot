//SSG 방식

import ItemsItem from "@/components/ui/ItemsItem";
import { Item } from "@/types/item.type";
import { fetchItemList } from "@/utils/serverApi";

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
          <ItemsItem key={item.name} item={item} version={version} />
        ))}
      </div>
    </div>
  );
};

export default Items;
