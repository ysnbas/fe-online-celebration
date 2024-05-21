export const getGeneratedData = async () => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/generated/generated_data`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("API yanıtı başarısız");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
