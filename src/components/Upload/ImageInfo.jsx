import React from "react";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export default function IconUser({ clbk, avatar= ""}) {
  const fileInput = React.createRef();

  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <div className={"is-clickable icon-image"} title="change">
      {avatar && <img src={avatar} alt="info" />}
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
