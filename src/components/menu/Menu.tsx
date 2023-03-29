import React from 'react';

import {useAppDispatch} from '../../redux/hook';
import {setCategory} from '../../redux/SlicesNThunk/Pizzass/PizzaSlice';

interface MenuType {
    id: number;
    title: string;
}

export const Menu: React.FC = () => {
    const dispatch = useAppDispatch();
    const [active, setActive] = React.useState<number>(0);

    const menu: MenuType[] = [
        {id: 0, title: 'Все'},
        {id: 1, title: 'Мясные'},
        {id: 2, title: 'Вегетарианская'},
        {id: 3, title: 'Гриль'},
        {id: 4, title: 'Острые'},
        {id: 5, title: 'Закрытые'},
    ];

    React.useEffect(() => {
        dispatch(setCategory(active));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    return (
        <div className="categories">
            <ul>
                {menu.map((item) => (
                    <li
                        className={`${active === item.id ? 'active' : false}`}
                        key={item.id}
                        onClick={() => setActive(item.id)}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
