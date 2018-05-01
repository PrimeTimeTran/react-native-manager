import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { SearchBar } from 'react-native-elements';

import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are next set of props. this.props is the old
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    return (
      <View style={styles.employeeListStyle}>
        <SearchBar
          placeholder='Type Here...' />
        <Text> EmployeeList </Text>
      </View>
    );
  }
}

const styles = {
  employeeListStyle: {
    paddingTop: 70
  }
};

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
