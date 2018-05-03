import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';

import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are next set of props. this.props is the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return (
      <ListItem employee={employee}>
        {employee.name}
      </ListItem>
    );
  }

  render() {
    return (
      <View style={styles.employeeListStyle}>
        <SearchBar
          placeholder='Type Here...'
        />
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = {
  employeeListStyle: {
    paddingTop: 70,
    flex: 1
  }
};

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
