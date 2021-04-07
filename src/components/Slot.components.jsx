import "./Slot.components.css";

export const Slot = ({element}) => {
    return(
        <div className="slot-item">
            <p>{element.amount}</p>
            <img src={element.imgURL} />
        </div>
    );
}