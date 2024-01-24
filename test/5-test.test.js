const { JSDOM } = require('jsdom');
const { createClassroomElement, getClassroomState, toggleCondition, addFeedback, toggleNotes } = require('../public/js/dashboard');

describe('getClassroomState', () => {
    it('should return the correct state based on conditions', () => {
        // Example for 'good' state
        expect(getClassroomState({ isClean: true, isStocked: true })).toBe('good');

        // Example for 'warning' state
        expect(getClassroomState({ isClean: false, isStocked: true })).toBe('warning');

        // Example for 'bad' state
        expect(getClassroomState({ isClean: false, isStocked: false })).toBe('bad');
    });
});
