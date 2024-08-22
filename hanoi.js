function towerOfHanoi(n, source, destination, auxiliary) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }
    towerOfHanoi(n - 1, source, auxiliary, destination);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, destination, source);
}

// Example usage:
const numberOfDisks = 3;  // Change this value as needed
towerOfHanoi(numberOfDisks, 'A', 'C', 'B');

module.exports = { towerOfHanoi }; // Exporting the function
