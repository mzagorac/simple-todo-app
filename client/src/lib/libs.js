import axios from "axios";

export const getAll = url => {
  return axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(err => console.log(err));
};

export const create = (url, data) => {
  return axios
    .post(url, data)
    .then(response => response.data)
    .catch(err => console.log(err));
};

export const remove = (url, id) => {
  return axios.delete(`${url}/${id}`);
};

export const edit = (url, data) => {
  return axios.put(`${url}/${data._id}`, data);
};
