const bofa = template => {
  let copy = JSON.parse(JSON.stringify(template))
  copy.partner.imageUrl = 'https://media.bizj.us/view/img/11138963/new-bank-of-america-logo*750xx3000-1688-0-356.jpg'
  return copy
}

const chase = template => {
  let copy = JSON.parse(JSON.stringify(template))
  copy.partner.imageUrl = 'http://graphicsmagazine.com/wp-content/uploads/2012/06/chaselogo2015-300x204.jpg'
  return copy
}

const capitalOne = template => {
  let copy = JSON.parse(JSON.stringify(template))
  copy.partner.imageUrl = 'https://awardwallet.com/blog/wp-content/uploads/2017/04/Capital-One-Logo-Featured.jpg'
  return copy
}

export default data => {
  let savingsOffer = data.savingsOffers[0]
  data.savingsOffers = [savingsOffer, bofa(savingsOffer), chase(savingsOffer), capitalOne(savingsOffer)]
  return data
}