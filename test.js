// demo-addon.js
(function() {
    console.log("[Arradon Marketplace] UI Recolor Demo successfully injected!");

    // Example 1: Change the Arradon Panel color just to prove we can access the DOM
    const targetPanel = document.querySelector('.arradon-body');
    if (targetPanel) {
        targetPanel.style.backgroundColor = '#4e6280'; // Change UI grey to Dark Blue
    }

    // Example 2: Add a small floating toast notification to the game screen
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.backgroundColor = '#8cc55a'; // Arras Green
    toast.style.border = '3px solid #4a4a4a';
    toast.style.color = '#fff';
    toast.style.padding = '8px 15px';
    toast.style.zIndex = '999999';
    toast.style.fontFamily = 'Ubuntu, sans-serif';
    toast.style.fontWeight = 'bold';
    toast.style.textShadow = '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000';
    toast.innerText = 'Demo Addon successfully loaded!';
    
    document.body.appendChild(toast);

    // Remove toast after 4 seconds
    setTimeout(() => {
        if(toast.parentElement) toast.remove();
    }, 4000);
})();
