import React from 'react';

export const TableTransactionsHeader = () => (
    <div>
        <div className="table-cell table-cell-id-column">
            <label>ID</label>
        </div>

        <div className="table-cell table-cell-column">
            <label>Bank ID</label>
        </div>

        <div className="table-cell table-cell-column">
            <label>Amount</label>
        </div>

        <div className="table-cell table-cell-column">
            <label>Bank Name</label>
        </div>

        <div className="table-cell table-cell-column">
            <label>Delete</label>
        </div>

        <div style={{ clear: "both" }}></div>
    </div>
)
