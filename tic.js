flag = 1;

function valueassign(btu) {

    if (flag == 1) {
        document.getElementById(btu).value = "X";
        document.getElementById(btu).disabled = true;
        flag = 0;
    } else {
        document.getElementById(btu).value = "0";
        document.getElementById(btu).disabled = true;
        flag = 1;
    }
}
function reset() {
    location.reload();
    var ID = [];
    $("*").each(function() {
        if (this.id) {
            ID.push(this.id);
            document.getElementById(this.id).value = '';
        }
    });
}

function check() {
    var win;
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
        win="x";
        document.getElementById('print').innerHTML = "Player X won";

    } else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
        win="x";
        document.getElementById('print').innerHTML = "Player X won";

    } else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) {
        win="x";
        document.getElementById('print').innerHTML = "Player X won";
    
    } else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) {
        win="x";
        document.getElementById('print').innerHTML = "Player X won";
    
    } else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
        win="x";
        document.getElementById('print').innerHTML = "Player X won";
    
    } else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) {
        win="x";
        document.getElementById('print').innerHTML = "Player X won";
    
    } else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
        win="x";
        document.getElementById('print').innerHTML = "Player X won";
    
    } else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
        win="x";
        document.getElementById('print').innerHTML = "Player X won";
    
    }
    
    else if ((b1 == '0') && (b2 == '0') && (b3 == '0')) {
        win="0";
        document.getElementById('print').innerHTML = "Player 0 won";
    
    } else if ((b1 == '0') && (b4 == '0') && (b7 == '0')) {
        win="0";
        document.getElementById('print').innerHTML = "Player 0 won";
    
    } else if ((b7 == '0') && (b8 == '0') && (b9 == '0')) {
        win="0";
        document.getElementById('print').innerHTML = "Player 0 won";
    
    } else if ((b3 == '0') && (b6 == '0') && (b9 == '0')) {
        win="0";
        document.getElementById('print').innerHTML = "Player 0 won";
    
    } else if ((b1 == '0') && (b5 == '0') && (b9 == '0')) {
        win="0";
        document.getElementById('print').innerHTML = "Player 0 won";
    
    } else if ((b3 == '0') && (b5 == '0') && (b7 == '0')) {
        win="0";
        document.getElementById('print').innerHTML = "Player 0 won";
    
    } else if ((b2 == '0') && (b5 == '0') && (b8 == '0')) {
        win="0";
        document.getElementById('print').innerHTML = "Player 0 won";
    
    } else if ((b4 == '0') && (b5 == '0') && (b6 == '0')) {
        win="0";
        document.getElementById('print').innerHTML = "Player 0 won";
    
    }
    
    else if ((b1 == 'X' || b1 == '0') && 
             (b2 == 'X' || b2 == '0') && 
             (b3 == 'X' || b3 == '0') && 
             (b4 == 'X' || b4 == '0') && 
             (b5 == 'X' || b5 == '0') && 
             (b6 == 'X' || b6 == '0') &&
             (b7 == 'X' || b7 == '0') && 
             (b8 == 'X' || b8 == '0') && 
             (b9 == 'X' || b9 == '0')) {
        document.getElementById('print').innerHTML = "Match Tie";
        win="T";
        
    } else {

        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        } else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
    // if(win === "T"){
    //     window.alert('Match Tie');
    // }
    // else if(win === "x"){
    //     window.alert('Player X won');
    // }
    // else if(win === "0"){
    //     window.alert('Player 0 won');
    // }
}