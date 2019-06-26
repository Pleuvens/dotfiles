import React, { Component } from 'react';
import algoliasearch from 'algoliasearch';

class AlgoliaSearcher extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.index = algoliasearch('6ZKM9KX3HB', '21e5e06939c62ab6592ef9ef06e05f15').initIndex('radio-dev')
    }
}
