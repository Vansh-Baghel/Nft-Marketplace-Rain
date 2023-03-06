import Image from "next/image";
import React from "react";
import nftImage from "../assets/nftImage.jpeg";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = () => {
  return (
    <div>
      <div className="text-left max-w-[20%] m-2 p-6 bg-[#000000] drop-shadow-[0_15px_20px_rgba(54,45,101,0.7)] rounded-2xl">
        <div className="h-auto w-fit inline-block relative">
          <Image
            src={nftImage}
            alt="nft"
            className="flex rounded-xl justify-center align-middle"
          />
        </div>
        <div className="text-white ">My NFT</div>
        <div className="text-white ">1 ETH</div>
        <div className="flex text-white ">
          <div>Place a bid</div>
          <div>
            <FavoriteIcon
              sx={{ ":hover": { color: "pink", transition: ".5s    " } }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
