import React, { useEffect } from "react";
import axios from "axios";
import { selectedProduct } from "../redux/actions/productActions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";


const ProductDetail = () => {

    const product = useSelector((state) => state.product)
    const productId = useParams();
    const dispatch = useDispatch();
    console.log(productId);

    const fetchProductDetail = async () => {
        const response = axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
            console.log("Error", err);
        });

        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
    }, [productId]);

    console.log("product:", product);
    return (
        <div>
            <h2>Product detail</h2>
        </div>
    )
}
export default ProductDetail;
