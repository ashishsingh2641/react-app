import React from "react";

const TextInput = ({ value, hanldeChange, updateBorder }) => {
  const style = {
    border: `1px solid ${updateBorder}`,
    outline: "none",
  };

  console.log(updateBorder);
  return (
    <>
      <input
        style={style}
        type="text"
        value={value}
        onChange={hanldeChange}
        name="textInput"
      />
    </>
  );
};

export default TextInput;
