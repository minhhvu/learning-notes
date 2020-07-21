import React, {FunctionComponent} from "react";

interface ProductTableProps {
    keywords: string,
    isChecked: boolean  //filter for 'Only show products in stock'
}

interface Product {
    category: string,
    price: string,
    stocked: boolean,
    name: string
}

enum CategoryEnum {
    sporting = 'Sporting Goods',
    electronics = 'Electronics'
}

const products: Product[] = [
    {category: CategoryEnum.sporting, price: '$49.99', stocked: true, name: 'Football'},
    {category: CategoryEnum.sporting, price: '$9.99', stocked: true, name: 'Baseball'},
    {category: CategoryEnum.sporting, price: '$29.99', stocked: false, name: 'Basketball'},
    {category: CategoryEnum.electronics, price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: CategoryEnum.electronics, price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: CategoryEnum.electronics, price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const ProductTable: FunctionComponent<ProductTableProps> = (props: ProductTableProps): JSX.Element => {
    const selectedProducts = props.isChecked ?
        products.filter(ele => ele.name.toLowerCase().includes(props.keywords) && ele.stocked)
        : products.filter(ele => ele.name.toLowerCase().includes(props.keywords));

    return (
        <table>
            <tr>{props.isChecked ? 'true': 'false'}{props.keywords}</tr>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {
                selectedProducts.map(product => (
                    <tr>
                        <td>{product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                    </tr>
                ))
            }
            {/*<Category name={CategoryEnum.sporting}></Category>*/}
            {/*<Category name={CategoryEnum.electronics}></Category>*/}
        </table>
    )
}

export default ProductTable;