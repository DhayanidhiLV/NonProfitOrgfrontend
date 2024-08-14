import React, { useState } from 'react';
import './Donation.css'; 

const banks = [
    { name: 'ICICI Bank', ifsc: 'ICIC0001234' },
    { name: 'SBI', ifsc: 'SBIN0001234' },
    { name: 'Kotak Mahindra', ifsc: 'KKBK0001234' },
    { name: 'Axis Bank', ifsc: 'UTIB0001234' },
    { name: 'IndusInd Bank', ifsc: 'INDB0001234' },
    { name: 'Bank of Baroda', ifsc: 'BARB0001234' },
    { name: 'Punjab National Bank', ifsc: 'PUNB0001234' },
    { name: 'HDFC', ifsc: 'HDFC0001234' },
];

const Donation = () => {
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [selectedBank, setSelectedBank] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [donated, setDonated] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!amount || !name || !selectedBank || !accountNumber || !ifscCode || !password) {
            setMessage('Please fill out all fields.');
            return;
        }

        const bank = banks.find(bank => bank.name === selectedBank && bank.ifsc === ifscCode);
        if (bank) {
            try {
                const response = await fetch('https://nonprofitorganization-4zqi.onrender.com/api/donation', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        amount,
                        bank: selectedBank,
                        accountNumber,
                        ifscCode,
                        password,
                    }),
                });

                const data = await response.json();
                if (response.ok) {
                    setMessage(`Thank you, ${name}, for your donation of ₹${amount}!`);
                    setAmount('');
                    setName('');
                    setSelectedBank('');
                    setAccountNumber('');
                    setIfscCode('');
                    setPassword('');
                    setDonated(true);
                } else {
                    setMessage(data.message || 'An error occurred. Please try again.');
                }
            } catch (error) {
                setMessage('An error occurred. Please try again.');
                console.error(error);
            }
        } else {
            setMessage('Invalid bank details. Please check and try again.');
        }
    };

    return (
        <div className={`donation-container ${donated ? 'thank-you' : ''}`}>
            {!donated ? (
                <>
                    <h1>Make a Donation</h1>
                    <p>Your support helps us continue our mission.</p>
                    <form onSubmit={handleSubmit} className="donation-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount">Donation Amount (in INR)</label>
                            <input
                                type="number"
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter amount"
                                min="1"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bank">Select Bank</label>
                            <select
                                id="bank"
                                value={selectedBank}
                                onChange={(e) => setSelectedBank(e.target.value)}
                                required
                            >
                                <option value="">Select your bank</option>
                                {banks.map(bank => (
                                    <option key={bank.name} value={bank.name}>{bank.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="accountNumber">Account Number</label>
                            <input
                                type="text"
                                id="accountNumber"
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                                placeholder="Enter your account number"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ifscCode">IFSC Code</label>
                            <input
                                type="text"
                                id="ifscCode"
                                value={ifscCode}
                                onChange={(e) => setIfscCode(e.target.value)}
                                placeholder="Enter your IFSC code"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button type="submit" className="donate-button">Donate</button>
                    </form>
                    {message && <p className="donate-message">{message}</p>}
                    <div className="payment-info">
                        <h2>Bank Details</h2>
                        <p>Ensure that the details you enter match the bank details below:</p>
                        <ul>
                            {banks.map((bank) => (
                                <li key={bank.name}>
                                    <strong>{bank.name}</strong><br />
                                    IFSC Code: {bank.ifsc}<br />
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <div className="thank-you-message">
                    <h1>Thank You!</h1>
                    <p>We appreciate your generous donation.</p>
                </div>
            )}
        </div>
    );
};

export default Donation;
