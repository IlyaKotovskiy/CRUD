import { PostItem } from "./PostItem";

export function PostList({ posts }) {
    return (
        <div className="postList">
            {posts.map(post => <PostItem
                key={post.id}
                id={post.id}
                title={post.title}
                descr={post.body}
            />)}
        </div>
    )
}