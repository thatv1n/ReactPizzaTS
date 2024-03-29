import React from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/hook';
import {addCart} from '../../redux/SlicesNThunk/Pizzass/CartSlice';

type PropsType = {
    id: number;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    raiting: number;
};

type ObjType = {
    id: number;
    imageUrl: string;
    name: string;
    typesPizza: typesPizzaObj[];
    price: number;
    count: number;
};

type typesPizzaObj = {
    weight: number;
    size: number;
};

const PizzaBlock: React.FC<PropsType> = ({id, imageUrl, name, types, sizes, price}) => {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.store.CartSlice.cart);

    const viewTypes = ['тонкое', 'традиционное'];

    const [printCount, setPrintCount] = React.useState(0);
    const [activeType, setAcitveType] = React.useState(0);
    const [activeSize, setAcitveSize] = React.useState(0);

    const addToCart = () => {
        const obj: ObjType = {
            id,
            imageUrl,
            name,
            typesPizza: [{weight: activeType, size: activeSize}],
            price,
            count: 0,
        };
        dispatch(addCart(obj));
    };

    React.useEffect(() => {
        getCount(id);
    }, [count]);

    const getCount = (id: number) => {
        const filter: any = count.find((item: { id: number }) => item.id === id);
        setPrintCount(filter?.count);
    };

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza"/>
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((item, i) => (
                        <li
                            key={i}
                            className={activeType === i ? 'active' : undefined}
                            onClick={() => setAcitveType(item)}>
                            {viewTypes[item]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((item, i) => (
                        <li
                            key={i}
                            className={activeSize === i ? 'active' : undefined}
                            onClick={() => setAcitveSize(i)}>
                            {item} см.
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--outline button--add" onClick={addToCart}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {printCount && <i>{printCount}</i>}
                </div>
            </div>
        </div>
    );
};

export default PizzaBlock;
