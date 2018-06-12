import React, { Component } from 'react';
import '../css/customers.css';

export default class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h2>Inicie sesión</h2>
        <form>
          <label>
            Usuario: <input type="text" name="user" />
          </label>
          <label>
            Contraseña: <input type="password" name="password" />
          </label>
          <input type="submit" value="Iniciar sesión" />
        </form>
      </div>
    );
  }
}
