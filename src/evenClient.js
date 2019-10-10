import axios from "axios";

const token = "1fb5853d-2f0a-478f-b83d-94b3c8561349_9732a9ea-2191-4180-a657-c5a2c0d19046"

const config = {
  headers: { 'Authorization': "Bearer " + token }
}

const bodyParameters = {
  "productTypes": [
    "savings"
  ],
  "personalInformation": {
    "state": "NY",
    "zipcode": "10010"
  },
  "creditInformation": {
    "providedCreditRating": "excellent",
    "providedNumericCreditScore": 750
  },
  "savingsInformation": {
    "minDepositAmount": 1000
  },
  "clientTags": {
    "hello": [],
    "something": []
  }
}

const createLead = e => {
  return axios.post(
    "https://api.evenfinancial.com/leads/rateTables",
    bodyParameters,
    config
  )
}

export default {createLead}