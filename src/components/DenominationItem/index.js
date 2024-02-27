// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, adding} = props
  const {value} = denominationsList
  const addingButton = () => {
    adding(value)
  }
  return (
    <li>
      {' '}
      <button type="button" onClick={addingButton}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
