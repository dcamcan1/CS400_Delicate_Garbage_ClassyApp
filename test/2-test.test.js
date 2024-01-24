const { JSDOM } = require('jsdom');
const { createClassroomElement, getClassroomState, toggleCondition, addFeedback, toggleNotes } = require('../public/js/dashboard');

describe('toggleNotes', () => {
    it('should toggle the display style of a note box', () => {
        // Set up a mock DOM element for the notes box
        const mockNoteBox = { style: { display: 'none' } };

        // Simulate the function call
        toggleNotes(mockNoteBox);

        // Check if display style toggled to 'block'
        expect(mockNoteBox.style.display).toBe('block');

        // Toggle again
        toggleNotes(mockNoteBox);

        // Check if display style toggled back to 'none'
        expect(mockNoteBox.style.display).toBe('none');
    });
});
