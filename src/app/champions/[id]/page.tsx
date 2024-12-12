import ChampionsDetailItem from "@/components/ChampionsDetailItem";
import { ChampionDetail } from "@/types/detail.type";
import { fetchChampionDetail } from "@/utils/serverApi";

type Props = {
  params: {
    id: string;
  };
};

// 제목을 동적으로 설정 => SEO 강화
export const generateMetadata = ({ params }: Props) => {
  return {
    title: `${params.id}`,
  };
};

const Detail = async ({ params }: Props) => {
  const version = process.env.NEXT_PUBLIC_DDRAGON_VERSION!;
  // params.id와 같은 id를 가진 챔피언의 상세정보 가져오기
  const data: ChampionDetail = await fetchChampionDetail(version, params.id);

  return <ChampionsDetailItem data={data} version={version} />;
};

export default Detail;
