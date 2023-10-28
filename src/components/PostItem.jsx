import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../context/Context";

export function PostItem({ id, title, descr }) {
    const deletePost = useContext(Context);

    return (
        <div className="postItem">
            <h2>{title}</h2>
            <p>{descr}</p>
            <button className="delete" onClick={() => deletePost(id)}>
                <span></span>
                <span></span>
            </button>
        </div>
    )
}