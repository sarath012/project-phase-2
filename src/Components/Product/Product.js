import React,{useContext} from 'react'
import { appContext } from '../../Context/AppContext';
import './Product.css';
import Imagecarousel from './Imagecarousel/Imagecarousel';

export default function Product() {
    const {selectedProduct, setSelectedProduct} = useContext(appContext);
    // console.log(selectedProduct)
    // comment
  return (

    <div>
        <div className='product-button-container'>
            <button className='product-button'onClick={()=>setSelectedProduct(null)}>Back to Products page</button>
        </div>
        <div className='product-details-container'>
            
            <div className='image-details-container'>
                <Imagecarousel image= {selectedProduct.images}/>
            </div>
            <div className='text-details-container'>
                <div>
                    <h1>{selectedProduct.title}</h1>
                    <p>{selectedProduct.description}</p>
                </div>
                <div>
                    <p>{selectedProduct.stock}</p>
                </div>
                <div>
                    <h3>{selectedProduct.price}</h3>
                </div>
            </div>
            
        </div>
        
        
        
        
    
    </div>
    
  )
}
