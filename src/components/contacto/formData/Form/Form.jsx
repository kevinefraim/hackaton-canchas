import "./Form.css";

const Form = () => {
  return (
    <form className="form">
      <h4>Contacto</h4>
      <div className="form-group">
        <label for="exampleInputName">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          placeholder="Ingrese su nombre"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputEmail1">Email </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Ingrese su email"
        />
      </div>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Mensaje</label>
        <textarea
          placeholder="Ingrese su mensaje"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
