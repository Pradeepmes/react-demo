import { useEffect, useState } from "react"


export const PostList=()=>{
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>response.json())
        .then((data)=> setPosts(data))
        .catch((err) => {
            console.error("Failed to fetch posts:", err);
        });
    },[])

    return(
        <div>
            <ul>
               {
                posts.map((post)=>{
                    return <li>{post.title}</li>
})}
            </ul>
        </div>
    )
}