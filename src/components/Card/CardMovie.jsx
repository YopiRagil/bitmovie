import React, {useState} from 'react';
import {  MDBCard, MDBCardBody, MDBModal, MDBModalBody, MDBFooter, MDBBtn } from 'mdbreact';


const styles = (props)=> {
    return ({
        card: {
            height:'100%',
        },
        bg_images:{
            height: `calc(23vh + 20vw)`,
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%, 100%',
            backgroundImage: `url(${props?.Poster !== "N/A" ? props?.Poster: 'https://static.vecteezy.com/system/resources/previews/001/198/749/original/movie-camera-png.png'})`,
        },
        title_card:{
            backgroundColor:'black', 
            height:'calc(7vh + 4vw)', 
            opacity:'0.8', 
            width:'100%'
        },
        text_title:{
            color:'white', 
            fontSize: 'calc(0.8vw + 1vh)'
        },
        posters:{width:'100%'}
    })
}

const CardExample = (props) => {
    const [openModal, setOpenModal] = useState(false)
    const {datas} = props
    const handleDetail = async() => {
        await props.setDetails(datas)
        await props.history.push('/detail/'+ datas?.Title)
    }
    return (
        <MDBCard onClick={()=> setOpenModal(!openModal)} className="p-1" color="mdb-color darken-4"  style={styles().card}>
            <MDBCardBody className='d-flex align-items-end p-0'  
                style={styles(datas).bg_images}>
                <div className="p-1 py-2"style={styles(datas).title_card}>
                    <p style={styles().text_title}>{datas.Title} ({datas.Year})</p>
                </div>
            </MDBCardBody>
            <MDBModal isOpen={openModal}>
                <MDBModalBody className="bg-dark">
                    <img style={styles().posters} alt="poster" src={datas.Poster}/>
                </MDBModalBody>
                <MDBFooter className="bg-dark pb-2">
                    <MDBBtn onClick={handleDetail} color="mdb-color darken-4">
                        Details
                    </MDBBtn>
                </MDBFooter>
            </MDBModal>
        </MDBCard>
    )
}

export default CardExample;