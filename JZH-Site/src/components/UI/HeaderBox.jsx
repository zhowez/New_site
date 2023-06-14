import style from "./HeaderBox.module.css";

const HeaderBox = (props) => {
  return (
    <div className={`${style.box} ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
};

export default HeaderBox;
