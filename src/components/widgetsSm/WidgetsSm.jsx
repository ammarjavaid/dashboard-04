import React from 'react'
import "./widgetsSm.scss"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const WidgetsSm = () => {
  return (
    <>
        <div className='widgetsSm'>
            <span className='widgetsSmTitle'>New Join Members</span>
            <ul className='widgetsSmList'>
                <li className='widgetsSmListItem'>
                    <img src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'alt='image' className='widgetSmImg' />
                    <div className='widgetsSmUser'>
                        <span className='widgetsSmUsername'> Anna Keller </span>
                        <span className='widgetsSmUserTitle'> Software Engineer </span>
                    </div>
                    <button className='widgetsSmButton'>
                        <RemoveRedEyeIcon className='widgetsSmIcon'/>Display
                    </button>
                </li>
                <li className='widgetsSmListItem'>
                    <img src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'alt='image' className='widgetSmImg' />
                    <div className='widgetsSmUser'>
                        <span className='widgetsSmUsername'> Anna Keller </span>
                        <span className='widgetsSmUserTitle'> Software Engineer </span>
                    </div>
                    <button className='widgetsSmButton'>
                    <RemoveRedEyeIcon className='widgetsSmIcon'/>Display
                    </button>
                </li>
                <li className='widgetsSmListItem'>
                    <img src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'alt='image' className='widgetSmImg' />
                    <div className='widgetsSmUser'>
                        <span className='widgetsSmUsername'> Anna Keller </span>
                        <span className='widgetsSmUserTitle'> Software Engineer </span>
                    </div>
                    <button className='widgetsSmButton'>
                    <RemoveRedEyeIcon className='widgetsSmIcon'/>  Display
                    </button>
                </li>
                <li className='widgetsSmListItem'>
                    <img src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'alt='image' className='widgetSmImg' />
                    <div className='widgetsSmUser'>
                        <span className='widgetsSmUsername'> Anna Keller </span>
                        <span className='widgetsSmUserTitle'> Software Engineer </span>
                    </div>
                    <button className='widgetsSmButton'>
                    <RemoveRedEyeIcon className='widgetsSmIcon'/> Display
                    </button>
                </li>
                <li className='widgetsSmListItem'>
                    <img src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'alt='image' className='widgetSmImg' />
                    <div className='widgetsSmUser'>
                        <span className='widgetsSmUsername'> Anna Keller </span>
                        <span className='widgetsSmUserTitle'> Software Engineer </span>
                    </div>
                    <button className='widgetsSmButton'>
                    <RemoveRedEyeIcon className='widgetsSmIcon'/> Display
                    </button>
                </li>
            </ul>
        </div>
    </>
  )
}

export default WidgetsSm