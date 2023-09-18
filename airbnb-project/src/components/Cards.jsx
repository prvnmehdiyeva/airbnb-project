import React from "react"
import Card from "./Card"
import data from "../data"
function Cards() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />
  })
  return <section className="cards-list">{cards}</section>
}

export default Cards

// item={item} instead of {...item}
