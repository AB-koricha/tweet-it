import { Avatar } from '@material-ui/core'
import React,{ forwardRef } from 'react'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import "./Post.css"
const Post = forwardRef(
    ({ displayName, username, verified, text, image, avatar,timestamp }, ref) => {
      return (
        <div className="post" ref={ref}>
          <div className="post__avatar">
            <Avatar src={avatar} />
          </div>
          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  {displayName}{" "}
                  <span className="post__headerSpecial">
                    {verified && <VerifiedUserIcon className="post__badge" />} @
                    {username}
                  </span>
                  <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </h3>
              </div>
              <div className="post__headerDescription">
                <p>{text}</p>
              </div>
            </div>
            <img src={image} alt="" />
            <div className="post__footer">
              <ChatBubbleOutlineIcon fontSize="small" />
              <RepeatIcon fontSize="small" />
              <FavoriteBorderIcon fontSize="small" />
              <PublishIcon fontSize="small" />
            </div>
          </div>
        </div>
      );
    }
  );
                

export default Post
