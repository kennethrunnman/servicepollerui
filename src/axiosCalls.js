import axios from 'axios';

export const axiosInstance = () => {
  return axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
    timeout: 1000,
  })
}

const fetchServices = () => {
  return axiosInstance()
      .get('services')
      .then(response => {return response})
      .catch(error => {
        console.log(error);
      })
}

const deleteServiceFromDb = (id) => {
  axiosInstance()
    .delete(`services/:${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
}

const addServiceToDb = (payload) => {
  axiosInstance()
    .post('services', payload)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error)
    })
    .then();
}

export const axiosCalls = {fetchServices, deleteServiceFromDb, addServiceToDb}