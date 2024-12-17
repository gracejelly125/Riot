//SSG 방식

import ItemsItem from "@/app/items/_components/ItemsItem";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { Item } from "@/types/item.type";
import { fetchItemList } from "@/utils/serverApi";

const Items = async () => {
  const version = process.env.NEXT_PUBLIC_DDRAGON_VERSION!;
  // 아이템 목록 가져오기
  const data = await fetchItemList(version);
  const items: Item[] = data;

  return (
    <div>
      <h1 className="text-center text-3xl text-red-500 font-bold mt-16 mb-8">
        아이템 목록
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {Object.values(items).map((item) => (
          <ItemsItem key={item.name} item={item} version={version} />
        ))}
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Items;
