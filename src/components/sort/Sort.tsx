import React from 'react';

import {useAppDispatch} from '../../redux/hook';
import {setSort} from '../../redux/SlicesNThunk/Pizzass/PizzaSlice';

type itemSortType = {
    id: number;
    title: string;
    sortProperty: string;
};

export const Sort: React.FC = () => {
    const dispatch = useAppDispatch();
    const [isOpenSort, setIsOpenSort] = React.useState(false);
    const [active, setActive] = React.useState(0);

    const itemSort: itemSortType[] = [
        {id: 0, title: 'популярности', sortProperty: 'raiting'},
        {id: 1, title: 'цене', sortProperty: 'price'},
        {id: 2, title: 'алфавиту', sortProperty: 'name'},
    ];

    const handleActiveSort = (id: number) => {
        setActive(id);
        setIsOpenSort(false);
    };

    React.useEffect(() => {
        dispatch(setSort(itemSort[active].sortProperty));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    return (
        <div className="sort">
            <div className="sort__label">
                <svg
                    style={isOpenSort ? {transform: ' rotate(180deg)'} : undefined}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={() => setIsOpenSort((isOpenSort) => !isOpenSort)}>
                    {itemSort[active].title}
                </span>
            </div>
            {isOpenSort && (
                <div className="sort__popup">
                    <ul>
                        {itemSort.map((item) => (
                            <li
                                key={item.id}
                                className={`${item.id === active ? 'active' : null}`}
                                onClick={() => handleActiveSort(item.id)}>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
