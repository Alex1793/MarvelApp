import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';

import './charList.scss';

const CharList = (props) => {

    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false)

    const marvelService = new MarvelService();

    useEffect(() => {
        onRequest();
    }, [])


    const updateListChars = () => {
        this.marvelService.getAllCharecters() 
            .then(res => {
                this.setState({
                    chars: res,
                    loading: false
                })
            });
    }

    const onRequest = (offset) => {
        onCharListLoading();

        marvelService
            .getAllCharecters(offset)
            .then(res => {
                let ended;
                if(res.length < 9) {
                    ended = true;
                }

                setChars(chars => [...chars, ...res]);
                setLoading(loading => false);
                setNewItemLoading(newItemLoading => false);
                setOffset(offset => offset + 9);
                setCharEnded(charEnded => ended);
            });
    }

    const onCharListLoading = () => {
        setNewItemLoading(true);
    }

    const itemRefs = useRef([]);


    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }


    const elems = chars.map((item, i) => {

        let styles;
        if(item.thumbnale === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            styles = {objectFit: 'contain'};
        }

        return (
            <li className="char__item" 
                key={item.id} 
                ref={el => itemRefs.current[i] = el}
                tabIndex={0}
                onClick={() => {
                    props.onCharSelected(item.id);
                    focusOnItem(i)
                }}
                onKeyPress={(e) => {
                    if (e.key === ' ' || e.key === "Enter") {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                    }
                }}      
                >
                <img src={item.thumbnale} alt="abyss" style={styles}/>
                <div className="char__name">{item.name}</div>
            </li>
        )
    });

    const spinner = loading === true ? <Spinner/> : null;

    return (
        <div className="char__list">
            {spinner}
            <ul className="char__grid">
                {elems}
            </ul>
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{display: charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )

}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;