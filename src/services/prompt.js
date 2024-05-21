export const getPrompts = async (params) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/prompt/prompts/`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("API yanıtı başarısız");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
