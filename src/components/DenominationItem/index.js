// Write your code here

import './index.css'

const DenominationItem = props => {
  const {DenominationItems, withDraw} = props
  const {value} = DenominationItems

  const valueClick = () => {
    withDraw(value)
  }

  return (
    <li>
      <div className="list-container">
        <button onClick={valueClick} className="button" type="button">
          {value}
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
