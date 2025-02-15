
import { FaSearch } from 'react-icons/fa'

  // eslint-disable-next-line react/prop-types
function SearchSkills ({value, setValue, handleSearch, onClick})  { 
 


const onChange = (evt) => {
    setValue(evt.target.value)
}



const onSubmit = (evt) => {
    evt.preventDefault()
}
  
return (
    <div className='relative z-0 flex justify-center w-full'>
        <form onSubmit={onSubmit} className='flex flex-col item-center'>
        <div className='flex items-center'>
        <input
        value={value}
        name="search"
        type="search"
        onChange={onChange}
        placeholder='Search skills...'
        className='bg-slate-800 h-10 p-2 border border-indigo-500 rounded-l-lg focus:outline-none text-slate-200'

        
        />  
        <button
        onClick={handleSearch} 
        type="button" 
        className='text-white border border-indigo-500 rounded-r-lg w-12 h-10 flex items-center justify-center bg-indigo-900' >
        <FaSearch />
        </button>
        </div>
        <button onClick={onClick} className='mt-2 text-slate-400 hover:text-white'>Show All</button>
        </form>
    </div>
)
}

export default SearchSkills