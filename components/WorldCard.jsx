const WorldCard = ({ title, imgUrl, amountJoined }) => (
  <div className="relative p-[4px] bg-[#282f3d] lg:p-[7px] rounded-[9px] lg:rounded-[20px] z-10 w-[90px] lg:w-[210px] md:w-[160px]">
    <img src={imgUrl} alt="planet" className="object-cover w-[100%] h-[100%]" />
    <img
      src={imgUrl}
      alt="planet"
      className="w-[100%] h-[100%] absolute top-[2px] right-[0px] blur-[30px] opacity-80 -z-10"
    />
    <div className="absolute bottom-[6px] lg:bottom-[15px] w-full p-[5px] lg:left-[15px]">
      <div className="flex w-full lg:top-[-16px]">
        <div className="relative w-[50%] lg:bottom-[8px]">
          <img
            src="/people-06.svg"
            alt="people-icon"
            className="absolute left-[43%] w-[15px] lg:w-[35px]"
          />
          <img
            src="/people-05.svg"
            alt="people-icon"
            className="absolute left-[22%] w-[15px] lg:w-[35px]"
          />
          <img
            src="/people-04.svg"
            alt="people-icon"
            className="absolute left-[0%] w-[15px] lg:w-[35px]"
          />
        </div>
        <p className=" w-full font-normal text-[6px] text-white mt-1 lg:text-[12px]">
          + {amountJoined} has joined
        </p>
      </div>
      <h1 className="font-bold text-[8px] lg:text-[16px] text-white mt-1 ">
        {title}
      </h1>
    </div>
  </div>
);

export default WorldCard;
