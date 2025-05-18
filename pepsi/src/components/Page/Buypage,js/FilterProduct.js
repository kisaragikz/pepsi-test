import './FilterProduct.css'
import Container from 'react-bootstrap/esm/Container'
const FilterProduct = (props)=>{

    const sendFilterData = (data) =>{
    
        props.getFilter(data)
    }
    return (
        <Container className='box-filter'>
            <div className='head-filter'>
                    <h3>Featured Product</h3>
                    <hr className='featured-head'></hr>
                    <h4>SHOP BY BRAND</h4>
                    <hr className='featured-head'></hr>
            </div>
            <div className='bottom-filter'>
            <div className='check-chose'>
                    <a onClick={()=>sendFilterData("all")} className='name-checkbox'>All Product</a>
                </div>
                <div className='check-chose'>
                    <a onClick={()=>sendFilterData("pepsi")} className='name-checkbox'>Pepsi</a>
                </div>
                <div className='check-chose'>
                    <a onClick={()=>sendFilterData("Fanta")} className='name-checkbox'>Fanta</a>
                </div>
                <div className='check-chose'>
                    <a onClick={()=>sendFilterData("Sprite")} className='name-checkbox'>Sprite</a>
                </div>
                <div className='check-chose'>
                    <a onClick={()=>sendFilterData("schweppes")} className='name-checkbox'>Schweppes</a>
                </div>
             </div> 
        </Container> 
    )
}
export default FilterProduct