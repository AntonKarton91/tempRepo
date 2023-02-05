import React, {useEffect, useState} from 'react';
import AdminLayoutComponent from "@/AdminLayout/adminLayout.component";
import axios from "axios";
import Image from "next/image";
import ProductInfoComponent from "@/Admin-Components/ProductInfo/productInfo.component";

const Index = () => {

    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get("http://localhost:5000/api/product/63cc06725d0a1ea791246e9b")
            console.log(data)
            setData(data)
        }
        getData()
    }, [])

    const productData = {
        "_id": "63cc06725d0a1ea791246e9b",
        "title": "sofa",
        "articul": "dsfs",
        "description": "big",
        "defaultPrice": 321,
        "optionCategories": [
            {
                "_id": "63cc06e15d0a1ea791246e9e",
                "title": "sofa",
                "productArticul": "dsfs",
                "selectedItem": 1,
                "product": "63cc06725d0a1ea791246e9b",
                "optionItems": [
                    {
                        "_id": "63df77f6dbfc23e11eb6d65b",
                        "title": "Черная",
                        "productArticul": "dsfs",
                        "optionCategoryID": "63cc06e15d0a1ea791246e9e",
                        "price": 2000,
                        "preview": "products/dsfs/Черная/dsfsd6366114-7960-4c4a-ae0b-dc739546b63a/Preview-dsfsЧерная.png",
                        "image": "products/dsfs/Черная/dsfsd6366114-7960-4c4a-ae0b-dc739546b63a/Image-dsfsЧерная.png",
                        "__v": 0
                    }
                ],
                "__v": 1
            },
            {
                "_id": "63cc08e619cfc6a5b896c8ec",
                "title": "sofssa",
                "productArticul": "dsfs",
                "selectedItem": 1,
                "product": "63cc06725d0a1ea791246e9b",
                "optionItems": [],
                "__v": 0
            }
        ],
        "__v": 2
    }
    const [data, setData] = useState(productData)






    const changeData = (e, k) => {
        setData(prevState => {
            const newState = {...prevState}
            newState[k] = e.target.value
            return newState
        })
    }


    // @ts-ignore
    return (
        <AdminLayoutComponent>
            <ProductInfoComponent data={data} changeData={changeData}/>
        </AdminLayoutComponent>
    );
};

export default Index;