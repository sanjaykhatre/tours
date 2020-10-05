import React from "react";
import mapImg from "./map.jpg";

export default function Map() {
  return (
    <div className="mt-4 trek-map">
      <div className="container">
        <h2>Annapurna region trek map</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque mollitia nemo velit saepe vel repellat deleniti! Saepe veniam
          culpa aperiam nesciunt quod. Deleniti minima deserunt praesentium quia
          culpa! Deleniti nihil, excepturi voluptatem, in sunt totam corporis
          adipisci consequatur enim neque, quam odit laborum. Consequuntur magni
          sapiente harum. Atque, hic!
        </p>
        <div className="row">
          <div className=" mt-3 col-md-7">
            <img className="img-fluid" src={mapImg} alt=""></img>
          </div>
          <div className="mt-3 col-md-5 trek-name">
            <ul>
              <li style={{ color: "#BF202F" }}>annupurna trek circuit</li>
              <li style={{ color: "#BF202F" }}>annupurna trek circuit</li>
              <li style={{ color: "#BF202F" }}>annupurna trek circuit</li>
              <li style={{ color: "#BF202F" }}>annupurna trek circuit</li>
              <li style={{ color: "#BF202F" }}>annupurna trek circuit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
