import { CTableDataCell } from '@coreui/react';
import { deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../auth/firebase';
import { getHomeList } from '../../store/actions/homeAction';
import Swal from 'sweetalert2';

function MydModalWithGrid(props, item) {
    const home = useSelector((state) => state.home.home);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
  
    useEffect(() => {
      dispatch(getHomeList(page));
    }, []);
    

    const handleDelete = async (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            deleteDoc(doc(db, `home/${id}`));
            Swal.fire("Deleted!", "Deleted Successfully.", "success");
          }
        });
      };

  return (
    <Modal className='modal-home' {...props} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          View Detalis/Home Page
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            {home && home.map((item,id) => (
            <>
           <div v-for="item in tableItems" key={item.id}>
              
              <div><img width={"50px"} height={"50px"} style={{borderRadius:"50%"}} src={item.img} alt="" /> </div>
              <div><h5>{item.heading}</h5> </div><br />
              <div><div>{item.paragragh}</div> </div>
              <br />
           <button onClick={() => handleDelete(item.id)} type="button" class="btn btn-danger">Delete</button>&nbsp;&nbsp;
           <button  type="button" class="btn btn-secondary btn" onClick={() => navigate(`/form-control/${item.id}`)}>Update</button> 
                       </div>
            </>
          ))

          }
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function HomeModal() {
  const [modalShow, setModalShow] = useState(false);
  const id = useParams()

  return (
    <>
      <button  type="button" class="btn btn-dark btn" onClick={() => setModalShow(true,id)}>
        View
      </button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
export default HomeModal
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { closeModal, selectSelectedItemId, selectItemData, setItemData } from "../../../store/reducers/modalSlice";
// import { db } from "src/firebase";
// import { collection, getDocs } from "firebase/firestore";

// const ItemModal = () => {
//   const dispatch = useDispatch();
//   const selectedItemId = useSelector(selectSelectedItemId);
//   const itemData = useSelector(selectItemData);

//   useEffect(() => {
//     const fetchItem = async () => {
//       const response = await fetch(`/api/items/${selectedItemId}`);
//       const data = await getDocs(collection(db, "home"));
//       dispatch(setItemData(data));
//     };
//     fetchItem();
//   }, [selectedItemId, dispatch]);

//   return (
//     <div>
//       {itemData ? (
//         <>
//           <h3>{itemData.title}</h3>
//           <p>{itemData.description}</p>
//           <button onClick={() => dispatch(closeModal())}>Close</button>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ItemModal;