import axios from "../plugins/axios"

export const testget = () => axios.get("topstories.json?print=pretty")


export default  {
  testget
}