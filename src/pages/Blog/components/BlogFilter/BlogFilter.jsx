import React from 'react';

export const BlogFilter = () => {
    return (
        <form className="blog__filter">
            <div className="blog__search">
                <label>
                    <input type="search" name="search" placeholder="Поиск" required/>
                </label>
                <button className="blog__search--submit" type="button" title="Поиск">
                    <svg width="17" height="17" viewBox="0 0 17 17">
                        <use xlinkHref="#search"></use>
                    </svg>
                </button>
            </div>
            <div className="blog__sort">
                <span className="blog__sort--name">Сортировать</span>
                <div className="blog__sort--select">
                    <select name="sort" className="custom-select">
                        <option value="rating" data-html="<span>За рейтингом</span>">За рейтингом</option>
                        <option value="date" data-html="<span>За Датой</span>">За Датой</option>
                        <option value="popularity" data-html="<span>За Популярностью</span>">За Популярностью</option>
                        <option value="alphabet" data-html="<span>В алфавитном порядке</span>">В алфавитном порядке
                        </option>
                    </select>
                </div>
            </div>
        </form>
    );
}
