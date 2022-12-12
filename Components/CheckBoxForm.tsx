import React, { useState } from "react";

interface CheckBoxProps {
  isChecked: boolean;
}

const CheckBoxForm = ({ isChecked }: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <form>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </form>
  );
};

export default CheckBoxForm;
