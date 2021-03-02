import React from 'react';
// searchbar to be powered by unit 3. I don't know what all is involved with building a search bar so if there's more in here, or in Dashboard.js to work on please let me know.

export default function DashboardSearchForm(props){
    const {
        values,
        submit,
        change,
        disabled,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
      }

    return(
        <form className='dashboard-search-container' onSubmit={onSubmit}>
            <label>Search Bar
            <input  
            value={values.title}
            onChange={onChange}
            name='search'
            type='text'
            />
        </label>
        <button disabled={disabled}>Search</button>
        </form>
    )
}