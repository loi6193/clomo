function copyToClipboard(index) {
    var copyTarget = document.getElementById("copyTarget" + index);
    
    copyTarget.select();
    
    document.execCommand("Copy");
}