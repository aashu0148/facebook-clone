import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel() {
  return (
    <div className="story-reel">
      <Story
        profile="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        name="Jason"
        background="https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
      />
      <Story
        profile="https://cdn.pixabay.com/photo/2020/10/05/10/51/cat-5628953__340.jpg"
        name="Kitty"
        background="https://cdn.pixabay.com/photo/2020/11/10/01/34/pet-5728249__340.jpg"
      />
      <Story
        profile="https://images.unsplash.com/photo-1525879000488-bff3b1c387cf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        name="Martha"
        background="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
      />
      <Story
        profile="https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        name="Agmas"
        background="https://images.unsplash.com/photo-1522196772883-393d879eb14d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
      />
    </div>
  );
}

export default StoryReel;
