import axios from "axios";


const baseUrl = "/houses";

export const getAll = async () => {
	return (await axios.get(baseUrl)).data;
};

export const getById = async (id) => {
	return (await axios.get(`${baseUrl}/${id}`)).data;
};

export const save = async (data) => {
	return (await axios.post(baseUrl, data)).data;
};

export const update = async (data) => {
	return (await axios.put(`${baseUrl}/${data.id}`, data)).data;
};

export const deleteById = async (id) => {
	return (await axios.delete(`${baseUrl}/${id}`)).data;
};
