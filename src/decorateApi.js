export default data => {
  let savingsOffers = data.savingsOffers[0]
  data.savingsOffers = [savingsOffers, savingsOffers, savingsOffers, savingsOffers]
  return data
}