import { useParams } from 'react-router-dom';
import ShopCategoryList from '../../components/shop-products-list/shop-products-list';


const Category = () => {

    const { category } = useParams();
    console.log(category);

    return (
        <ShopCategoryList category={category}  />
    )
}

export default Category;
