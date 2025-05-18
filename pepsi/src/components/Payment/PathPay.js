import '../Payment/PathPay.css'

const PathPay = () => {
    return (
        <div className="path-page">
            <p><strong>ช่องทางการชำระเงิน</strong></p>
            <div className="img-con">
                <div className='pp'>
                    <img className='qr-img' src='https://cdn.discordapp.com/attachments/1026345569964273774/1043013370074370068/unknown.png'></img>
                </div>
                <div className='info1'>
                    <img className='icon-img' src='https://cdn.discordapp.com/attachments/1026345569964273774/1043013785901863002/unknown.png'></img>
                    <p>ธนาคาร กสิกรไทย</p>
                    <p>เลขที่ 038-1-93407-1</p>
                    <p>ชื่อ ปัณณ์ วะชังเงิน</p>
                </div>
            </div>
        </div>
    );
}

export default PathPay;