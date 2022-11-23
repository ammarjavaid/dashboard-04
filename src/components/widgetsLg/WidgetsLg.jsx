import React from 'react'
import "./widgetsLg.scss"

const WidgetsLg = () => {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };

  return (
    <>
        <div className='widgetsLg'>
            <h3 className='widgetsLgTitle'> Latest Transactions </h3>
            <table className='widgetsLgTable' style={{overflowX: "auto"}}>
                <tr className='widgetsLgTr'>
                    <th className='widgetsLgTh'> Customer </th>
                    <th className='widgetsLgTh'> Date </th>
                    <th className='widgetsLgTh'> Amount </th>
                    <th className='widgetsLgTh'> Status </th>
                </tr>
                <tr className='widgetsLgTr'>
                    <td className='widgetsLgUser'>
                        <img src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='image' className='widgetsLgImg'/>
                        <span className='widgetsLgName'> Susan Carol </span>
                    </td>
                    <td className='widgetsLgDate'> 6 Nov 2022 </td>
                    <td className='widgetsLgAmount'> $122.00 </td>
                    <td className='widgetsLgStatus'> <Button type="Declined"/> </td>
                </tr>
                <tr className='widgetsLgTr'>
                    <td className='widgetsLgUser'>
                        <img src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='image' className='widgetsLgImg'/>
                        <span className='widgetsLgName'> Susan Carol </span>
                    </td>
                    <td className='widgetsLgDate'> 6 Nov 2022 </td>
                    <td className='widgetsLgAmount'> $122.00 </td>
                    <td className='widgetsLgStatus'> <Button type="Pending"/> </td>
                </tr>
                <tr className='widgetsLgTr'>
                    <td className='widgetsLgUser'>
                        <img src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='image' className='widgetsLgImg'/>
                        <span className='widgetsLgName'> Susan Carol </span>
                    </td>
                    <td className='widgetsLgDate'> 6 Nov 2022 </td>
                    <td className='widgetsLgAmount'> $122.00 </td>
                    <td className='widgetsLgStatus'> <Button type="Approved"/> </td>
                </tr>
                <tr className='widgetsLgTr'>
                    <td className='widgetsLgUser'>
                        <img src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='image' className='widgetsLgImg'/>
                        <span className='widgetsLgName'> Susan Carol </span>
                    </td>
                    <td className='widgetsLgDate'> 6 Nov 2022 </td>
                    <td className='widgetsLgAmount'> $122.00 </td>
                    <td className='widgetsLgStatus'> <Button type="Approved"/> </td>
                </tr>
            </table>
        </div>
    </>
  )
}

export default WidgetsLg