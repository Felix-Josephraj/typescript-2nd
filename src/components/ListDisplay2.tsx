type listType = {
  name: string
}[]

// const ListDisplay2: React.FC<{ qty: number }> = (props) => {
//   console.log('List display')
//   console.log(props)
//   return <></>
// }

// export default ListDisplay2
type ShoppingCartProps = {
  qty: number
  list: {
    name: string
  }[]
}
// export default function ListDisplay2({ qty }: ShoppingCartProps) {
//   return null
// }
const ListDisplay2 = ({ qty, list }: ShoppingCartProps) => {
  console.log(list)
  console.log(qty)

  return null
}

export default ListDisplay2
