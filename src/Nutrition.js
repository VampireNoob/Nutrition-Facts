export const Nutrition = ({ label, quantity, unit, id }) => {
    return (
        <div className="box" key={id}>
            <p><b className="label">{label}</b> / {quantity.toFixed(2)} {unit}</p>
        </div>
    )
}