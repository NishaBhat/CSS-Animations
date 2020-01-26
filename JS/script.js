const  doc = document;
const tablinks = doc.getElementsByClassName("tablinks");

const openTab = function(tabName,evt) {
    // Declare all variables
    let i, tabcontent;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = doc.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    //tablinks = doc.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    doc.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
    
  doc.getElementById("defaultTab").click();