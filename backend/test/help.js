import {hashPassword, comparePassword} from '../src/services/helper.js';
import { checkSenderByEmailQuerry, checkSenderByIdQuerry } from '../src/database/helper.js';
import assert from "assert";
describe("unit test hashPassword", function() {
    it("should return a hash of a password", async function() {
        let hash = await hashPassword("testPass");
        assert.ok(hash.length);
    });
});

describe("unit test comparePassword", function() {
    it("should return true if password is correct", async function() {
        let hash = await hashPassword("testPass");
        let result = await comparePassword("testPass", hash);
        assert.ok(result);
    });
    it("should return false if password is incorrect", async function() {
        let hash = await hashPassword("testPass");
        let result = await comparePassword("testPass1", hash);
        assert.ok(!result);
    });
});

describe("unit test checkSenderByEmailQuerry", function() {
    it("should return a querry to check sender by email", async function() {
        let result = await checkSenderByEmailQuerry("testEmail");
        assert.strictEqual(result, "SELECT r.name FROM users u inner join user_role r on r.id = u.role_id WHERE u.email = 'testEmail'");
    });
});

describe("unit test checkSenderByIdQuerry", function() {
    it("should return a querry to check sender by id", async function() {
        let result = await checkSenderByIdQuerry("testId");
        assert.strictEqual(result, "SELECT r.name FROM users u inner join user_role r on r.id = u.role_id WHERE u.id = 'testId'");
    });
});