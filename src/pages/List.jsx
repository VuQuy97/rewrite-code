import React from 'react'
import Button from '../components/Button'

function List() {
  const [state, setState] = React.useState([])

  function handleAddState() {
    const item = {
      id: Date.now(),
      title: `item ${Date.now()}`,
      isState: true
    }
    setState(prev => [...prev, item])
  }

  function renderItemStyle(isState) {
    return {
      fontSize: '20px',
      textDecoration: 'underline',
      color: isState ? white : red
    }
  }

  return (
    <div>
      {
        state.length > 0 ? state.map(item => {
          return (
            <div key={item.id} style={renderItemStyle} >
              <p>{item.title}</p>
            </div>
          )
        }) : 'nodata'
      }
      <Button onClick={handleAddState} text="Add State" type='button' />
    </div>
  )
}

export default List