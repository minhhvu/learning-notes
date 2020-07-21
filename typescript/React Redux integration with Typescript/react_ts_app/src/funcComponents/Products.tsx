import React, {FunctionComponent, Fragment, useState} from "react";
import ReactDOM from "react-dom";
import SearchBox from "./SearchBox";
import {Filter, FilterProps} from "./Filter";
import ProductTable from "./ProductTable";


const Products: FunctionComponent = (): JSX.Element => {
    const [keywords, setKeywords] =useState('')
    const [isChecked, setIsChecked] = useState(false);
    return (
        <Fragment>
            <SearchBox setKeywords={setKeywords}></SearchBox>
            <Filter isChecked={isChecked} setIsChecked={setIsChecked}></Filter>
            <ProductTable keywords={keywords} isChecked={isChecked}></ProductTable>
        </Fragment>
    )
}

export default Products;