import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import "./TweetBox.css"
import db from "./firebase"
import firebase from "firebase"

function TweetBox() {
    const[tweetMessage,setTweetMessage]=useState("")
    const[tweetImage,setTweetImage]=useState("")

    const sendTweet=(e)=>{
        e.preventDefault()

        db.collection('posts').add({
            displayName:"Aisha Ali",
            userName:"aishalulu",
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            avatar:"https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
        })
        setTweetMessage("")
        setTweetImage("")
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://oromianeconomist.files.wordpress.com/2020/06/prominent-oromo-artist-hacaaluu-hundeessaa.png?w=300"/>
                    <input
                    onChange={(e)=>setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happening?" type="text" />
                </div>
                <input className="tweetBox__inputImage" 
                onChange={(e)=>setTweetImage(e.target.value)}
                value={tweetImage}
                placeholder='Enter your image URL(optional)' />
                <Button className="tweetBox__peepButton"
                onClick={sendTweet}
                type="submit"
                >Peep</Button>
            </form>
        </div>
    )
}

export default TweetBox
