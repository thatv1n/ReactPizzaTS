import s from './NotFoundBlock.module.scss';

const NotFound = () => {
    return (
        <div className={s.root}>
            <h1>
                <span>:(</span>
                <br/>
                Ничего не найдено
            </h1>
            <p>Данная страница недоступна</p>
        </div>
    );
};

export default NotFound;
