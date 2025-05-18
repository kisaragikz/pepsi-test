import './ShowItem.css'
import Container from 'react-bootstrap/esm/Container'
import Cardproduct from './Card'
const ShowItem = (props) =>{
    const GetDataFormCard = (data)=>{
       props.getData(data)
    }
    return(
        <Container className="Show-itembox">
            <div className='ali-item'>
                {props.data.map(data=>(
                    <Cardproduct datas={data} key={data.id} getData={GetDataFormCard}></Cardproduct>
                ))}
            </div>
        </Container>
    )
}
export default ShowItem