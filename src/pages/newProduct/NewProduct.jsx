import React, { useEffect } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import "./newProduct.scss"
import { useNavigate } from 'react-router-dom'

const NewProduct = ({open, setOpen, handle, isAuth}) => {

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
            <div className='newProduct'>
            <Topbar open={open} setOpen={setOpen} handle={handle}/>
                <div className="newProduct">
                    <h1 className="addProductTitle">New Product</h1>
                    <form className="addProductForm">
                        <div className="addProductItem">
                            <label>Image</label>
                            <input type="file" id="file" />
                        </div>
                        <div className="addProductItem">
                            <label>Name</label>
                            <input type="text" placeholder="Apple Airpods" />
                        </div>
                        <div className="addProductItem">
                            <label>Stock</label>
                            <input type="text" placeholder="123" />
                        </div>
                        <div className="addProductItem">
                            <label>Active</label>
                            <select name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <button className="addProductButton">Create</button>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default NewProduct