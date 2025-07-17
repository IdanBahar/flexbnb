import { useState } from "react"
import {useEffectUpdate} from '../customHooks/useEffectUpdate'

export function LabelPreview({ label, filterBy, onSetFilterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffectUpdate(()=>{
    onSetFilterBy(filterByToEdit)
  }, [filterByToEdit])
  
  function handleChange({target}) {
    const value = target.childNodes
    console.log("🚀 ~ handleChange ~ target.childNodes:", target.childNodes)    
    setFilterByToEdit(prevFilterByToEdit => ({ ...prevFilterByToEdit, labels: [...prevFilterByToEdit.labels, value] }))
  }

  return (
    <div name='labels' className='label-preview' onClick={handleChange}>
      <img src={label.imgUrl} alt={label.name} />
      <span>{label.name}</span>
    </div>
  )
}
