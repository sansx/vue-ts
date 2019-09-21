import { _axios as axios } from "../plugins/axios";

export const itemget = item => axios.get(`item/${item}.json?print=pretty`);

export default {
  itemget
};
