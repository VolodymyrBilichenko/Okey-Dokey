import React from 'react';

export const BlogFilterSelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            name="sort"
            className="custom-select"
            value={value}
            onChange={evt => onChange(evt.target.value)}
        >
            <option value={defaultValue} data-html={`<span>${defaultValue}</span>`}>{defaultValue}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value} data-html={`<span>${option.name}</span>`}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}
