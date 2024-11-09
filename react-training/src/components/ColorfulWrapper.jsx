const ColorfulWrapper = ({ bgColor, textColor, children }) => {
  return (
    <div style={{ backgroundColor: bgColor, color: textColor }}>{children}</div>
  );
};

export default ColorfulWrapper;
