import React from 'react';

export const BlogPagination = () => {
    return (
        <div className="pagination">
            <button className="pagination__arrow arrow-btn" type="button">
                <svg width="19" height="19" viewBox="0 0 19 19">
                    <use xlinkHref="#arrow-prev"></use>
                </svg>
            </button>
            <div className="pagination__list">
                <a href="#" className="is-current">
                    1
                </a>
                <a href="#">
                    2
                </a>
                <a href="#">
                    3
                </a>
                <span>
							...
						</span>
                <a href="#">
                    20
                </a>
            </div>
            <button className="pagination__arrow arrow-btn" type="button">
                <svg width="19" height="19" viewBox="0 0 19 19">
                    <use xlinkHref="#arrow-next"></use>
                </svg>
            </button>
        </div>
    );
}
