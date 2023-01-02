
const SearchBox = ({ onSearch }) => {
    return(
        <div>
            <input type="Search"
                placeholder="Search A Fruit"
                onChange={ onSearch }
             />
        </div>
    )
}
export default SearchBox