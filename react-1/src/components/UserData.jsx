import { useState } from "react";

function UserData() {
    const [data, setData] = useState({
        name: "Madhavika",
        age: 19,
        city: "Mathura"
    });

    function updateName() {
        setData({
            ...data,
            name: "GLA"
        });
    }

    return (
        <>
            <h3>Name: {data.name}</h3>
            <h3>Age: {data.age}</h3>
            <h3>City: {data.city}</h3>

            <button onClick={updateName}>Update Name</button>
        </>
    );
}

export default UserData;