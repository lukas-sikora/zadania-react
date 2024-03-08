import { useState } from "react";

const ToggleContent = ({ label, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>{label}</button>
      {isVisible && <div>{children}</div>}
    </div>
  );
};
export default ToggleContent;
