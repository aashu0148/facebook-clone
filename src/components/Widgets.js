import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets_container">
      <div className="widgets">
        <div className="Widgets_sponsered">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhellocoder&tabs=timeline&width=302&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="302"
            height="1000"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
