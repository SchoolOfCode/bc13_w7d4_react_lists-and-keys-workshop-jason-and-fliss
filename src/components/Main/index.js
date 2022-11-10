import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

// use .map to loop through posts 
// each item within array should return component 


function Main() {
  const [posts, setPosts] = useState(samplePosts);
  return <main id="main">{posts.map((posty) => {return <Post key={posty.postId} title={posty.title} date={posty.date} author={posty.author} text={posty.text} highlights={posty.highlights} image={posty.image}/>})}</main>


  // return <main id="main">{posts.map((posty) => {return <Post key={posty.postId} title = {props.title} date ={props.date} author = {props.author} text = {props.text} highlights = {props.highlights} image = {props.image}/>})}</main>;
}

export default Main;

// const listPosts = posts.map((posts) =>  <div text=
//return <main id="main">{posts.map((posts) => <Post key={posts.postId} />)}</main>
// title, date, author, text, highlights, image