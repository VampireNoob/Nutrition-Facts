export const Nutrition = ({ label, quantity, unit }) => {
    return (
        <div className="box">
            <p><b className="label">{label}</b> / {quantity.toFixed(2)} {unit}</p>
        </div>
    )
}
