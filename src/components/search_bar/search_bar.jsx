import React from 'react';
import { memo } from 'react';
import { useRef } from 'react';
import styles from './search_bar.module.css';

const SearchBar = memo(({onSearch}) => {
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
        inputRef.current.value = "";
    };

    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
    <header>
        <div className={styles.container}>
            <img
            className={styles.thumbnail}
            src="/fabicon.ico"
            alt="main"
            />
            <input
                ref={inputRef}
                className={styles.input}
                type="text"
                placeholder="검색어 입력"
                onKeyPress={handleKeyPress}
            />
            <button
                className="btn"
                type="submit"
                onClick={handleSearch}
            >검색
            </button>
            
        </div>    
    </header>    
        
    );});

export default SearchBar;