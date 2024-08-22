let towers;
let moves = [];
let diskCount;

function createDiskElement(diskSize, towerElement) {
    const disk = document.createElement('div');
    disk.className = 'disk';
    disk.style.width = `${30 + diskSize * 20}px`;
    disk.style.bottom = `${towerElement.children.length * 20}px`;
    disk.innerHTML = diskSize;
    towerElement.appendChild(disk);
    return disk;
}

function initializeTowers() {
    towers = {
        'A': document.getElementById('towerA'),
        'B': document.getElementById('towerB'),
        'C': document.getElementById('towerC')
    };

    for (let tower in towers) {
        towers[tower].innerHTML = '';
    }

    for (let i = diskCount; i > 0; i--) {
        createDiskElement(i, towers['A']);
    }
}

function towerOfHanoi(n, source, destination, auxiliary) {
    if (n === 1) {
        moves.push([source, destination]);
        return;
    }
    towerOfHanoi(n - 1, source, auxiliary, destination);
    moves.push([source, destination]);
    towerOfHanoi(n - 1, auxiliary, destination, source);
}

function moveDisk(from, to) {
    const fromTower = towers[from];
    const toTower = towers[to];

    if (fromTower.children.length > 0) {
        const disk = fromTower.lastElementChild;
        toTower.appendChild(disk);
        disk.style.bottom = `${toTower.children.length * 20}px`;
    }
}

function executeMoves() {
    if (moves.length === 0) return;
    const [from, to] = moves.shift();
    moveDisk(from, to);
    setTimeout(executeMoves, 500);
}

function startHanoi() {
    try {
        diskCount = parseInt(document.getElementById('diskCount').value);
        const errorMessageElement = document.getElementById('errorMessage');

        // Clear any previous error message
        errorMessageElement.textContent = '';

        // Error handling for invalid input
        if (isNaN(diskCount) || diskCount <= 0) {
            throw new Error("Please enter a valid positive integer for the number of disks.");
        }

        if (diskCount > 10) {
            throw new Error("Please enter a number of disks between 1 and 10.");
        }

        moves = [];
        initializeTowers();
        towerOfHanoi(diskCount, 'A', 'C', 'B');
        executeMoves();
    } catch (error) {
        document.getElementById('errorMessage').textContent = error.message;
    }
}