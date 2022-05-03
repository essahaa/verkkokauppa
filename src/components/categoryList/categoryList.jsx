import React,{useState,useEffect} from "react";
import axios from 'axios';

export default function CategoryList({url, selectedCategory, setSelectedCategory}) {
    const [categories,setcategories] = useState([]);

    useEffect(() => {
        axios.get(url + 'products/getcategories.php')
        .then((response) => {
            const json = response.data;
            if (json) {
                if (selectedCategory === null) {
                    setSelectedCategory(json[0]);
                }
                setcategories(json);
            }
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [selectedCategory])

    function onCategoryChange(value) {
        setSelectedCategory(categories.filter(item => item.id === value));
        console.log(value);
    }

    return (
        <select value={selectedCategory?.id} onChange={(e) => onCategoryChange(e.target.value)}>
            {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
            ))}
        </select>
    )

}