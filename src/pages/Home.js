import React,{useState,useEffect} from 'react'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { auth, db } from '../firebase-config'
function Home({isAuth}) {
    const [postLists, setPostLists] = useState([])
    const postsCollectionRef = collection(db,"posts")
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostLists(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
        }

        getPosts();
    }, [postLists])

    const deletePost = async (id) => {
        const postDoc = doc(db,"posts", id)
        await deleteDoc(postDoc);
        const postDeleted = postLists.filter((el)=> {
            return id != el.id
        })
        console.log(postDeleted)
    }

    return (
        <div className="homePage">
            {postLists.map((post)=> {
                return (    
                    <div className="post" key={post.id}>
                        <div className="postHeader">
                            <div className="title">
                                <h1>{post.title}</h1>
                            </div>
                            <div className="deletePost">    
                                {isAuth && post.author.id === auth.currentUser.uid && 
                                    <button onClick={()=> {deletePost(post.id)}}>&#128465;</button>
                                }
                            </div>
                        </div>
                        <div className="postTextContainer">
                            {post.postText}
                        </div>
                        <h3>@{post.author.name}</h3>
                    </div>
                )   
            })}
        </div>
    )
}

export default  Home;