import React, { Component } from 'react';
import TagSelector from './tagSelector';
import './dashboard.css';

export default class SongItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: {}
        }
    }

    convertPropToSong = () => {
        this.setState({song: {...this.props.song}});
    }

    showInput = (input, div) => {
        input.classList.remove('hidden');
        div.classList.add('hidden');
    }

    hideInput = (input, div) => {
        input.value = '';
        input.classList.add('hidden');
        div.classList.remove('hidden');
    }

    addModifiedElementToSong = (attribute, value) => {
        let song = {...this.state.song};
        song.attribute = value;
        this.setState({song});
    }

    displayArray = (array) => {
        let display = []
        for (const elt in  array) {
            display.push(<div className="song-input-array-item">{elt.name}</div>);
        }
        return display;
    }

    componentDidMount() {
        this.convertPropToSong();

        let inputs = document.querySelectorAll('.song-input > input');

        for (const input of inputs) {
            input.classList.add('hidden');
        }

        inputs = document.querySelectorAll('.song-input-array > input');

        for (const input of inputs) {
            input.classList.add('hidden');
            input.addEventListener('keydown', (event) => {
                if (event.isComposing || (event.keyCode !== 13 && event.keyCode !== 188))
                    return;

                event.preventDefault();
                let node = document.createElement("div");
                node.setAttribute('class', 'song-input-array-item');
                node.appendChild(document.createTextNode(event.target.value));
                node.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.target.parentNode.removeChild(e.target);
                });
                event.target.parentNode.insertBefore(node, event.target);
                event.target.value = "";
            });
        }

        let modifies = document.querySelectorAll('.song-input-modify');
        let validates = document.querySelectorAll('.song-input-validate');
        let cancels = document.querySelectorAll('.song-input-cancel');

        for (const modify of modifies) {
            modify.addEventListener('onclick', (event) => {
                this.showInput(modify.parentNode.children.item(1), modify.parentNode.children.item(0));
                modify.classList.add('hidden');
                modify.parentNode.children.item(3).remove('hidden');
                modify.parentNode.children.item(4).remove('hidden');
            });
        }

        for (const validate of validates) {
            validate.classList.add('hidden');
            validate.addEventListener('onclick', (event) => {
                this.addModifiedElementToSong(validate.parentNode.children.item(1).name, validate.parentNode.children.item(1).value);
                this.hideInput(validate.parentNode.children.item(1), validate.parentNode.children.item(0));
                validate.classList.remove('hidden');
                validate.parentNode.children.item(3).add('hidden');
                validate.parentNode.children.item(4).add('hidden');
            });
        }

        for (const cancel of cancels) {
            cancel.classList.add('hidden');
            cancel.addEventListener('onclick', (event) => {
                this.hideInput(cancel.parentNode.children.item(1), cancel.parentNode.children.item(0));
                cancel.classList.remove('hidden');
                cancel.parentNode.children.item(3).add('hidden');
                cancel.parentNode.children.item(4).add('hidden');
            });
        }
    }

    displayArtists = (song) => {
        if (!song.artists)
            return;
        let display = '';
        for (const artist of song.artists) {
            display += artist.name + ',';
        }
        return display;
    }

    render() {
        const song = this.state.song;
        return (
            <div className="song-item">
                <div><span>{song.title}</span><span>{this.displayArtists(song)}</span></div>
                {/*<div className="song-input">
                    <div className="song-input-start-value">{song.url}</div>
                    <input type="text"/>
                    <div className="song-input-modify">&#f044</div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input">
                    <div className="song-input-start-value">{song.title}</div>
                    <input type="text"/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input">
                    <div className="song-input-start-value">{song.date}</div>
                    <input type="text"/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {this.displayArray(song.artists)}
                    <input type="text"/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {this.displayArray(song.prod)}
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {this.displayArray(song.real)}
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {this.displayArray(song.mix)}
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {this.displayArray(song.mastering)}
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {this.displayArray(song.cover)}
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {this.displayArray(song.studio)}
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {this.displayArray(song.colors)}
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <TagSelector info={this.props.info} />
                <div className="isSoundloud">
                    <input type="checkbox" name="isSoundcloud" defaultChecked={song.isSoundloud}></input>
                    <label htmlFor="isSoundcloud">Soundcloud</label>
                </div>*/}
            </div>
        )
    }
}
