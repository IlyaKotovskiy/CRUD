import './styles.scss';
import axios from 'axios';
import { Button } from "@mui/material";
import { PostList } from "./components/PostList";
import { useEffect, useState } from "react";
import { Modal } from "./components/Modal/Modal";
import { Context } from "./context/Context";

export function App() {
    const [ posts, setPosts ] = useState([]);
    const [ modal, setModal ] = useState(false);

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    const deletePost = id => {
        const updatedPosts = posts.filter(post => post.id !== id);

        // Delete (cruD)
        axios.delete(`https://653aaaf62e42fd0d54d44c6a.mockapi.io/elements/${ id }`);
        return setPosts(updatedPosts);
    }

    const addPost = (title, descr) => {
        const newPost = {
            id: posts.length + 1,
            title,
            body: descr
        }

        // Create (Crud)
        axios.post('https://653aaaf62e42fd0d54d44c6a.mockapi.io/elements', newPost);
        setModal(false);
        return setPosts([ newPost, ...posts ]);
    }

    // Read (cRud)
    useEffect(() => {
        axios.get('https://653aaaf62e42fd0d54d44c6a.mockapi.io/elements')
            .then(res => setPosts(res.data));
    }, []);

    return (
        <Context.Provider value={ deletePost }>
            <div className="container">
                { modal && <Modal
                    addPost={ addPost }
                    close={ closeModal }/>
                }
                <header>
                    <h1>Posts</h1>
                    <h2>Всего постов: { posts.length }</h2>
                    <Button variant="outlined" onClick={ openModal }>Add New Post</Button>
                </header>
                { posts.length ? <PostList posts={ posts }/> : <p>Нету постов</p> }
            </div>
        </Context.Provider>
    )
}