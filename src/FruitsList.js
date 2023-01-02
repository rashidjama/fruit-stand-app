import FruitsCard from './FruitsCard';
import Fruits from './FruitsList.css'
const FruitsList = ({ fruits }) => {
    return(
        <div className="Fruits">
            { fruits.map((fruit, i) => {
                return <FruitsCard 
                name={fruit.name}
                icon={fruit.icon}
                key={i}
                />
            })}
        </div>
    )
}
export default FruitsList