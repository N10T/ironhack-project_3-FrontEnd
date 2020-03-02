import React from "react";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export default function IconUser({ clbk, tmpAvatar= ""}) {
  const fileInput = React.createRef();

  const handleClick = () => {
    fileInput.current.click();
  };
  console.log(tmpAvatar)

  return (
    <div className={"is-clickable icon-image"} title="change image">
      {tmpAvatar && <img src={tmpAvatar} alt="info image" />}
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
