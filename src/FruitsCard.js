import Card from './FruitsCard.css'
const FruitsCard = ({ name, icon }) => {
    return(
        <div className="Card">
            <h3>{ name }</h3>
            <div className="Icon">{ icon }</div>
        </div>
    )
}

export default FruitsCard;