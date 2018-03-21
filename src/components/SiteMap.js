import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SiteMap extends Component {

    render() {

        let objectsPages = [{id:1, pageName: "Add transaction", pageCode: "AddTransactionPage", pageLink: "/"},
            {id:2, pageName: "Transactions", pageCode: "TransactionsPage", pageLink: "/transactions"},
            {id:3, pageName: "Logout", pageCode: "Logout", pageLink: "/login"}];

        let indx = objectsPages.findIndex(o => o.pageCode === this.props.pageCode);
        objectsPages.splice(indx, 1);
        let listPages = objectsPages.map((item) =>
            <li key={item.id} value={item.id}><Link to={item.pageLink}>{item.pageName}</Link></li>
        );

        return (
            <div className="site-map-list">
                <div>
                    <ul className="hr">
                        {listPages}
                    </ul>
                </div>
            </div>
        );
    }
}

const connectedSiteMap = connect()(SiteMap);
export { connectedSiteMap as SiteMap };


