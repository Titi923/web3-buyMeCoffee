import { useState } from "react";
import { ethers } from "ethers"
import './Buy.css';

const Buy = ({ state }) => {
    const buyCoffee = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        const amount = document.querySelector("#amount").value;
        const amountParsed = { value: ethers.parseEther(`${amount}`) }
        const donation = await contract.buyCoffee(name, message, amountParsed)
        await donation.wait();
        alert("Transaction is successul");
        window.location.reload();
    }

    const [decimalValue, setDecimalValue] = useState('');

    const handleInputChange = (event) => {
        setDecimalValue(event.target.value);
    };

    return (
        <div className="align-center">
            <form onSubmit={buyCoffee}>
                <label>
                    Name
                    <input id="name" required />
                </label>
                <label>
                    Message
                    <input id="message" required />
                </label>
                <label>
                    Amount ETH
                    <input
                    type="number"
                    id="amount"
                    step="0.01"
                    defaultValue={"0.01"}
                    min="0"
                    value={decimalValue}
                    onChange={handleInputChange}
                />
                </label>
                <button>Send</button>
            </form>
        </div>
    );
};

export default Buy;
