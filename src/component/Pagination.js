import React from "react";
import { Link } from "react-router-dom";


export const Pagination = ({total, currentPage, perPage}) =>{
    console.log("pagiantion",total);
    let loop = total/perPage;
    let paginate = [];
    console.log('loop',currentPage);
    for(let i=1; i<=loop; i++){
        paginate.push(<li className={`${(currentPage==i)?'active':''}`}><Link  to={`?page=${i}`}>{i}</Link></li>);
    }
    return (
        <ul className="pagination">{paginate}</ul>
    );
}