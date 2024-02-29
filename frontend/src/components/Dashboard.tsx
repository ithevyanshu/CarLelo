import { useEffect, useState } from "react";
import axios from "axios";
import useTitle from "../hooks/useTitle";
import Loading from "./Loading";

const Dashboard = () => {
  useTitle("Dashboard");
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/car");
        const data = response.data;
        setCars(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="pt-20 mx-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {cars.map((car: { id: string, maker: string, model: string, status: string, price: number, img: string }) => (
              <div key={car.id} className="flex flex-col items-center border-2 rounded-md shadow-md">
                <div className="flex flex-col items-center">
                  <div>
                    <p className="border rounded-xl mt-1 py-1 px-2 text-sm font-bold text-gray-500">{car.status ? "🟢 Available" : "🔴 Not Available"}</p>
                  </div>
                  <div>
                    <img src={car.img} alt={car.model} className="w-[25rem] h-[15rem]" />
                  </div>
                  <div className="py-4">
                    <h1 className="text-2xl font-semibold">{car.maker} {car.model}</h1>
                    <p>Start from : ₹{car.price} per day</p>
                  </div>
                </div>
                <div className="pb-8">
                  <button className={`bg-slate-300 hover:bg-slate-200 font-bold py-2 px-10  ${!car.status && 'cursor-not-allowed'}`} disabled={!car.status}>
                    {car.status ? "Rent Now" : "(Not Available)"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
