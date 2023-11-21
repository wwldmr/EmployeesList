import { useState } from 'react';
import './employees-list-item.css';

const EmployeesListItem = ({name, salary}) => {
    const [increase, setIncrease] = useState(false);
    const [like, setLike] = useState(false);
    
    let classNames = "list-group-item d-flex justify-content-between";

    const onCookieClicked = () => {
        setIncrease(increase => !increase);

    }
    const onPersonClicked = () => {
        setLike(like => !like);

    }
    if (increase) {
        classNames += ' increase';
    }
    if (like) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span onClick={onPersonClicked} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onCookieClicked}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={console.log()}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;