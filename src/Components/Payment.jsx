import React, { useEffect, useState } from 'react';
import './Payment.css'


const Payment = ({ data }) => {
    const [initialBalance, setInitialBalance] = useState(0); // Initial balance
    const [monthlyPayment, setMonthlyPayment] = useState(0); // Monthly payment
    const [balanceHistory, setBalanceHistory] = useState([]); // Balance history
    const monthlyPay = () => {
        if (data) {
            setInitialBalance(data?.balance)
            let amount = data?.balance
            let due = amount / 12;
            let rounded = Math.floor(due / 10) * 10;
            setMonthlyPayment(rounded)
        }
    }
    useEffect(() => {
        monthlyPay()
    }, [data])
    const calculateBalance = () => {
        const newBalanceHistory = [];
        let balance = initialBalance;
        let months = 0;
        while (balance > 0) {
            const monthPayment = Math.min(balance, monthlyPayment); // Ensure we don't overpay
            balance -= monthPayment; // Update balance after payment
            months++;
            newBalanceHistory.push({ month: months, monthPayment, balance });
        }
        return newBalanceHistory;
    };
    const handleCalculate = () => {
        const newBalanceHistory = calculateBalance();
        setBalanceHistory(newBalanceHistory);
    };
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        if (newValue >= 1) {
            setMonthlyPayment(newValue);
        }
    };
    return (
        <div className="Trial">
            <h1>Repayment Model</h1>
            <div>
                <strong>Initial Balance:</strong> $ {initialBalance}
            </div>
            <div>
                <strong>Monthly Payment:</strong> $ {monthlyPayment}
            </div>
            <input
            className='inp'
                type="number"
                value={monthlyPayment}
                onChange={handleInputChange}
                placeholder="Monthly Payment..."
            />
            <button className='calculateBtn' onClick={handleCalculate}>Calculate</button>
            {balanceHistory.length > 0 && (
                <div>
                    <h2>Balance Over Time:</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Amount</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {balanceHistory.map((entry) => (
                                <tr key={entry.month}>
                                    <td>{entry.month}</td>
                                    <td>$ {entry.monthPayment}</td>
                                    <td>$ {entry.balance.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
export default Payment;
