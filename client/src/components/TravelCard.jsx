import React from "react";
import { Link } from "react-router-dom";

const TravelCard = (props) => {
  return (
    <div className="flex flex-row gap-6">
      {/* left side */}
      <div>
        <img
          className="rounded-2xl min-w-[40vh] max-w-[40vh] max-h-[40vh]"
          src={props.tripInfo.photos[0]}
          alt="image"
        />
      </div>

      {/* right side */}
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold">{props.tripInfo.title}</h1>
        <div>
          <p className="text-left text-slate-500">
            {props.tripInfo.description.substring(0, 99)}...
          </p>
        </div>
        <Link
          className="underline"
          to={props.tripInfo.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          อ่านต่อ
        </Link>

        <div className="flex flex-row gap-4 text-slate-500">
          หมวด{" "}
          {props.tripInfo.tags.map((item, index) => {
            return (
              <div key={index} className="flex flex-row gap-1">
                {index === props.tripInfo.tags.length - 1 ? <p>และ</p> : ""}
                <p
                  className="underline cursor-pointer"
                  onClick={() => {
                    tagClick();
                  }}
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div>
        <div className="max-w-[20vh] flex flex-row gap-10 mt-6">
          {props.tripInfo.photos.map((item, index) => {
            return index !== 0 ? (
              <img className="rounded-2xl" key={index} src={item} alt="" />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
