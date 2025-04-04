import axios from "axios";

const API_URL = "http://localhost:5067/api/auth/login";

const login = async (documento) => {
  const response = await axios.post(`${API_URL}`, {
    documento,
  });

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    return response.data;
  }
  throw new Error("Error en la autenticación");
};

const logout = () => {
  localStorage.removeItem("token");
};

const authService = { login, logout };

export default authService;
