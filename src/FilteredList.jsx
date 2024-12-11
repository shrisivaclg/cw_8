import React, { Component } from 'react';
import './FilteredList.css';
import List from './List';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = { filter: 'All', search: '' };
    }

    handleFilterChange = (type) => {
        this.setState({ filter: type });
    };

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    };

    filterItems = () => {
        const { items } = this.props;
        const { filter, search } = this.state;

        return items.filter(
            (item) =>
                (filter === 'All' || item.type === filter) &&
                item.name.toLowerCase().includes(search.toLowerCase())
        );
    };

    render() {
        return (
            <div className="filtered-list-container">
                <div className="search-filter-container">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search items..."
                        onChange={this.handleSearchChange}
                    />
                    <Dropdown className="dropdown-filter">
                        <Dropdown.Toggle>Filter</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => this.handleFilterChange('All')}>
                                All
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => this.handleFilterChange('Fruit')}>
                                Fruit
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => this.handleFilterChange('Vegetable')}>
                                Vegetable
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <List items={this.filterItems()} />
            </div>
        );
    }
}

export default FilteredList;
