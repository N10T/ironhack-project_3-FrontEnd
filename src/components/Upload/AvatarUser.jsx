// React
import React from "react";

// Style
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export default function IconUser({ clbk, avatar= ""}) {
  const fileInput = React.createRef();

  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <div className={"is-clickable icon-avatar"} title="change avatar">
      {avatar && <img src={avatar} alt="user avatar" />}
      <input
        ref={fileInput}
        type="file"
        className="is-hidden"
        onChange={clbk}
      />
      <AddAPhotoIcon
        onClick={handleClick}
      />
    </div>
  );
}
