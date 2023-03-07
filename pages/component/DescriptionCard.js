import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img from "../assets/img1.png";
import Image from "next/image";

const DescriptionCard = () => {
  return (
    <div>
      <div className="text-4xl mt-20 text-white text-center font-bold">
        Steps to follow
      </div>
      <div className="nft-head-out">
        <div className="nft-head"></div>
      </div>
      <div className="flex flex-wrap justify-center align-middle">
        <div className="description-out p-2 m-4 max-w-[25%] flex flex-col text-white">
          <div className="up-onHover flex justify-between">
            <div className="text-xl pt-5" style={{color : '#acacac'}}>Step 01</div>
            <Image
              src={img}
              alt="img"
              className="up-onHover relative top-[-20px] left-[20px] h-[75px] w-[75px]"
            />
          </div>
          <div id="blue-text" className="up-onHover text-[1.8rem] pt-8 text-white text-start font-bold">
            {" "}
            Setup your Wallet{" "}
          </div>
          <div className="up-onHover pt-5 text-[1rem]" style={{color : '#acacac'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            optio eveniet praesentium eius consequatur dolorem sequi nobis
            distinctio aliquid corrupti ut beatae ducimus ea a labore debitis,
            mollitia quis necessitatibus?
          </div>
          <div className="up-onHover p-5">
            <ArrowForwardIcon id='blue-text' />
          </div>
        </div>
        <div className="description-out p-2 m-4 max-w-[25%] flex flex-col text-white">
          <div className="up-onHover flex justify-between">
            <div className="text-xl pt-5" style={{color : '#acacac'}}>Step 01</div>
            <Image
              src={img}
              alt="img"
              className="up-onHover relative top-[-20px] left-[20px] h-[75px] w-[75px]"
            />
          </div>
          <div id="blue-text" className="up-onHover text-[1.8rem] pt-8 text-white text-start font-bold">
            {" "}
            Setup your Wallet{" "}
          </div>
          <div className="up-onHover pt-5 text-[1rem]" style={{color : '#acacac'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            optio eveniet praesentium eius consequatur dolorem sequi nobis
            distinctio aliquid corrupti ut beatae ducimus ea a labore debitis,
            mollitia quis necessitatibus?
          </div>
          <div className="up-onHover p-5">
            <ArrowForwardIcon id='blue-text' />
          </div>
        </div>
        <div className="description-out p-2 m-4 max-w-[25%] flex flex-col text-white">
          <div className="up-onHover flex justify-between">
            <div className="text-xl pt-5" style={{color : '#acacac'}}>Step 01</div>
            <Image
              src={img}
              alt="img"
              className="up-onHover relative top-[-20px] left-[20px] h-[75px] w-[75px]"
            />
          </div>
          <div id="blue-text" className="up-onHover text-[1.8rem] pt-8 text-white text-start font-bold">
            {" "}
            Setup your Wallet{" "}
          </div>
          <div className="up-onHover pt-5 text-[1rem]" style={{color : '#acacac'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            optio eveniet praesentium eius consequatur dolorem sequi nobis
            distinctio aliquid corrupti ut beatae ducimus ea a labore debitis,
            mollitia quis necessitatibus?
          </div>
          <div className="up-onHover p-5">
            <ArrowForwardIcon id='blue-text' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
