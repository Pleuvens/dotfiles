import React, { Component } from 'react';
import TagSelector from './tagSelector';
import './dashboard.css';

class SongItem extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let inputs = document.querySelectorAll('.song-input > input');
        inputs.concat(document.querySelectorAll('.song-input-array > input'));

        for (const input of inputs) {

        }
    }

    render() {
        return (
            <div className="song-item">
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
