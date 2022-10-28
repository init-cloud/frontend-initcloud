import axios from "axios";

export const getVis = async() => {
	return axios.get('http://localhost:8080/vis').then(res => res.data);
}