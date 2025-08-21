import "./App.css";
import TravelCard from "./components/TravelCard";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [trips, setTrips] = useState([]);
  const [keyword, setKeyword] = useState("");

  const endpoint = "http://localhost:4001";

  const getallData = async () => {
    try {
      await axios
        .get(`${endpoint}/trips?keywords=${keyword}`)
        .then(function (response) {
          setTrips(response.data.data);
          //console.log(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {}
  };

  useEffect(() => {
    getallData();
  }, [keyword]);

  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-sky-600">
            เที่ยวไหนดี
          </h1>

          <div className="mx-auto mt-6 max-w-3xl flex items-center border-b border-slate-300 justify-between text-slate-500">
            <span className="text-sm md:text-base ">ค้นหาที่เที่ยว</span>

            <input
              className="mt-3 border-b border-slate-200 ml-4 w-[60%] rounded-md bg-transparent px-2 py-1  placeholder:text-slate-400 focus:outline-none"
              placeholder="หาที่เที่ยวแล้วไปกัน..."
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          <div className="mt-10">
            {trips.map((item, index) => {
              return (
                <div key={index} className="mb-10">
                  <TravelCard tripInfo={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
