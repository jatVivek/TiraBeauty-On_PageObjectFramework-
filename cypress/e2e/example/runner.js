import TestCase01 from "../../integration/testCases/TestCase01";
import TestCase02 from "../../integration/testCases/TestCase02";
import TestCase03 from "../../integration/testCases/TestCase03";
import TestCase04 from "../../integration/testCases/TestCase04";
import TestCase05 from "../../integration/testCases/TestCase05";
import TestCase06 from "../../integration/testCases/TestCase06";
import TestCase07 from "../../integration/testCases/TestCase07";
describe('Test Suite', () => {
    it('First Test Case', () => {
        const firstTestCase = new TestCase01();
        firstTestCase.TestCase01();
    });
    it('Test Case No.2', () => {
        const testCase02 = new TestCase02();
        testCase02.testCase02();
    });
    it('Test Case No.3', () => {
        const testCase03 = new TestCase03();
        testCase03.testCase03();
    });
    it('Test Case No.4', () => {
        const testCase04 = new TestCase04();
        testCase04.testCase04();
    });
    it('Test Case No.5', () => {
        const testCase05 = new TestCase05();
        testCase05.testCase05();
    });
    it('Test Case No.6', () => {
        const testCase06 = new TestCase06();
        testCase06.testCase06();
    });
    it('Test Case No.7', () => {
        const testCase07 = new TestCase07();
        testCase07.testCase07();
    });
});
