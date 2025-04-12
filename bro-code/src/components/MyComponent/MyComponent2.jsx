import {useState} from "react";

//ONCHANGE EVENT HANDLER
function MyComponent2() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Entrega");
    const handleNameChange = (e) => setName(e.target.value);
    const handleQuantityChange = (e) => setQuantity(e.target.value);
    const handleCommentChange = (e) => setComment(e.target.value);
    const handlePaymentChange = (e) => setPayment(e.target.value);
    const handleShippingChange = (e) => setShipping(e.target.value);

    return (
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Nome: {name}</p>
            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Instruções aqui"/>
            <p>Comentário: {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Escolha um pagamento</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Paypal">Paypal</option>
            </select>
            <p>Pagamento: {payment}</p>
            <label>
                <input type="radio" value="Recolha" checked={shipping === "Recolha"}
                       onChange={handleShippingChange}/> Recolha
            </label><br/>
            <label>
                <input type="radio" value="Entrega" checked={shipping === "Entrega"}
                       onChange={handleShippingChange}/> Entrega
            </label>
            <p>Expedição: {shipping}</p>
        </div>
    );
}

export default MyComponent2