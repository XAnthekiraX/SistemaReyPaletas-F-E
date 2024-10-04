import { Select } from '@headlessui/react'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CategoryService from '../../services/category/categoryServices';
import { getGlobalVariable } from '../../cookies/cookieManajer';
const ProductOptionCategories = ({ name, clase, openCard, value, onChangeF, shouldReload }) => {

    const [listCategory, setListCategory] = useState([]);
    const fetchCategories = () => {
        const categoryService = new CategoryService();
        const codFranchise = getGlobalVariable("codFranchise");
        categoryService.getAllCategory(codFranchise)
            .then(response => {
                setListCategory(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchCategories()
    }, [shouldReload]); // Agrega `codFranchise` al array de dependencias

    return (
        <div className='mx-3 my-1.5 flex flex-col font-sans gap-2  dark:text-white dark:bg-big-stone-900'>
            <span className='text-sm font-semibold mx-1'>{name}</span>
            <Select name="status" aria-label="Project status" className={`outline-none focus:outline-blue-400 border text-base p-3 rounded-lg text-wrap  ${clase} dark:bg-big-stone-900`} value={value} onChange={onChangeF}>
                <option>Seleccione una Categoría</option>
                {
                    listCategory.map(category => (
                        <option key={category.codCategory} value={category.codCategory}>{category.nameCategory}</option>
                    ))
                }
                <option onClick={openCard}>Nueva Categoría</option>
            </Select>
        </div>
    )
};


export default ProductOptionCategories;

ProductOptionCategories.propTypes = {
    name: PropTypes.string,
    clase: PropTypes.string,
    openCard: PropTypes.func,
    value: PropTypes.string,
    onChangeF: PropTypes.func,
    shouldReload: PropTypes.bool,
}