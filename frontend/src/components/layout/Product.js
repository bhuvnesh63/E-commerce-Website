import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import HomeModal from "./ModalHome";
import { getHomeList } from "../../store/actions/homeAction";
import { DocsExample } from "../sidebar";

const Product = () => {
  const home = useSelector((state) => state.home.home);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getHomeList(page));
  }, []);

  const handleAddData = () => {
    navigate("/home-form");
  };
  console.log(home);

  return (
    <>
        <DocsExample href="forms/form-control">
      <Container>
        <Row>
          <Col
            style={{ padding: "30px", textAlign: "left", width: "50%" }}
            sm={6}
          >
            <h4>First Page</h4>
          </Col>
          <Col
            style={{ padding: "30px", textAlign: "right", width: "50%" }}
            sm={6}
          >
            <button class="btn btn-dark btn1"
              onClick={() => handleAddData()}
            >
             + 
            </button>
          </Col>
          <hr />
          <CTable align="middle" className="mb-0 px-0 mx-0 border table-responsive" hover responsive>
          <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>Profile</CTableHeaderCell>
                    <CTableHeaderCell>Heading</CTableHeaderCell>
                    <CTableHeaderCell>Paragragh</CTableHeaderCell>
                    <CTableHeaderCell>View</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
          {home && home.map((item) => (
            <>
           <CTableRow v-for="item in tableItems" key={item.id}>
              <CTableDataCell><img width={"50px"} height={"50px"} style={{borderRadius:"50%"}} src={item.img} alt="" /> </CTableDataCell>
              <CTableDataCell><div>{item.heading && item.heading.slice(0,25)}...</div> </CTableDataCell>
              <CTableDataCell><div>{item.paragragh && item.paragragh.slice(0,25)}...</div> </CTableDataCell>
              <CTableDataCell><HomeModal /></CTableDataCell>
             </CTableRow>
            </>
          ))
          }
          </CTableBody>
          </CTable>
        </Row>
      </Container>
          </DocsExample>
    </>
  );
};

export default Product;
