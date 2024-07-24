import axios from "axios";

export const getBook = async (id: string) => {
    try {
      const response = await axios.get(`https://sipuron.onrender.com/book/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error fetching book data:", error);
      throw error;
    }
  };