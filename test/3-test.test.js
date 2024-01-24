const { JSDOM } = require('jsdom');
const { createClassroomElement, getClassroomState, toggleCondition, addFeedback, toggleNotes } = require('../public/js/dashboard');

describe('toggleCondition', () => {
    it('should toggle a condition for a classroom', () => {
        // Mock a classroom object
        const classroom = { isClean: true };

        // Toggle the condition
        toggleCondition(classroom, 'isClean');

        // Check if the condition changed
        expect(classroom.isClean).toBe(false);
    });
});
