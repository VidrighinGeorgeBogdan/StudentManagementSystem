import sinon from 'sinon';
import bcrypt from "bcrypt"

import {hashPassword, comparePassword} from '../src/services/helper.js';

import assert from "assert";
describe("unit test hashPassword", function() {
    it("should return a hash of a password mocked", async function() {
      // Mocking the hashPassword function
      const hashPassword = sinon.mock().withArgs("testPass").resolves("hashedPassword");
  
      // Call the function being tested
      let hash = await hashPassword("testPass");
  
      // Assertion
      assert.ok(hash.length);
  
      // Verification of the mock
      hashPassword.verify();
    });
  });

  describe("unit test hashPassword", function() {
    it("should compare a hash of a password mocked", async function() {
      // Mocking the hashPassword function
      const comparePassword = sinon.mock().withArgs("testPass", '$2b$10$dzxghyYfQ5PWOr.NX57M3.vTl8FY5xI3yPjdcbT5ctnIfDGX5PBGq').resolves("comparedPasswords");
  
      // Call the function being tested
      let compare = await comparePassword("testPass", '$2b$10$dzxghyYfQ5PWOr.NX57M3.vTl8FY5xI3yPjdcbT5ctnIfDGX5PBGq');
  
      // Assertion
      assert.ok(compare);
  
      // Verification of the mock
      comparePassword.verify();
    });
  });