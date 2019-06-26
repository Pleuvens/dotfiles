import React, { Component } from 'react';
import TagSelector from './tagSelector';
import './dashboard.css';

class SongItem extends Component {
    constructor(props) {
        super(props);
    }

    showInput = (input, div) => {
        input.classList.remove('hidden');
        div.classList.add('hidden');
    }

    hideInput = (input, div) => {
        input.classList.add('hidden');
        div.classList.remove('hidden');
    }

    componentDidMount() {
        let inputs = document.querySelectorAll('.song-input > input');
        inputs.concat(document.querySelectorAll('.song-input-array > input'));
        let modifies = document.querySelectorAll('.song-input-modify');
        let validates = document.querySelectorAll('.song-input-validate');
        let cancels = document.querySelectorAll('.song-input-cancel');

        for (const input of inputs) {
            input.classList.add('hidden');
        }

        for (const modify of modifies) {
            modify.addEventListener('onclick', (event) => {

            });
        }

        for (const validate of validates) {
            validate.classList.add('hidden');
        }

        for (const cancel of cancels) {
            cancel.classList.add('hidden');
        }
    }

    render() {
        return (
            <div className="song-item">
                <div className="song-input">
                    <div className="song-input-start-value">{}</div>
                    <input type="text" name=""/>
                    <div className="song-input-modify">&#f044</div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input">
                    <div className="song-input-start-value">{}</div>
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input">
                    <div className="song-input-start-value">{}</div>
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {}
                    <div className="song-input-start-value">{}</div>
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {}
                    <div className="song-input-start-value">{}</div>
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {}
                    <div className="song-input-start-value">{}</div>
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {}
                    <div className="song-input-start-value">{}</div>
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {}
                    <div className="song-input-start-value">{}</div>
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {}
                    <div className="song-input-start-value">{}</div>
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {}
                    <div className="song-input-start-value">{}</div>
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <div className="song-input-array">
                    {}
                    <div className="song-input-start-value">{}</div>
                    <input type="text" name=""/>
                    <div className="song-input-modify"></div>
                    <div className="song-input-validate"></div>
                    <div className="song-input-cancel"></div>
                </div>
                <TagSelector />
                <div className="isSoundloud">
                    <input type="checkbox" name="isSoundcloud"></input>
                    <label htmlFor="isSoundcloud">Soundcloud</label>
                </div>
            </div>
        )
    }
}
