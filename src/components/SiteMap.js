import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {userActions} from 'actions/index';
import main from 'main.scss'

class SiteMap extends Component {

    handleClick = async (e) => {
        await this.props.dispatch(userActions.logout());
        await this.props.dispatch(userActions.checkLogin());
    }

    render() {

        let objectsPages = [{id: 1, pageName: "Add transaction", pageCode: "AddTransactionPage", pageLink: "/"},
            {id: 2, pageName: "Transactions", pageCode: "TransactionsPage", pageLink: "/transactions"},
            {id: 3, pageName: "Logout", pageCode: "Logout", pageLink: "/login"}];

        let indx = objectsPages.findIndex(o => o.pageCode === this.props.pageCode);
        objectsPages.splice(indx, 1);
        let listPages = objectsPages.map((item) => {
                if (item.pageCode === "Logout") {
                    return <li key={item.id} value={item.id}>
                        <Link to={item.pageLink} onClick={(e) => this.handleClick(e)}>{item.pageName}</Link>
                    </li>;
                }
                else
                    return <li key={item.id} value={item.id}><Link to={item.pageLink}>{item.pageName}</Link></li>
            }
        );

        return (
            <div className="site__map__list">
                <div>
                    <ul className={main.hr}>
                        {listPages}
                    </ul>
                </div>
            </div>
        );
    }
}

const connectedSiteMap = connect()(SiteMap);
export {connectedSiteMap as SiteMap};


