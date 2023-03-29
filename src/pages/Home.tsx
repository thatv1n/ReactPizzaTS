import React from 'react';

import LoadingBlock from '../components/loadingBlock/LoadingBlock';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';

import {Menu} from '../components/menu/Menu';
import {Sort} from '../components/sort/Sort';
import {useAppDispatch, useAppSelector} from '../redux/hook';
import {fetchPizzas} from '../redux/SlicesNThunk/Pizzass/PizzaThunk';

type objType = {
    category: number | null;
    sort: string | null;
};

export const Home: React.FC = () => {
    const dispatch = useAppDispatch();

    const pizzas = useAppSelector((state) => state.store.fetchPizzassSlice.items);
    const isLoading = useAppSelector((state) => state.store.fetchPizzassSlice.isLoading);
    const category = useAppSelector((state) => state.store.fetchPizzassSlice.category);
    const sort = useAppSelector((state) => state.store.fetchPizzassSlice.sort);
    const isMounted = React.useRef(false);

    React.useEffect(() => {
        isMounted.current = true;
    }, []);

    React.useEffect(() => {
        if (isMounted.current === true) {
            const obj: objType = {
                category: category,
                sort: sort,
            };
            dispatch(fetchPizzas(obj));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, sort]);

    const skeletons = [...new Array(6)].map((_, index) => (
        <div key={index} style={{display: 'flex', justifyContent: 'center'}}>
            <LoadingBlock/>
        </div>
    ));
    const pizzasItem = pizzas?.map((item) => (
        <div key={item.id} style={{display: 'flex', justifyContent: 'center'}}>
            <PizzaBlock {...item} />
        </div>
    ));

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Menu/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
            </div>
            <div className="content__items">{!isLoading ? pizzasItem : skeletons}</div>
        </div>
    );
};
