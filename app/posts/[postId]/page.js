

export default async function Page({params}){
    const postID = params.postId

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`,{
        next:{
            revalidate: 10,
        }
    });
    const post = await response.json();
    return(
        <div  >
             <h2 style={{margin:"20px" , color:'blue'}} >Post details</h2>
           
           <div style={{width:'80%',backgroundColor:'teal',marginLeft:"20px"  ,padding:'10px' ,
            marginTop:'10px',borderRadius:'10px',color:'#fff'}}>
             <h4 >{post.title}</h4>
             <p>{post.body}</p>
           </div>
        </div>
    )
     

    
   
}