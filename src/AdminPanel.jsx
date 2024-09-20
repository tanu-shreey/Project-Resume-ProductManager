import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from 'react-bootstrap';
import Swal from "sweetalert2";
import CarouselExample from './CarouselExample';
import { CgProfile } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const AdminPanel = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Get user data from localStorage
  const userdata = JSON.parse(localStorage.getItem("user"));
  
  // State to manage input fields and product data
  const [input, setInput] = useState({ productId: '', productName: '', productPrice: '' });
  const [data, setData] = useState([]);

  // Load existing data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('ProductData')) || [];
    
    // Ensure that the data is an array
    if (Array.isArray(storedData)) {
      setData(storedData);
    } else {
      setData([]);
    }
  }, []);

  // Add or update product in localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let updatedData;
    const existingProductIndex = data.findIndex(item => item.productId === input.productId);

    if (existingProductIndex >= 0) {
      // Update existing product
      updatedData = [...data];
      updatedData[existingProductIndex] = input;
    } else {
      // Add new product
      updatedData = [...data, input];
    }
    
    // Save to localStorage
    localStorage.setItem("ProductData", JSON.stringify(updatedData));
    setData(updatedData);
    setInput({ productId: '', productName: '', productPrice: '' });
    handleClose();
  };

  // Delete a product from localStorage
  const handleDelete = (productId) => {
    const updatedData = data.filter(item => item.productId !== productId);
    localStorage.setItem('ProductData', JSON.stringify(updatedData));
    setData(updatedData);
    Swal.fire('Deleted!', '', 'success');
  };

  // Load product data into form for updating
  const handleUpdate = (productId) => {
    const productToUpdate = data.find(item => item.productId === productId);
    setInput(productToUpdate);
    setShow(true);
  };
   
  const handlelogout = ()=>{ localStorage.removeItem("user");
    navigate('/Login');
   };


  return (
    <div className='sidebar d-flex flex-row' role='cdb-sidebar'>
      <div className='sidebar-container p-5 w-25 text-center' style={{ color: 'white', backgroundColor: '#cab394' }}>

        <div className='Sidebar-header'>
          <h1><i><CgProfile /></i></h1>
        </div>
        <div className='sidebar-nav'>
          <div><a>{userdata?.name}</a></div>
          <div><a>{userdata?.email}</a></div>
          <div><button className='btn' onClick={handlelogout}style={{marginTop:'350px' ,background:'white', color:'black'}}>Logout</button></div>
        </div>
      </div>

      <div className='container2 w-75 bg-light' style={{ color: 'gray', height: '600px' }}>
        <CarouselExample />
        <div className='bg-white p-3 mt-5 ms-5 me-5 d-flex flex-row justify-content-between'>
          <div><h4 className='ms-2'>Product List</h4></div>
          <div className='App'>
            <button className='btn' onClick={handleShow}><FaRegSquarePlus style={{ color: 'gray' }} fontSize={25} /></button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>Add Product</Modal.Header>
              <form className='form-control w-100' onSubmit={handleSubmit}>
                <input className='form-control p-3 mt-2' placeholder='Product Id' id='productId' name='productId' type='text' value={input.productId}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                <input className='form-control p-3 mt-2' placeholder='Product Name' id='productName' name='productName' type='text' value={input.productName}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                <input className='form-control p-3 mt-2' placeholder='Price' id='productPrice' name='productPrice' type='text' value={input.productPrice}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                <button className='btn btn-success w-100 mt-3' type='submit'>Save</button>
              </form>
            </Modal>
          </div>
        </div>

        <div className='Product-container'>
          {data.length > 0 ? (
            data.map(item => (
              <div key={item.productId} className='d-flex flex-row justify-content-around bg-white ms-5 me-5'>
                <div>{item.productId}</div>
                <div>{item.productName}</div>
                <div>{item.productPrice}</div>
                <div>
                  <button onClick={() => handleUpdate(item.productId)} className='btn'><FaEdit style={{ color: 'gray' }} fontSize={25} /></button>
                  <button onClick={() => handleDelete(item.productId)} className='btn'><MdDelete style={{ color: 'gray' }} fontSize={25} /></button>
                </div>
              </div>
            ))
          ) : (
            <div className='bg-light'>No Products Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
