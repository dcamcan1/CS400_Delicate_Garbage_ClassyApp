const { JSDOM } = require('jsdom');
const { createClassroomElement, getClassroomState, toggleCondition, addFeedback, toggleNotes } = require('../public/js/dashboard');

describe('getClassroomState', () => {
    it('should return "good" if all conditions are true', () => {
        const classroom = { isClean: true, techFunctional: true, isStocked: true };
        expect(getClassroomState(classroom)).toBe('good');
    });

    it('should return "warning" if one condition is false', () => {
        const classroom = { isClean: true, techFunctional: false, isStocked: true };
        expect(getClassroomState(classroom)).toBe('warning');
    });

    it('should return "bad" if more than one condition is false', () => {
        const classroom = { isClean: false, techFunctional: false, isStocked: true };
        expect(getClassroomState(classroom)).toBe('bad');
    });
});
