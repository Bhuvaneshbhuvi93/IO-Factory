// Get DOM elements
const inputField = document.getElementById('blocks');
const calculateBtn = document.getElementById('calculate');
const resultElement = document.getElementById('result');
const waterTank = document.getElementById('waterTank');

// Add event listener to the calculate button
calculateBtn.addEventListener('click', calculateWaterUnits);

// Calculate the units of water stored
function calculateWaterUnits() {
   const blocksString = inputField.value.trim();
   const blocks = blocksString.split(',').map(Number);

   const waterUnits = getWaterUnits(blocks);
   resultElement.textContent = `${waterUnits} Units`;

   displayWaterTank(blocks);
}

// Helper function to calculate the units of water stored
function getWaterUnits(blocks) {
   const n = blocks.length;
   let leftMax = 0;
   let rightMax = 0;
   let left = 0;
   let right = n - 1;
   let units = 0;

   while (left <= right) {
       if (blocks[left] <= blocks[right]) {
           if (blocks[left] > leftMax) {
               leftMax = blocks[left];
           } else {
               units += leftMax - blocks[left];
           }
           left++;
       } else {
           if (blocks[right] > rightMax) {
               rightMax = blocks[right];
           } else {
               units += rightMax - blocks[right];
           }
           right--;
       }
   }

   return units;
}

// Helper function to display the water tank in a table
function displayWaterTank(blocks) {
   waterTank.innerHTML = ''; // Clear previous table content

   const n = blocks.length;
   const maxBlockHeight = Math.max(...blocks);

   for (let i = maxBlockHeight; i > 0; i--) {
       const row = document.createElement('tr');

       for (let j = 0; j < n; j++) {
           const cell = document.createElement('td');
           if (blocks[j] >= i) {
               cell.classList.add('filled');
           }
           row.appendChild(cell);
       }

       waterTank.appendChild(row);
   }
}
