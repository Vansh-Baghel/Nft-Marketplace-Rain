import Image from "next/image";
import React from "react";
import nftImage from "../assets/nftImage.jpeg";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = () => {
  return (
    <div>
        <div className="text-xl text-white text-center font-bold">My NFTS</div>

      <div className="flex justify-center align-middle flex-wrap">
        <div className="full-card-box-1 max-w-[25%]">
          <div
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "1rem",
              color: "rgb(197, 38, 157)",
            }}
            className="text-left m-4 p-6 drop-shadow-[0_15px_20px_rgba(54,45,101,0.7)] rounded-2xl "
          >
            <div className="my-4">
              <div className="relative h-[100%] w-[100%]">
                <Image
                  src={nftImage}
                  alt="nft"
                  className="card-image-1 flex rounded-xl justify-center align-middle"
                />
              </div>
            </div>
            <div className=" mt-2">
              <div className=" text-white font-[800]">My NFT</div>
              <div className=" text-[#A2A2A2]">1 ETH</div>
              <div className="flex justify-between ">
                <div className="text-[#C5269D]">Place a bid</div>
                <div>
                  <FavoriteIcon
                    sx={{
                      color: "grey",
                      backgroundColor: "#242435",
                      ":hover": { color: "#f234c2", transition: ".1s" },
                      ":active": { transform: "scale(1.3)" },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="full-card-box-2 max-w-[25%]">
          <div
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "1rem",
              color: "rgb(197, 38, 157)",
            }}
            className="text-left m-4 p-6 drop-shadow-[0_15px_20px_rgba(54,45,101,0.7)] rounded-2xl "
          >
            <div className="my-4 ">
              <div className="relative h-[100%] w-[100%]">
                <Image
                  src={nftImage}
                  alt="nft"
                  className="card-image-2 flex rounded-xl justify-center align-middle"
                />
              </div>
            </div>
            <div className=" mt-2">
              <div className=" text-white font-[800]">My NFT</div>
              <div className=" text-[#A2A2A2]">1 ETH</div>
              <div className="flex justify-between ">
                <div className="text-[#C5269D]">Place a bid</div>
                <div>
                  <FavoriteIcon
                    sx={{
                      color: "grey",
                      backgroundColor: "#242435",
                      ":hover": { color: "#f234c2", transition: ".1s" },
                      ":active": { transform: "scale(1.3)" },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="full-card-box-3 max-w-[25%]">
          <div
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "1rem",
              color: "rgb(197, 38, 157)",
            }}
            className="text-left m-4 p-6 drop-shadow-[0_15px_20px_rgba(54,45,101,0.7)] rounded-2xl "
          >
            <div className="my-4 ">
              <div className="relative h-[100%] w-[100%]">
                <Image
                  src={nftImage}
                  alt="nft"
                  className="card-image-3 flex rounded-xl justify-center align-middle"
                />
              </div>
            </div>
            <div className=" mt-2">
              <div className=" text-white font-[800]">My NFT</div>
              <div className=" text-[#A2A2A2]">1 ETH</div>
              <div className="flex justify-between ">
                <div className="text-[#C5269D]">Place a bid</div>
                <div>
                  <FavoriteIcon
                    sx={{
                      color: "grey",
                      backgroundColor: "#242435",
                      ":hover": { color: "#f234c2", transition: ".1s" },
                      ":active": { transform: "scale(1.3)" },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="full-card-box-4 max-w-[25%]">
          <div
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "1rem",
              color: "rgb(197, 38, 157)",
            }}
            className="text-left m-4 p-6 drop-shadow-[0_15px_20px_rgba(54,45,101,0.7)] rounded-2xl "
          >
            <div className="my-4 ">
              <div className="relative h-[100%] w-[100%]">
                <Image
                  src={nftImage}
                  alt="nft"
                  className="card-image-4 flex rounded-xl justify-center align-middle"
                />
              </div>
            </div>
            <div className=" mt-2">
              <div className=" text-white font-[800]">My NFT</div>
              <div className=" text-[#A2A2A2]">1 ETH</div>
              <div className="flex justify-between ">
                <div className="text-[#C5269D]">Place a bid</div>
                <div>
                  <FavoriteIcon
                    sx={{
                      color: "grey",
                      backgroundColor: "#242435",
                      ":hover": { color: "#f234c2", transition: ".1s" },
                      ":active": { transform: "scale(1.3)" },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
