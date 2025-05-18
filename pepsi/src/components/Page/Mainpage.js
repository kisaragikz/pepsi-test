import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FilterProduct from './Buypage,js/FilterProduct';
import ShowItem from './ShowItem';
import Cart from './Cart';
import './Mainpage.scss'
import items from './products.json'
import { useState , useEffect, useRef} from 'react'
import Navbar from "../HomePage/navbar";

const MainPage = (props)=>{
    const [Logined, setLogined] = useState(JSON.parse(localStorage.getItem('login')))
    const [NewItems, setNewItem ] = useState([])
    const [searchText, setSeacrhText] = useState('')
    const [FilteredItems,  setFilteredItems] = useState(items)
    const [countItems, setCountItems] = useState(0)

    //-----------------------------------------------------------filterProduct
    const getFilterText = (data) =>{
        const BigText = data.toUpperCase()
        if(BigText === 'ALL'){
            setFilteredItems(items)
        }
        const filterData =items.filter((dummy)=>{
            return dummy.name.includes(BigText)
        })
        if(filterData.length > 0){
            setFilteredItems(filterData)
        }
    }
    const SearchedItems = FilteredItems.filter((name)=>{
        return name.name.includes(searchText.toUpperCase())
    })
    //=--------------------------------------------------------------------------------
    //======================================================AddItem===============================
    const GetNewDataFromShowItem = (event) =>{
        setCountItems(countItems + 1)
        setNewItem(preitem  =>{
            if(preitem.find(item =>item.id === event.id) == null){
             return [...preitem, event]
               }else{
                  return preitem.map(item =>{
                     if(item.id === event.id){
                         return {...item, count: item.count+1, price: item.price + event.newPrice}
                     }else{
                         return item
                     }
                  })
            }
           })

    }
    const DelDataFormCart = (data) =>{
        setCountItems(countItems - 1)
        console.log(data)
        setNewItem(preitem  =>{
            if(preitem.find(item =>item.id === data.id)?.count === 1){
            return preitem.filter(item => item.id != data.id)
            }else{
                return preitem.map(item =>{
                    if(item.id === data.id){
                        return {...item, count: item.count-1 , price: item.price - item.newPrice}
                    }else{
                        return  item
                    }
                })
            }
        })
    
    }
        
    const didMount = useRef(false);
    useEffect(() => {
        if(Logined === 1){
            if(NewItems == null) {
                setNewItem([]);
              }
              if (didMount.current) {
                localStorage.setItem("cart", JSON.stringify(NewItems));
              } else {
                didMount.current = true;
                const saveCart = localStorage.getItem("cart");
                setNewItem(JSON.parse(saveCart));
              }
        }
      
    }, [NewItems]);
    
    return(
        <>
        <Navbar />
        <Container >
            <div className='mainpage-container'>
                    <div className='lef-mainpage'>
                        <a>All Product</a>
                        <h1>SHOP: DRINKING</h1>
                        <a>30 Products</a>
                    </div>
                    <div className='right-mainpage'>
                        <div className='search-bar'>
                            <form  className="form"role="search">
                                <label for="search">Search for stuff</label>
                                <input 
                                    id="search" 
                                    type="search" 
                                    placeholder="Search..." 
                                    autoFocus required 
                                    value={searchText}
                                    onChange={(event)=>{setSeacrhText(event.target.value)}}
                                    />  
                            </form>
                        </div>  
                        <Cart data={NewItems} delData={DelDataFormCart} count={countItems} addData={GetNewDataFromShowItem}></Cart>

                    </div>
                </div>
         
            <Row xs={0}>
                <Col md={3}  ><FilterProduct getFilter={getFilterText}></FilterProduct></Col>
                <Col md={8}><ShowItem data={SearchedItems} getData={GetNewDataFromShowItem} ></ShowItem></Col>
            </Row>
        </Container>
        </>
    )
}
export default MainPage 