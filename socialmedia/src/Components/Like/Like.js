import React from 'react'
import { useState } from 'react'
import './Like.css'
export default function Like() {
 const [liked, setLiked] = useState(false)
 const [like, setLike] = useState(0)



 const likeHandler = () => {

  setLike(prevLike => prevLike + 1)
  setLiked(true)

 }
 const dislikeHandler = () => {
  setLike(prevLike => prevLike - 1)
  setLiked(false)
 }
 return (
  <div>
   Likes {like}
   {liked ? (
    <div>
     < button className='dislike-button' onClick={dislikeHandler}>Dislike</button>
    </div>
   ) : (
    <div>
     <button className='like-button' onClick={likeHandler}>Like</button>
    </div>

   )


   }
  </div>
 )
}
