import { useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import axios from "axios";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

interface Car {
    id: string;
    maker: string;
    model: string;
    status: boolean;
    price: number;
    img: string;
}

const CarDetail = () => {

    const navigate = useNavigate();
    const id = window.location.pathname.split("/")[3];
    const [car, setCar] = useState<Car | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Car>(`http://localhost:3000/car/${id}`,{
                    headers: {
                        Authorization: localStorage.getItem("x-var"),
                    },
                });
                setCar(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    useTitle(car ? `${car.maker} ${car.model}` : "");

    const gotoAgreement = () => {
        navigate(`/dashboard/car-details/${id}/agreement`);
    };

    return (
        <div className="py-20">
            {car ? (
                <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <div>
                                <p className="border rounded-xl mt-1 py-1 px-2 text-sm font-bold text-gray-500">{car.status ? "🟢 Available" : "🔴 Not Available"}</p>
                            </div>
                            <div>
                                <img src={car.img} alt={car.model} className="w-[50rem] h-[30rem]" />
                            </div>
                            <div className="py-4">
                                <h1 className="text-2xl font-semibold">{car.maker} {car.model}</h1>
                                <p>Start from : ₹{car.price} per day</p>
                            </div>
                        </div>
                        <div className="pb-8">
                            <button className={`bg-slate-300 hover:bg-slate-200 font-bold py-2 px-10`} onClick={gotoAgreement}>
                                Rent Now
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default CarDetail;