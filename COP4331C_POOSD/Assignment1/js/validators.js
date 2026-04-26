//This function will take a color string and ensure it is not blank
function validateColor(color)
    {
        if(!color || color.trim() === "") return false;
        return true;
    }

/*This will allow Node.js to read the function for testing, but it won't crash
  when linked in HTML    */
if(typeof module !== 'undefined' && module.exports) module.exports = validateColor;
