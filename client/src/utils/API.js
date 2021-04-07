
import axios from "axios";

const BASEURL ="https://www.themuse.com/api/public/jobs?page=";
const pageNumber = "1";


export default {
  getJobs: function() {
    return axios.get(BASEURL + pageNumber);
  }
};
