var t = new Array(9);

function zero(){
    var id = Math.floor(Math.random() * 9);
    t[id] ? zero() : move(id, 'zero');
}

function checkEnd() {
    if (t[0] == 'zero' && t[1] == 'zero' && t[2] == 'zero' || t[0] == 'player' && t[1] == 'player' && t[2] == 'player') return true;
    else if (t[3] == 'zero' && t[4] == 'zero' && t[5] == 'zero' || t[3] == 'player' && t[4] == 'player' && t[5] == 'player') return true;
    else if (t[6] == 'zero' && t[7] == 'zero' && t[8] == 'zero' || t[6] == 'player' && t[7] == 'player' && t[8] == 'player') return true;
    else if (t[0] == 'zero' && t[3] == 'zero' && t[6] == 'zero' || t[0] == 'player' && t[3] == 'player' && t[6] == 'player') return true;
    else if (t[1] == 'zero' && t[4] == 'zero' && t[7] == 'zero' || t[1] == 'player' && t[4] == 'player' && t[7] == 'player') return true;
    else if (t[2] == 'zero' && t[5] == 'zero' && t[8] == 'zero' || t[2] == 'player' && t[5] == 'player' && t[8] == 'player') return true;
    else if (t[0] == 'zero' && t[4] == 'zero' && t[8] == 'zero' || t[0] == 'player' && t[4] == 'player' && t[8] == 'player') return true;
    else if (t[2] == 'zero' && t[4] == 'zero' && t[6] == 'zero' || t[2] == 'player' && t[4] == 'player' && t[6] == 'player') return true;
    else if (t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return true;
}

function move(id, role) {
    if  (t[id]) return false;
    t[id] = role;
    document.getElementById(id).className = 'cell ' + role;
    !checkEnd() ? (role == 'player') ? zero() : null : reset()
}

function reset() {
    alert("Игра окончена!");
    location.reload();
}
