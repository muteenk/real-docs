import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
    const [string, setString] = useState()

    const generateString = async () => {
        alert("get string")
        // const response = await axios.post("", {
        //     //body
        // }
        // )
        // setString(response);
        // return response;
    }
    const navigate = useNavigate();

    const checkString = async () => {
        if (string == "") {
            alert("Enter Valid String")
            return;
        }
        const response = await axios.post("", { string });
        if (response) {
            navigate("/dashboard/doc");
            return
        }
        else {
            alert("Unvalid String")
            console.log("Unvalid String");
        }
    }
    return <div className="flex flex-col">

        <div className="2buttons flec flex-row bg-red-300">

            <div className="bg-amber-200 ">
                <button className="" onClick={generateString}>Host</button>
            </div>
            <div className="bg-orange-200">
                <button onClick={checkString}>Join</button>
            </div>

        </div>

        <div class className="displaystring h-1/2  ">
            {{ string } || "XXXXXXXXXXXXX"}
        </div>

        <div className="inputstring">
            <input type="text" onChange={(e) => {
                setString(e.target.value);
            }} />
        </div>

    </div>
}