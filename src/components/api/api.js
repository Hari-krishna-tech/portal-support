import axios from "axios";

const getTokenUAT = async () => {
  try {
    const response = await axios.get(
      "https://digitalauthdev.olamnet.com/auth/realms/vega-manna-uat/protocol/protocol/openid-connect/token",
      {
        grant_type: "password",
        client_id: "od-vega-uat",
        client_secret: "c61923ad-fc26-4d37-8963-58c2ae31f065",
        username: "webadmin",
        password: "xpor123#",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching token:", error);
    return null;
  }
};

const getTokenPROD = async () => {
  try {
    const response = await axios.get(
      "https://digitalauth.olamnet.com/auth/realms/vega/protocol/protocol/openid-connect/token",
      {
        grant_type: "password",
        client_id: "od-vega",
        client_secret: "507d3ffa-45b0-47b6-b376-4c00eb25641d",
        username: "webadmin",
        password: "xpor123#",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching token:", error);
    return null;
  }
};

export const postUserRolesUat = async (userRoles) => {
  try {
    const token = await getTokenUAT();
    const response = await axios.post(
      "https://vega-manna-uat.olamdigital.com/x-master/user/roles",
      userRoles,
      {
        headers: {
          accept: "application/hal+json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting user roles:", error);
    return null;
  }
};

export const postUserRolesProd = async (userRoles) => {
  try {
    const token = await getTokenPROD();
    const response = await axios.post(
      "https://vega-prod.olamdigital.com/x-master/user/roles",
      userRoles,
      {
        headers: {
          accept: "application/hal+json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting user roles:", error);
    return null;
  }
};
