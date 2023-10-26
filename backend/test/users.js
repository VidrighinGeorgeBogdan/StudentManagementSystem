import {selectUser,selectAllUsers,insertUser} from '../src/database/users.js';
import sinon from 'sinon'
import assert from "assert";
describe("unit test 1", function() {
    it("should return a select querry from the table users based on an id", function() {
        let select = selectUser(5);
        assert.strictEqual(select,"SELECT * FROM users WHERE id = 5");
    });
});
describe("unit test 2", function() {
    it("should return a select all querry from the table users", function() {
        let select = selectAllUsers();
        assert.strictEqual(select,"SELECT * FROM users");
    });
});
describe("unit test 3", function() {
    it("should return a insert querry based on a users information", function() {
        const user={
            email:'test01@abc.com',
            first_name:'test1',
            last_name:'test2',
            password:'*****',
            role_id:'2',
            status_id:'3',
        };
        let select = insertUser(user);
        
        assert.strictEqual(select,`INSERT INTO users 
(email, first_name, last_name, password, role_id, status_id) 
VALUES 
("test01@abc.com", "test1", "test2", "*****", "2", "3")`);
    });
});

describe("mock test 1", function() {
    it("should return a select query from the table users based on an id", function() {
      // Mocking the selectUser function
      const selectUser = sinon.mock().withArgs(5).returns("SELECT * FROM users WHERE id = 5");
  
      // Call the function being tested
      let select = selectUser(5);
  
      // Assertion
      assert.strictEqual(select, "SELECT * FROM users WHERE id = 5");
  
      // Verification of the mock
      selectUser.verify();
    });
  });

describe("mock test 2", function() {
  it("should return a select all query from the table users", function() {
    // Mocking the selectAllUsers function
    const selectAllUsers = sinon.mock().returns("SELECT * FROM users");

    // Call the function being tested
    let select = selectAllUsers();

    // Assertion
    assert.strictEqual(select, "SELECT * FROM users");

    // Verification of the mock
    selectAllUsers.verify();
  });
});
describe("mock test 3", function() {
    it("should return an insert query based on a user's information", function() {
      const user = {
        email: 'test01@abc.com',
        first_name: 'test1',
        last_name: 'test2',
        password: '*****',
        role_id: '2',
        status_id: '3',
      };
  
      // Mocking the insertUser function
      const insertUser = sinon.mock().withArgs(user).returns(`INSERT INTO users 
  (email, first_name, last_name, password, role_id, status_id) 
  VALUES 
  ("test01@abc.com", "test1", "test2", "*****", "2", "3")`);
  
      // Call the function being tested
      let select = insertUser(user);
  
      // Assertion
      assert.strictEqual(
        select,
        `INSERT INTO users 
  (email, first_name, last_name, password, role_id, status_id) 
  VALUES 
  ("test01@abc.com", "test1", "test2", "*****", "2", "3")`
      );
  
      // Verification of the mock
      insertUser.verify();
    });
  });