import React from 'react';

const ListDetails = ({ title,details }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {title.map(item => <th>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {details.map(detail => 
                                    <tr>{detail.map(item => <td>{item}</td>)}</tr>)}
                </tbody>
            </table>
        </div>
    )
}

ListDetails.defaultProps = {
    title:[],
    details:[],    
}
export default ListDetails;