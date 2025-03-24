import React from 'react'

function Auth() {
  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  )
}

export default Auth