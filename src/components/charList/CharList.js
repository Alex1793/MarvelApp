import { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';

import './charList.scss';

class CharList extends Component {

    state = {
        chars: [],
        loading: true
    }

    componentDidMount() {
        this.updateListChars();
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


    render () {
        
        const {chars ,loading} = this.state;

        const elems = chars.map(item => {

            let styles;
            if(item.thumbnale === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                styles = {objectFit: 'contain'};
            }

            return (
                <li className="char__item" key={item.id}>
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
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}


export default CharList;