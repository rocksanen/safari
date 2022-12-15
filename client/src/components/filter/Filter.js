import '../../styles/filter.css';

const Filter = ({value, onChange}) => {
    return (
        <div className="filter">
            <input className="searchTerm" value={value} onChange={onChange} placeholder='Search...' type={'text'}/>
        </div>
    )
}

export default Filter