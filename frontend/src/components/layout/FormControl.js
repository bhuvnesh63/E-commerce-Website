import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from "@coreui/react";
import { DocsExample } from "src/components";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Button, Col, Container, Row } from "react-bootstrap";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { db, storage } from "src/firebase";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { addHome, updateHome } from "src/store/actions/homeAction";
import { useDispatch } from "react-redux";

const initialState = {
  heading: "",
  paragragh: "",
};
const FormControl = () => {
  const [data, setData] = useState(initialState);
  const { heading, paragragh } = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    id && getSingleUser();
  }, [id]);

  const getSingleUser = async () => {
    const docRef = doc(db, "home", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setData({ ...snapshot.data() });
    }
  };
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + `/files/${file.name}`;
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_chage",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is Pause");
              break;
            case "running":
              console.log("Upload is Running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let errors = {};
    if (!heading) {
      errors.heading = "Heading is Required";
    }
    if (!paragragh) {
      errors.paragragh = "Paragragh is Required";
    }
    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
    if (!id) {
      try {
       dispatch(addHome(data))
      } catch (error) {
        console.log(error);
      }
      Swal.fire({
        icon: "success",
        title: "Success",
        text: `Data Added Successfully...`,
        showConfirmButton: true,
        timer: 5000,
      });
      navigate("/dashboard");
    } else {
      try {
        dispatch(updateHome({data, id}))
      } catch (error) {
        console.log(error);
      }
      Swal.fire({
        icon: "success",
        title: "Updated",
        text: `Data Updated Successfully...`,
        showConfirmButton: true,
        timer: 5000,
      });
      navigate("/dashboard");
    }
  };

  return (
    <DocsExample href="/form-control">
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>All Products</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Heading
                  </CFormLabel>
                  <CFormInput
                    name="heading"
                    error={errors.heading ? { content: errors.heading } : null}
                    placeholder="Heading"
                    onChange={handleChange}
                    value={heading}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Heading
                  </CFormLabel>
                  <CFormInput
                    label="FileUpload"
                    type="file"
                    accept="image/*"
                    name="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">
                    Paragragh1
                  </CFormLabel>
                  <CFormTextarea
                    name="paragragh"
                    error={
                      errors.paragragh ? { content: errors.paragragh } : null
                    }
                    placeholder="Paragragh"
                    onChange={handleChange}
                    value={paragragh}
                    as="textarea"
                    rows={3}
                  ></CFormTextarea>
                </div>
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </DocsExample>
  );
};

export default FormControl;
