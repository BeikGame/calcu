function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    const display = document.getElementById("display");
    
    try {
        display.value = eval(display.value.replace(/Math.sqrt/g, "Math.sqrt").replace(/Math.pow/g, "Math.pow").replace(/Math.sin/g, "Math.sin").replace(/Math.cos/g, "Math.cos").replace(/Math.tan/g, "Math.tan"));
        
        
        if (display.value === undefined || display.value === 'Infinity' || display.value === '-Infinity') {
            throw new Error();
        }
        
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}