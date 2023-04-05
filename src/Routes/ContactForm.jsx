import { useState } from "react";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    if (formData.name.length < 5) {
      errors.name = "El nombre debe tener al menos 5 caracteres";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Por favor ingrese un email válido";
    }
    if (Object.keys(errors).length > 0) {
      setHasError(true);
      setFormErrors(errors);
    } else {
      setFormSubmitted(true);
      setHasError(false);
    }
  };

  return (
    <div className="contact-container">
      {!formSubmitted ? (
        <form onSubmit={handleSubmit} className='form-contact'>
          <div>
            <label htmlFor="name" className="label-form">Nombre completo:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && <p className="error">{formErrors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="label-form">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
          </div>
          <div className="form-submit-button">
            {hasError && <p className="error-general">Por favor verifique su información nuevamente</p>}
            <button className="button" type="submit">Enviar</button>
          </div>
        </form>
      ) : (
        <h1>
          Gracias {formData.name}, te contactaremos lo antes posible vía email ♥
        </h1>
      )}
    </div>
  );
}
