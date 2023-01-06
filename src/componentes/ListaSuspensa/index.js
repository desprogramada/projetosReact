import "./ListaSuspensa.css";
const ListaSuspensa = (props) => {
  return (
    <div className="listaSuspensa">
      <label>{props.label}</label>
      <select required={props.required}>
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
