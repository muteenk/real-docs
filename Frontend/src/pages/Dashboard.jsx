import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const [string, setString] = useState("");

    const generateString = async () => {
        alert("get string");
        // const response = await axios.post("", {
        //     // body
        // });
        // setString(response);
        // return response;
    }

    const navigate = useNavigate();

    const checkString = async () => {
        if (string === "") {
            alert("Enter Valid String");
            return;
        }
        const response = await axios.post("", { string });
        if (response) {
            navigate("/dashboard/doc");
            return;
        } else {
            alert("Invalid String");
            console.log("Invalid String");
        }
    }

    return (
        <div className="flex flex-col h-screen p-4 bg-gray-100">
            <div className="flex flex-row space-x-4 bg-red-300 p-4 rounded-md mb-4">
                <div className="bg-amber-200 p-2 rounded-md">
                    <button
                        className="px-4 py-2 text-white font-semibold hover:bg-amber-300"
                        onClick={generateString}
                    >
                        Host
                    </button>
                </div>
            </div>

            <div className="flex justify-center items-center h-1/2 bg-white border border-gray-300 rounded-md text-2xl font-bold text-gray-700 mb-4">
                {string || "Paste the String below"}
            </div>

            <div className="flex flex-col items-center space-y-4 h-1/2">
                <input
                    type="text"
                    className="px-4 py-2 w-full max-w-md border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setString(e.target.value)}
                    placeholder="Enter a string"
                />
                <div className="bg-orange-200 p-2 rounded-md">
                    <button
                        className="px-4 py-2 text-white font-semibold hover:bg-orange-300"
                        onClick={checkString}
                    >
                        Join
                    </button>
                </div>
            </div>
        </div>
    );
}
