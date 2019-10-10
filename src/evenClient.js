import axios from "axios";
import decorateApi from './decorateApi'

const token = "1fb5853d-2f0a-478f-b83d-94b3c8561349_9732a9ea-2191-4180-a657-c5a2c0d19046"

const config = {
  headers: { 'Authorization': "Bearer " + token }
}

const createLead = async ({state, zip, score}) => {
  const body = {
    "productTypes": [
      "savings"
    ],
    "personalInformation": {
      "state": state,
      "zipcode": zip
    },
    "creditInformation": {
      "providedCreditRating": score.label,
      "providedNumericCreditScore": score.value
    },
    "savingsInformation": {
      "minDepositAmount": 1000
    }
  }

  let response = await axios.post(
    "https://api.evenfinancial.com/leads/rateTables",
    body,
    config
  )
  return decorateApi(response.data)
}

export default {createLead}