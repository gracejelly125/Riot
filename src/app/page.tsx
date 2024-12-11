import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="my-10 flex flex-col text-center items-center">
      <h1 className="my-4 text-red-500 font-bold text-3xl">
        리그 오브 레전드 정보 앱
      </h1>
      <h2 className="text-gray-500 mb-6">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </h2>
      <div className="flex flex-col gap-8">
        <Link href={"/champions"}>
          <Image
            className="mb-2"
            src={`https://wallpapers.com/images/featured/league-of-legends-3ggpjbfly8o9uo8a.jpg`}
            alt="League of Legends"
            width={500}
            height={0}
          />
          <h2 className="text-xl text-yellow-500">챔피언 목록 보기</h2>
        </Link>
        <Link href={"/rotation"}>
          <Image
            className="mb-2"
            src={`https://wallpapers.com/images/high/3d-league-of-legends-8yx3ab1xb69nn227.webp`}
            alt="League of Legends"
            width={500}
            height={0}
          />
          <h2 className="text-xl text-yellow-500">금주 로테이션 확인</h2>
        </Link>
        <Link href={"/items"}>
          <Image
            className="mb-2"
            src={`https://wallpapers.com/images/high/arcane-league-of-legends-dark-alley-z81hrap8o7mezc0g.webp`}
            alt="League of Legends"
            width={500}
            height={0}
          />
          <h2 className="text-xl text-yellow-500">아이템 목록 보기</h2>
        </Link>
      </div>
    </div>
  );
}
