import {ProductList} from "../components/ProductList"

export default function Buy(){
    return(
        <div className="buy">
            <div className="page-head">
                All Paper Available For Buy.
            </div>
            <div className="page-content">
                <ProductList/>
                <ProductList/>
                <ProductList/>
            </div>
        </div>
    )

}
