import React from 'react';

import './index.css';

function Post(props) {
  console.log(props)
  return <article>
    <h1>{props.title}</h1>
    <h2>{props.author}</h2>
    <text>{props.text}</text>
    <ul>{props.highlights}</ul>
    <img src={props.image.link}/>
  </article>;
}

export default Post;
//title, date, author, text, highlights, image