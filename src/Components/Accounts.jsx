import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAccount } from '../Redux/accountSlice'

const Accounts = ({ setAcc, setConditions }) => {
    const userAcc = useSelector((state) => state.accountStore.accounts)
    console.log(userAcc, '----state value--')
    const dispatch = useDispatch()
    const [balance, setBalance] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newAccount = {
            count: userAcc.length + 1,
            balance: parseFloat(balance) || 0,
        };
        dispatch(addAccount(newAccount))
        setBalance('');
    };
    const handleInputChange = (e) => {
        setBalance(e.target.value);
    };
    const handleClicked = (data) => {
        setAcc(data)
        setConditions(true)
    }
    const handleClick = (data) => {
        setAcc(data)
        setConditions(false)
    }
    return (
        <div className="account-list">
            <h2>Accounts</h2>
            {userAcc.map((userAcc, i) => (
                <div key={i} className='accOption'>
                    <p>Acc No :{userAcc.count}</p>
                    <p>Balance :{userAcc.balance}</p>
                    <button onClick={() => handleClicked(userAcc)} className='btn'>Repayment Graph </button>
                    <button onClick={() => handleClick(userAcc)} className='btn'>Repayment Method</button>
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <label htmlFor="balance">Balance input :</label>
                <input
                    type="number"
                    id="balance"
                    value={balance}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>)
}

export default Accounts