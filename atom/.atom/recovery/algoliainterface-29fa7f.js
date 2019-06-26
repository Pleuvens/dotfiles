import React, { Component } from 'react';
import algoliasearch from 'algoliasearch';

class AlgoliaSearcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: []
        }
        this.index = algoliasearch('6ZKM9KX3HB', '21e5e06939c62ab6592ef9ef06e05f15').initIndex('radio-dev')
    }

    search = (query) => {
        this.index.search({
            query: ''
        });
    }

    componentDidMount() {
        document.querySelector('input[name="al-search"]').addEventListener('keyup', (event) => {
            this.search(event.target.value);
        });
    }
}
