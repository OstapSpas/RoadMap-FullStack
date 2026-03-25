import { useState } from "react";

export default function Liked() {

    const [liked, setLiked] = useState(false);
    let status = "Not liked";

    if(liked){
        return status = "Liked";
    }

    return (
        <>
            <h2>Status: {status} </h2>
            <button onClick = {() => setLiked(!liked)}>button Liked</button>
        </>
    );
}