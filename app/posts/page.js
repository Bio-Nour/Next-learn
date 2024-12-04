import next from 'next';
import React from 'react';
import Link from "next/link";
export default async function Page() {


    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 10 },
    })
    const posts = await response.json();
    const postsCount = posts.map((post) => {
        return (
            <Link style={{display:'flex',justifyContent:'center'}} href={`/posts/${post.id}`}>
                <div style={{width:'80%',backgroundColor:'teal',padding:'10px' 
                ,marginTop:'10px',borderRadius:'10px',color:'#fff'}}
                    
                    key={post.id}>
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                </div>

            </Link>
        )


    })


    return (

        <div >
            {postsCount}

        </div>


    );
}




