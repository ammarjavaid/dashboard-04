import React, { useState, useEffect } from 'react'
import "./productList.scss"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom"
import { productRows } from '../../DummyData';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

const ProductList = ({open, setOpen, handle, isAuth}) => {

const [data, setData] = useState(productRows);

const handleDelete = (id)=>{
    setData(data.filter((item)=> item.id !== id))
}

const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'product', headerName: 'Product', width: 160, renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img src={params.row.img} alt='' className='productListImg' />
            {params.row.name}
          </div>
        )
      }
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 190,
    },
    {
      field: 'status',
      headerName: 'status',
      width: 130,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className='productListEdit'> Edit </button>
            </Link>
            <DeleteOutlineIcon className='productListDelete' onClick={()=> handleDelete(params.row.id)}/>
          </>
        )
      }
    },
  ];

  // const navigate = useNavigate();

  // useEffect(()=>{
  //   if(!isAuth){
  //     navigate("/login");
  //   }
  // }, [])

  return (
    <>
      <div className='container'>
      <Sidebar open={open} setOpen={setOpen} handle={handle}/>
        <div className='productList'>
        <Topbar open={open} setOpen={setOpen} handle={handle}/>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
        </div>
      </div>
    </>
  )
}

export default ProductList