const { JSDOM } = require('jsdom');
const { createClassroomElement, getClassroomState, toggleCondition, addFeedback, toggleNotes } = require('../public/js/dashboard');

describe('addFeedback', () => {
    it('should add feedback to a classroom', () => {
        // Mock classroom and feedback data
        const classroom = { notes: [] };
        const feedback = 'New feedback';

        // Simulate adding feedback
        addFeedback(classroom, feedback);

        // Check if feedback was added
        expect(classroom.notes).toContain(feedback);
    });
});
