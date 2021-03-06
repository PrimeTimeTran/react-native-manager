import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='auth'>
          <Scene
            key='login'
            component={LoginForm}
            title='Please login'
          />
        </Scene>
        <Scene key='main'>
          <Scene
            key='employeeList'
            component={EmployeeList}
            title='Employees'
            rightTitle='Add'
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene
            key='employeeCreate'
            component={EmployeeCreate}
            title='Create Employee'
            rightTitle='Save'
            onRight={() => console.log('Create Employee')}
          />
          <Scene
            key='employeeEdit'
            component={EmployeeEdit}
            title='Edit Employee'
            rightTitle='Save'
            onRight={() => console.log('Create Edit')}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
