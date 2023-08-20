import { useState } from 'react';
import './Left.css';

const menuData = [
    'Design', 'Publisher', 'Front', 'Dev', 'Database', 'Mobile', 'DevOpt', 'Server', 'Tool'
];

const Left = ({menuChange, selectMenu}) => {
    return (
        <div className='left'>
            <h2>Left 메뉴</h2>
            <ul>
                {
                    menuData.map((item) => {
                        return <li key={item} className={selectMenu == item ? 'active' : ''} onClick={() => menuChange(item)} >{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export { Left };