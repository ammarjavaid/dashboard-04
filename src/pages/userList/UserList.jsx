import React, { useState, useEffect } from 'react'
import "./userList.scss"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom"
import { userRows } from '../../DummyData';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

const UserList = ({open, setOpen, handle, isAuth, setIsAuth}) => {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'user', headerName: 'User', width: 160, renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img src={params.row.avatar} alt='' className='userListImg' />
            {params.row.username}
          </div>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 190,
    },
    {
      field: 'status',
      headerName: 'status',
      width: 130,
    },
    {
      field: 'transaction',
      headerName: 'Transactions Volumn',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className='userListEdit'> Edit </button>
            </Link>
            <DeleteOutlineIcon className='userListDelete' onClick={() => handleDelete(params.row.id)} />
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
        <div className='userList'>
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

export default UserList