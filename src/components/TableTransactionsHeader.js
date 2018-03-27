import React from 'react';
import main from 'main.scss'

export const TableTransactionsHeader = () => (
    <div>
        <div className={main.table__cell}>
            <label>ID</label>
        </div>

        <div className={main.table__cell}>
            <label>Bank ID</label>
        </div>

        <div className={main.table__cell}>
            <label>Amount</label>
        </div>

        <div className={main.table__cell}>
            <label>Bank Name</label>
        </div>

        <div className={main.table__cell}>
            <label>Delete</label>
        </div>

        <div className={main.clear__class}></div>
    </div>
)
