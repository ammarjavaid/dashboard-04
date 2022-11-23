import React, { useEffect } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import "./newUser.scss"
import { useNavigate } from 'react-router-dom'

const NewUser = ({open, setOpen, handle, isAuth}) => {

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
                <div className='newUser'>
            <Topbar open={open} setOpen={setOpen} handle={handle}/>
                <h1 className='newUserTitle'> New User </h1>
                <form className='newUserForm'>
                    <div className='newUserItem'>
                        <label> Username </label>
                        <input type="text" placeholder='Jhon' />
                    </div>
                    <div className='newUserItem'>
                        <label> Ful Name </label>
                        <input type="text" placeholder='Jhon Smith' />
                    </div>
                    <div className='newUserItem'>
                        <label> Email </label>
                        <input type="email" placeholder='JhonSmith@gmail.com' />
                    </div>
                    <div className='newUserItem'>
                        <label> Password </label>
                        <input type="password" placeholder='password' />
                    </div>
                    <div className='newUserItem'>
                        <label> Phone </label>
                        <input type="phone" placeholder='+92 302 0662 962' />
                    </div>
                    <div className='newUserItem'>
                        <label> Address </label>
                        <input type="text" placeholder='Sargodha | Pakistan' />
                    </div>
                    <div className='newUserItem'>
                        <label> Active </label>
                        <select className='newUserSelect' name='active' id='active'>
                            <option value="yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    {/* <div className='newUserItem'>
                        <label> Gender </label>
                        <div className='newUserGender'>
                            <input type="radio" name='gender' id='male' value="male" />
                            <label for='male'>Male</label>
                            <input type="radio" name='gender' id='female' value="female" />
                            <label for='female'>Female</label>
                            <input type="radio" name='gender' id='other' value="other" />
                            <label for='other'>Other</label>
                        </div>
                        
                    <button className='newUserButton'> Create </button>
                    </div>  */}
                </form>
            </div>
            </div>
        </>
    )
}

export default NewUser