import React, {memo, useRef} from 'react';
import styles from './search_bar.module.css';
import { SearchBarPropsType } from 'app';

const SearchBar : React.FunctionComponent<SearchBarPropsType> = memo(({onSearch}) => {
    const inputRef = useRef<any>();

    const handleSearch = () : void => {
        const value = inputRef.current.value;
        onSearch(value);
        inputRef.current.value = "";
    };

    const handleKeyPress  = ( e : React.KeyboardEvent ) : void => {
        if(e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
    <header>
        <div className={styles.container}>
            <img
            className={styles.thumbnail}
            src="https://archivenew.vop.co.kr/images/33471878eeb1fa99050130125a1d5b3e/2020-05/marked/24023757_youtube_logo_dark.jpg"
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