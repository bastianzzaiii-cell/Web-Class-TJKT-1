const PIN_BENAR = "3301"; 
let pinInput = ""; 
const pinDisplay = document.getElementById("pinDisplay");

function tekanAngka(angka) {
    if (pinInput.length < 6) {
        pinInput += angka; 
        pinDisplay.innerText = "•".repeat(pinInput.length);
        
        if (pinInput === PIN_BENAR) {
            setTimeout(bukaKunci, 200); 
        }
    }
}

function hapusPIN() {
    pinInput = "";
    pinDisplay.innerText = "";
}

function bukaKunci() {
    document.getElementById("backsound").play().catch(e => console.log("Audio play blocked"));
    
    var videoAtas = document.getElementById("mainVideo");
    videoAtas.play();
    videoAtas.muted = true;
    
    document.getElementById("lockscreen").classList.add("unlock-screen");
}

function bukaTab(evt, namaTab) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    document.getElementById(namaTab).classList.add("active");
    evt.currentTarget.classList.add("active");

    document.querySelector(".content-area").scrollTop = 0;
}

function bukaTabSub(evt, namaSubTab) {
    var subContents = document.getElementsByClassName("sub-tab-content");
    for (var i = 0; i < subContents.length; i++) {
        subContents[i].style.display = "none";
    }
    var subBtns = evt.currentTarget.parentElement.getElementsByClassName("tab-btn");
    for (var i = 0; i < subBtns.length; i++) {
        subBtns[i].classList.remove("active");
    }
    document.getElementById(namaSubTab).style.display = "block";
    evt.currentTarget.classList.add("active");
}

  