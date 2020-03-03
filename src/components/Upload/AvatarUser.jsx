// React
import React from "react";

// Style
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export default function IconUser({ clbk, tmpAvatar= ""}) {
  const fileInput = React.createRef();

  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <div className={"is-clickable icon-avatar"} title="change avatar">
      {tmpAvatar && <img src={tmpAvatar} alt="user avatar" />}
      <input
        ref={fileInput}
        type="file"
        className="is-hidden"
        onChange={clbk}
        name="avatar"
      />
      <AddAPhotoIcon
        onClick={handleClick}
      />
    </div>
  );
}
