import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const marvelService = new MarvelService();

    useEffect(() => {
        updateChar();
    }, [])

    useEffect(() => {
        updateChar();
    }, [props.charId])

    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(false);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }


    const updateChar = () => {
        const {charId} = props;

        if(!charId) return;

        marvelService
            .getCharecter(charId)
            .then(onCharLoaded)
            .catch(onError)

        onCharLoading();
    }

    const onCharLoading = () => {
        setLoading(true);
    }


    const skeleton = char || loading || error ? null :  <Skeleton/>; 
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;

    return (
        <div className="char__info">
            {skeleton} 
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
    
}

const View = ({char}) => {

    const {name, description, thumbnale, homepage, wiki, comics} = char;

    let styles;
    if(thumbnale === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        styles = {objectFit: 'contain'};
    }

    let haveComics;

    if (comics.length === 0) {
        haveComics = 'There is no comics for this character'
    } else {
        haveComics = comics.map((item, i) => {
            return (
                <li key={i} className="char__comics-item">
                    {item.name}
                </li>
            )
        })
    }

    return (
        <>
            <div className="char__basics">
                <img src={thumbnale} alt="abyss" style={styles}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {haveComics}
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number 
}

export default CharInfo;