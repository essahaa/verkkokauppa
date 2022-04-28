import axios from 'axios';
import { useState } from 'react';
import CategoryList from '../components/categoryList/categoryList';

export default function ManageCategories({url}) {
    const [newCategory, setNewCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [addingCategory, setAddingCategory] = useState(false);

    function saveCategory(e) {
        e.preventDefault();
        const json = JSON.stringify({name: newCategory});
        axios.post(url + 'products/addcategories.php',json,{
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            setNewCategory('');
            setAddingCategory(false);
            setSelectedCategory(response.data);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        });
    }

    if (!addingCategory){
        return (
            <>
            <h3>Manage categories</h3>
            <div>
                <label>Category</label>
                <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
            </div>
            <button type="button" onClick={() => setAddingCategory(false)}>Cancel</button>
            <button type='submit'>Save</button>
            </>
        )
    } else {
        return(
            <>
                <h3>Add new category</h3>
                <form onSubmit={saveCategory}>
                    <div>
                        <label>Category name</label>
                        <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
                    </div>
                    <button type="button" onClick={() => setAddingCategory(false)}>Cancel</button>
                    <button type='submit'>Save</button>
                </form>
            </>
        )
    }
}