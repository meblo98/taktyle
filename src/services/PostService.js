import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api"; // Remplace par l'URL de ton backend

export const getPosts = async () => {
	try {
		const response = await axios.get(`${API_URL}/posts`);
        console.log(response);

		return response.data; // Retourne les données du backend
	} catch (error) {
		console.error("Erreur lors de la récupération des posts :", error);
		return [];
	}
};
