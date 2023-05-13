import './Buy.css';

const Buy = () => {
    return (
        <div className="align-center">
            <form onSubmit={() => {}}>
                <label>
                    Name
                    <input id="name" />
                </label>
                <label>
                    Message
                    <input id="message" />
                </label>
                <label>
                    Amount ETH
                    <input id="name" type="number" />
                </label>
                <button>Send</button>
            </form>
        </div>
    );
};

export default Buy;
