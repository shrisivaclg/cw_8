import React, { Component } from 'react';
import List from './List';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FilteredList.css';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = { filter: 'All', search: '' };
    }

    updateFilter = (type) => {
        this.setState({ filter: type });
    };

    updateSearch = (event) => {
        this.setState({ search: event.target.value });
    };

    filterItems = () => {
        return this.props.items.filter(
            (item) =>
                (this.state.filter === 'All' || item.type === this.state.filter) &&
                item.name.toLowerCase().includes(this.state.search.toLowerCase())
        );
    };

    render() {
        return (
            <div className="filtered-list-container">
                <div className="search-filter-container">
                    {/* Search Box */}
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search"
                        onChange={this.updateSearch}
                    />

                    {/* Filter Dropdown */}
                    <Dropdown className="dropdown-filter">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Filter
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => this.updateFilter('All')}>
                                All
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => this.updateFilter('Fruit')}>
                                Fruit
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => this.updateFilter('Vegetable')}>
                                Vegetable
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                {/* Display Filtered List */}
                <List items={this.filterItems()} />
            </div>
        );
    }
}

export default FilteredList;
