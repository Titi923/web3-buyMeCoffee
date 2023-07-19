import { ethers } from "ethers"
import "./Transactions.css"

import { useState, useEffect } from "react";
const Transactions = ({ state }) => {
    const [transactions, setTransactions] = useState([]);
    const { contract } = state;
    useEffect(() => {
        const transactionsMessage = async () => {
            const transactions = await contract.getTransactions();
            setTransactions(transactions)
            //console.log(memos)
        }
        contract && transactionsMessage()
    }, [contract])
    return (
        <div className="container">
            <h1 className="text-center" style={{ marginTop: "50px" }} >Transactions</h1>
            <table>
                <tbody >
                    <tr>
                        <td
                            style={{
                                backgroundColor: "rgb(228 121 13)",
                                textAlign: "center",
                                border: "1px solid white",
                                borderCollapse: "collapse",
                                padding: "7px",
                                width: "100px",
                                color: "white",
                            }}
                        >
                            Name
                        </td>
                        <td
                            style={{
                                backgroundColor: "rgb(228 121 13)",
                                textAlign: "center",
                                border: "1px solid white",
                                borderCollapse: "collapse",
                                padding: "7px",
                                width: "200px",
                                color: "white"
                            }}
                        >
                            Date
                        </td>
                        <td
                            style={{
                                backgroundColor: "rgb(228 121 13)",
                                textAlign: "center",
                                border: "1px solid white",
                                borderCollapse: "collapse",
                                padding: "7px",
                                width: "400px",
                                color: "white"
                            }}
                        >
                            Message
                        </td>
                        <td className="container"
                            style={{
                                backgroundColor: "rgb(228 121 13)",
                                textAlign: "center",
                                border: "1px solid white",
                                borderCollapse: "collapse",
                                padding: "7px",
                                width: "400px",
                                color: "white"
                            }}
                        >
                            From
                        </td>
                        <td className="container"
                            style={{
                                backgroundColor: "rgb(228 121 13)",
                                textAlign: "center",
                                border: "1px solid white",
                                borderCollapse: "collapse",
                                padding: "7px",
                                width: "100px",
                                color: "white"
                            }}
                        >
                            Amount
                        </td>
                    </tr>
                    {transactions.map((transaction) => {
                        return (
                            <tr>
                                <td
                                    style={{
                                        backgroundColor: "#333",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "100px",
                                        color: "white",
                                    }}
                                >
                                    {transaction.name}
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#333",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "200px",
                                        color: "white"
                                    }}
                                >
                                    {/* {new Date(transaction.timestamp * 1000).toLocaleString()} */}
                                    {new Date(Number(transaction.timestamp) * 1000).toLocaleString()}
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#333",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "300px",
                                        color: "white"
                                    }}
                                >
                                    {transaction.message}
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#333",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "100px",
                                        color: "white"
                                    }}
                                >
                                    {transaction.from}
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#333",
                                        border: "1px solid white",
                                        borderCollapse: "collapse",
                                        padding: "7px",
                                        width: "400px",
                                        color: "white"
                                    }}
                                >
                                    {ethers.formatEther(transaction.amount)} ETH
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default Transactions;