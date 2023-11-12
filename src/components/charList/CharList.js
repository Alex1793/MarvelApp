import { Component } from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';

import './charList.scss';

class CharList extends Component {

    state = {
        chars: [],
        loading: true,
        newItemLoading: false,
        offset: 210,
        charEnded: false
    }

    componentDidMount() {
        this.onRequest();
    }

    marvelService = new MarvelService();

    updateListChars = () => {
        this.marvelService.getAllCharecters()
            .then(res => {
                this.setState({
                    chars: res,
                    loading: false
                })
            });
    }

    onRequest = (offset) => {
        this.onCharListLoading();

        this.marvelService
            .getAllCharecters(offset)
            .then(res => {
                let ended;
                if(res.length < 9) {
                    ended = true;
                }

                this.setState(({chars, offset}) => ({
                    chars: [...chars, ...res],
                    loading: false,
                    newItemLoading: false,
                    offset: offset + 9,
                    charEnded: ended
                }))
            });
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    itemRefs = [];

    setRef = (ref) => {
        this.itemRefs.push(ref);
    }

    focusOnItem = (id) => {
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemRefs[id].classList.add('char__item_selected');
        this.itemRefs[id].focus();
    }


    render () { 
        const {chars ,loading, newItemLoading, offset, charEnded} = this.state;

        const elems = chars.map((item, i) => {

            let styles;
            if(item.thumbnale === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                styles = {objectFit: 'contain'};
            }

            return (
                <li className="char__item" 
                    key={item.id} 
                    tabIndex={0}
                    onClick={() => {
                        this.props.onCharSelected(item.id);
                        this.focusOnItem(i)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            this.props.onCharSelected(item.id);
                            this.focusOnItem(i);
                        }
                    }}      
                    ref={this.setRef}>
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
                    onClick={() => this.onRequest(offset)}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;