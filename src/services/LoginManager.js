export default class LoginManager {
  constructor(apiUrl) {
    this.apiUrl = `${process.env.API_HOSTNAME}${apiUrl}`;
  }
  encryptPassword(passwordToEncrypt) {
    console.log(passwordToEncrypt);
  }

  checkPassword(passwordToCheck, storedPassword) {
    return originalPassword === passwordToCheck ? true : false;
  }

  async verifyUser(credentials) {
    try {
      const options = {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(credentials),
      };

      const response = await fetch(this.apiUrl, options);

      if (response.ok) {
        const user = await response.json();

        if (user) {
          console.log(user);
          return !this.checkPassword(credentials.password, user.password)
            ? "Usuario y/o contraseña incorrectos"
            : "Usuario encontrado";
        }
      } else {
        console.error("Error al obtener el usuario:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }
}
