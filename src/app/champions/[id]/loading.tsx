import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-3xl text-red-500 font-bold mb-10">
        핫 둘 셋 넷! 신속히 이동 중입니다!
      </p>
      <Image
        src={`https://wallpapers.com/images/high/beekeeper_-teemo_-league_of_-legends-ztsq826874rp80lz.png`}
        alt="League of Legends"
        width={500}
        height={0}
      />
    </div>
  );
};

export default Loading;
