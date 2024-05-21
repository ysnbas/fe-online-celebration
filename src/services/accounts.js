import cookies from "js-cookie";

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
      const errorData = await response.json();
      throw new Error(errorData.error || "Something went wrong");
    }

    const data = await response.json();
    cookies.set("email", data.email);
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
      const errorData = await response.json();
      throw new Error(errorData.error || "Something went wrong");
    }

    const data = await response.json();
    cookies.set("email", data.email);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProfileData = async () => {
  const accessToken = cookies.get("accessToken");
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/accounts/get_profile_data/`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Something went wrong");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
