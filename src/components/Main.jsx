import React from 'react';

import Member from './Member';
const Main = ({ data }) => {

    // console.log(data);
    return (
        <div className='article'>
            <h2>킹더랜드</h2>
            <ul className='memberList'>
                {
                    data.map((item, index) => {
                        return <Member key={item.id} item={item} />
                    })
                }
            </ul>
        </div>
    );
};

export default Main;