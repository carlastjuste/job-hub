
import axios from "axios";

const BASEURL ="https://www.themuse.com/api/public/jobs?page=";


export default {
  getJobs: function(pageNumber) {
    return axios.get(BASEURL + pageNumber);
  }
};
