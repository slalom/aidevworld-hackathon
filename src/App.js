import React from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';


//function createAndShowRateCard(url, data) {
//    return fetch(url, {
//      method: "POST",
//      body: JSON.stringify(data),
//      headers: {
//        "Content-Type": "application/json",
//        "Authorization": "Bearer 1fb5853d-2f0a-478f-b83d-94b3c8561349_9732a9ea-2191-4180-a657-c5a2c0d19046"
//      },
//      credentials: "same-origin"
//    }).then(function(response) {
//      console.log(
//      response,
//      response.status,     //=> number 100–599
//      response.statusText, //=> String
//      response.headers,    //=> Headers
//      response.url  )        //=> String
//
//      return response.json()
//    }, function(error) {
//      console.log(error.message) //=> String
//    })
//}
//
//
//function App() {
// return createAndShowRateCard("https://api.evenfinancial.com/leads/rateTables",
//).then(
//    (something) => {
//    return (
//               <div className="">
//                 <header className="">
//                 <div>{something}</div>
//                   <form>
//                     <label>
//                       Name:
//                       <input type="text" name="name" />
//                     </label>
//                     <input type="submit" value="Submit" />
//                   </form>
//                 </header>
//               </div>
//             )
//             }
//  )
//
//


export default class App extends React.Component {
    state = {
       users: []
    };
    componentDidMount() {
       this.getRateAndLead();
    }
    token = "1fb5853d-2f0a-478f-b83d-94b3c8561349_9732a9ea-2191-4180-a657-c5a2c0d19046"


    config = {
        headers: {'Authorization': "Bearer " + this.token}
    };

    bodyParameters =  {
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

    getRateAndLead = () => {
        axios.post(
        "https://api.evenfinancial.com/leads/rateTables",
          this.bodyParameters,
          this.config
        ).then((response) => {
        debugger;
            this.setState({
                leadUuid: response.data.leadUuid,
                loanOffers: response.data.loanOffers,
                savingsOffers: response.data.savingsOffers
             })
            console.log(this.state)
        }).catch((error) => {
          console.log(error)
        });
    }

    render() {
       return (
           <div>
            HELLO Dan Siwiec ( Sheveeitz)
            Here is  you rate - {this.state.leadUuid}

         <Button variant="contained" color="primary">
              Hello World
            </Button>
        </div>
       );
     }
}