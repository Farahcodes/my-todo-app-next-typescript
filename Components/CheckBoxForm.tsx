import React, { useState } from "react";

interface CheckBoxProps {
  handleCheck: (e: any) => void;
  isChecked: boolean;
}

const CheckBoxForm = ({ handleCheck, isChecked }: CheckBoxProps) => {
  return (
    <form>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
    </form>
  );
};

export default CheckBoxForm;
