let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

// function for increase homescore
function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore 
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

// function for increase guestscore

function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

//function that reset all scores 

function reset(){
    guestScore = 0
    homeScore = 0
    guestScoreEl.textContent = guestScore 
    homeScoreEl.textContent = homeScore
}