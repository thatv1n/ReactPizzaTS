import instance from './instance';

export const api = {
    async fetchPizzas(obj) {
        const category = obj.category === 0 ? '' : obj.category;
        try {
            const {data} = await instance.get(
                `/items?${category && 'category=' + category}&sortBy=${obj.sort}`,
            );
            return data;
        } catch (e) {
            console.log(e.message);
        }
    },
};
