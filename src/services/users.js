import axios from "axios";

export const fetchUsers = async (pageIndex) => {
  const response = await axios({
    url: `https://reqres.in/api/users?page=${pageIndex}`,
    method: "GET",
  });
  const { data } = response.data;
  return data;
};

export const fetchUserById = async (userId) => {
  const response = await axios({
    url: `https://reqres.in/api/users/${userId}`,
    method: "GET",
  });
  const { data } = response.data;
  return data;
};
