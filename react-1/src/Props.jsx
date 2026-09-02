import './App.css';

function Prop({name, sec , id}) {


  return (
    <>
      <h3>Name: {name}</h3>
      <h3>Section: {sec}</h3>
      <h3>ID: {id}</h3>
    </>
  );
}

export default Prop;