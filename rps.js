let noOfRound = 0;
let usrCnt = 0;
let compCnt = 0;

function result(usrNme, user) {
    noOfRound++;
    const comp = Math.floor(Math.random() * 3) + 1;
    user = Number.parseInt(user);
    if (user == 1 && comp == 3 || user == 2 && comp == 1 || user == 3 && comp == 2) {
        usrCnt++;
        return `Congrats ${usrNme}! You win `;
    }
    else if (user == 2 && comp == 3 || user == 3 && comp == 1 || user == 1 && comp == 2) {
        compCnt++;
        return "Sorry, Computer win ";
    }
    else
        return "Match is drawn ";
}

function compareScore(usrNm, usr, com) {
    if (usr > com)
        return `${usrNm} is leading`;
    else if (com > usr)
        return 'Computer is leading';
    else if (com === usr)
        return 'No lead';
}

function playMatch() {
    const usrName = document.getElementById('usrNme').value;
    let user = document.getElementById('inpSel').value;
    if (usrName.trim() === '')
        alert('Enter your name ');
    else {
        if (user === '#')
            document.getElementById('notify').innerText = `${usrName} choose valid option`;
        else {
            document.getElementById('notify').innerText = result(usrName, user);
            let dispLead = compareScore(usrName, usrCnt, compCnt)
            const text = `Round ${noOfRound} :\n${usrName} : ${usrCnt}   Computer : ${compCnt}\n${dispLead}`;
            document.getElementById('dispScore').innerText = text;
        }
    }
}



