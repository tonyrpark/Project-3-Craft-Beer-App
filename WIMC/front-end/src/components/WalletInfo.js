import React from 'react';
export default function WalletInfo(props) {
    const {wallet} = props;
    return (
        <tr>
            <td>{wallet.currency}</td>
            <td>{wallet.privateKey}</td>
            <td>{wallet.address}</td>
        </tr>
    )
}
