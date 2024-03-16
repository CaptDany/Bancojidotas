import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserModification() {
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    email: '',
    // Otros campos de usuario que necesites modificar
  });

  useEffect(() => {
    // Cargar los datos del usuario al montar el componente
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Suponiendo que el id del usuario esté disponible en algún contexto
      //const userId = getUserId(); // Esta función debe ser definida para obtener el ID del usuario actual
      const response = await axios.get(`/api/users/${userId}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  };

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      //const userId = getUserId(); // Obtener el ID del usuario actual
      await axios.put(`/api/users/${userId}`, userData);
      // Puedes mostrar un mensaje de éxito o redireccionar a otra página después de la modificación
      console.log('Datos del usuario modificados con éxito');
    } catch (error) {
      console.error('Error al modificar los datos del usuario:', error);
    }
  };

  return (
    <div>
      <h1>Modificación de Datos del Usuario</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Nombre" value={userData.name} onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Correo Electrónico" value={userData.email} onChange={handleInputChange} required />
        {/* Agrega más campos según las necesidades de tu aplicación */}
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default UserModification;