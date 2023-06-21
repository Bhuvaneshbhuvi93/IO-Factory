// Get DOM elements
const inputField = document.getElementById('blocks');
const calculateBtn = document.getElementById('calculate');
const resultElement1 = document.getElementById('result1');
const resultElement2 = document.getElementById('result2');
const waterTank = document.getElementById('waterTank');
const waterLevelsTable = document.getElementById('waterLevelsTable');

// Add event listener to the calculate button
calculateBtn.addEventListener('click', calculateWaterUnits);

// Calculate the units of water stored
function calculateWaterUnits() {
   const blocksString = inputField.value.trim();
   const blocks = blocksString.split(',').map(Number);

   const waterLevelsString = getWaterLevels(blocks); // Get water levels as a string
   const waterLevels = waterLevelsString.split(',').map(Number); // Convert water levels to numbers

   // Display input
   const inputDisplay = document.createElement('p');
   inputDisplay.textContent = `Input: [${blocks.join(',')}]`;
   resultElement1.appendChild(inputDisplay);

   displayWaterTank(blocks, waterLevels); // Display water tank

   const waterUnits = getWaterUnits(blocks);
   const outputDisplay = document.createElement('p');
   outputDisplay.textContent = `Output: ${waterUnits} Units`; // Display output
   resultElement2.appendChild(outputDisplay);

   displayWaterLevels(waterLevels); // Display water levels
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

// Helper function to display the waterlevels in tank 
function getWaterLevels(blocks) {
    const n = blocks.length;
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = n - 1;
    let waterLevels = [];
  
    while (left <= right) {
      if (blocks[left] <= blocks[right]) {
        if (blocks[left] > leftMax) {
          leftMax = blocks[left];
        } else {
          waterLevels[left] = leftMax - blocks[left];
        }
        left++;
      } else {
        if (blocks[right] > rightMax) {
          rightMax = blocks[right];
        } else {
          waterLevels[right] = rightMax - blocks[right];
        }
        right--;
      }
    }
  
    // Fill empty water levels with zeros
    for (let i = 0; i < n; i++) {
      if (waterLevels[i] === undefined) {
        waterLevels[i] = 0;
      }
    }
  
    return waterLevels.join(',');
  } 


// Helper function to display the water tank in a table

function displayWaterTank(blocks, waterLevels) {
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
            if (waterLevels[j] >= i) {
                cell.classList.add('water');
            }
            row.appendChild(cell);
        }
 
        waterTank.appendChild(row);
    }
 }
 
 function displayWaterLevels(waterLevels) {
    waterLevelsTable.innerHTML = ''; // Clear previous table content

    const n = waterLevels.length;
    const maxBlockHeight = Math.max(...waterLevels);

    for (let i = maxBlockHeight; i > 0; i--) {
        const row = document.createElement('tr');
 

    for (let j = 0; j < n; j++) {
        const cell = document.createElement('td');
        if (waterLevels[j] > i) {
            cell.classList.add('water');
        }
        row.appendChild(cell);
    }
    waterLevelsTable.appendChild(row);
    }
}

 
  
  

 
