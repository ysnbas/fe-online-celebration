export const postLogin = async (params) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/accounts/login/`, {
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

export const postRegister = async (params) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/accounts/register/`, {
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