import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="image-container"></div>
      <div className="text-container">
        <h1 className="text-white">Gustavo Salle quiere recuperar el Uruguay de los Valores</h1>
            <p className="text-white">
            La clase política uruguaya le ha dado la espalda a su pueblo, son
              un grupo de mafiosos que responden a intereses globalistas que
              buscan destruir la soberanía de nuestra nación, robándole el
              futuro a nuestro hijos y nietos, es hora de levantarse y decirle
              "no va más" a esta clase de ineptos, incompetentes y corruptos,
              que han estado prendidos del aparato estatal por demasiado tiempo.
              Llegó la hora de recuperar la soberanía a nuestro país y de comenzar
              a construir sueños en los que podamos volver a creer con orgullo.
            </p>
            <p className="text-white">
              <span className="text-warning h4">Sumate a militar:</span> El
              esfuerzo de devolverle el orgullo y los valores que hicieron
              grande a nuestro país es algo que no puede hacer una sola persona,
              vos sos fundamental para lograrlo, sumate a la lista de militantes
              que ya están haciendo historia, la mejor historia para nuestra
              nación.
            </p>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Dirección de email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Localidad donde vivís"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sumate +
              </button>
            </form>
      </div>
    </div>
  );
};

export default Home;