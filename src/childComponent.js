import React, { forwardRef, useImperativeHandle } from "react";

const ChildComponent = forwardRef((props, ref) => {
  //   const f1 = () => {
  //     console.log("hellow world");
  //   };
  useImperativeHandle(ref, () => ({
    f1() {
      console.log(props.value + "test data priniting");
    },
  }));

  return <div>childComponent</div>;
});

export default ChildComponent;
