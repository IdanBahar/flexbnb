import { useState } from 'react'
import {useEffectUpdate} from '../customHooks/useEffectUpdate.js'

export function HomeFilter({ filterBy, onSetFilterBy }) {
  const [filterToEdit, setFilterToEdit] = useState(structuredClone(filterBy))

  useEffectUpdate(() => {
    onSetFilterBy(filterToEdit)
  }, [filterToEdit])

  function handleChange(ev) {
    const type = ev.target.type
    const field = ev.target.name
    let value

    switch (type) {
      case 'text':
      case 'radio':
        value = field === 'sortDir' ? +ev.target.value : ev.target.value
        if (!filterToEdit.sortDir) filterToEdit.sortDir = 1
        break
      case 'number':
      case 'range':
        value = +ev.target.value
        break
    }
    setFilterToEdit({ ...filterToEdit, [field]: value })
  }

  function clearFilter() {
    setFilterToEdit({ ...filterToEdit, capacity: '', type: '', minPrice: '', maxPrice: '', amenities: [], bedRoomsCount: "", bedsCount: "", bathCount: ''})
  }
  return (
    <section className='home-filter'>
      <h3>Filter:</h3>
      <input
        type='text'
        name='txt'
        value={filterToEdit.txt}
        placeholder='Free text'
        onChange={handleChange}
        required
      />
      <input
        type='number'
        min='0'
        name='minSpeed'
        value={filterToEdit.minSpeed}
        placeholder='min. speed'
        onChange={handleChange}
        required
      />
      <button className='btn-clear' onClick={clearFilter}>
        Clear
      </button>
      <h3>Sort:</h3>
      <div className='sort-field'>
        <label>
          <span>Speed</span>
          <input
            type='radio'
            name='sortField'
            value='speed'
            checked={filterToEdit.sortField === 'speed'}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Vendor</span>
          <input
            type='radio'
            name='sortField'
            value='vendor'
            checked={filterToEdit.sortField === 'vendor'}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Owner</span>
          <input
            type='radio'
            name='sortField'
            value='owner'
            checked={filterToEdit.sortField === 'owner'}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className='sort-dir'>
        <label>
          <span>Asce</span>
          <input
            type='radio'
            name='sortDir'
            value='1'
            checked={filterToEdit.sortDir === 1}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Desc</span>
          <input
            type='radio'
            name='sortDir'
            value='-1'
            onChange={handleChange}
            checked={filterToEdit.sortDir === -1}
          />
        </label>
      </div>
    </section>
  )
}
