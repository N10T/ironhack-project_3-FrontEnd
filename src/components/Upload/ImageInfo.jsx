// React
import React from "react";

// Style
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export default function ImageInfo({ clbk, tmpAvatar= ""}) {
  const fileInput = React.createRef();

  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <div className={"is-clickable icon-image"} title="change">
      {tmpAvatar && <img src={tmpAvatar} alt="info" id="preview" />}
      <input
        ref={fileInput}
        type="file"
        className="is-hidden"
        onChange={clbk}
        name="avatar"
      />
      <AddAPhotoIcon
      id="add-photo-logo"
        onClick={handleClick}
      />
    </div>
  );
}
