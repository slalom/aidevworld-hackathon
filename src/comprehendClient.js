import axios from "axios";

const detectKey = async ({text}) => {
  let response = await axios.post(
    "https://1b08scliff.execute-api.us-west-2.amazonaws.com/default/apidetectkeyphrase",
    {text}
  )
  return response.data
}

export default {detectKey}