import React from 'react'
import Form from './Form'
import ListDisplay from './ListDisplay'
import ListDisplay2 from './ListDisplay2'

const Home = () => {
  type listType = {
    name: string
  }
  type quan = {
    value: number
  }
  const listdisplay: listType[] = [{ name: 'felix' }, { name: 'Liwi' }]
  // const qty: quan = { value: 2 }
  const qty: number = 1

  return (
    <div>
      <h1>To Do Display</h1>
      <Form />
      <ListDisplay />
      <ListDisplay2 qty={qty} list={listdisplay} />
    </div>
  )
}

export default Home
