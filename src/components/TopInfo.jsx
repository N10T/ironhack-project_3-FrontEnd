import React from "react";
import Avatar from "./Avatar";
import InfoCategorie from "./InfoCategorie";

export default function TopInfo() {
  return (
    <div className="user-info flex">
      <Avatar />
      <div>
        <p>Jean</p>
        <p>03/12/2019</p>
      </div>
      <InfoCategorie />
    </div>
  );
}
