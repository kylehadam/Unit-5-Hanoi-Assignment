describe('Tower of Hanoi', function() {
    it('should print the correct sequence of moves for 3 disks', async function() {
        const { expect } = await import('chai');
        const { towerOfHanoi } = await import('../hanoi.js');

        const result = [];
        const originalLog = console.log;

        // Capture console output
        console.log = (msg) => result.push(msg);

        // Execute the function
        towerOfHanoi(3, 'A', 'C', 'B');

        // Restore console.log
        console.log = originalLog;

        // Assert the expected result
        expect(result).to.deep.equal([
            'Move disk 1 from A to C',
            'Move disk 2 from A to B',
            'Move disk 1 from C to B',
            'Move disk 3 from A to C',
            'Move disk 1 from B to A',
            'Move disk 2 from B to C',
            'Move disk 1 from A to C'
        ]);
    });
});
