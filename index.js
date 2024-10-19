// temp data, will be added to local storage
const watchedVideos = []
let watchedToday = 0
let totalWatched = 0
let totalProjects = 0

const watchedVideoBtnEl = document.getElementById("watched-video-btn")
const projectCompleteBtnEl = document.getElementById("project-complete-btn")
const totalProjectsEl = document.getElementById("total-projects")
const overallProgLabelEl = document.getElementById("overall-prog-label")


watchedVideoBtnEl.addEventListener("click", function(){
    watchedToday++
    totalWatched++
    taskCompletionNotif("video", totalWatched)
    document.getElementById("watched-today").innerText = watchedToday
    document.getElementById("videos-watched").innerText = totalWatched
    overallProgLabelEl.innerText = `Overall Progress - ${totalWatched + totalProjects}`
    document.getElementById("overall-progress").innerText += "⏩"
})

projectCompleteBtnEl.addEventListener("click", function(){
    totalProjects++
    document.getElementById("total-projects").innerText = totalProjects
    overallProgLabelEl.innerText = `Overall Progress - ${totalWatched + totalProjects}`
    document.getElementById("overall-progress").innerText += "🏅"
    taskCompletionNotif("project", totalProjects)
})

//task completion modal
function taskCompletionNotif(task, total) {
    const taskCompletionNotifModal = document.getElementById("task-completion-notification")

    if (task === "video") {
        taskCompletionNotifModal.textContent = `You watched a new video! Total videos watched: ${total}`
    } else if (task === "project") {
        taskCompletionNotifModal.textContent = `You completed a new project! Total projects completed: ${total}`
    }

    taskCompletionNotifModal.style.display = "flex"
    setTimeout(() => {
        taskCompletionNotifModal.style.display = "none"
    }, 5000)
}

//generic modal
const signUpBtn = document.getElementById("sign-up-btn")
const signInBtn = document.getElementById("sign-in-btn")
const xOutModalBtnsArr = document.querySelectorAll(".x-out")
const buttonsArr = document.querySelector("#container").querySelectorAll(".btn")
const createUserBtn = document.getElementById("create-user")
const loginBtn = document.getElementById("login-btn")

signUpBtn.addEventListener("click", () => {
    displayGenericModal("sign-up")
})

signInBtn.addEventListener("click", () => {
    displayGenericModal("sign-in")
})

xOutModalBtnsArr.forEach(button => {
    button.addEventListener("click", (event) => {
        hideModal(event.target.parentElement)
        signUpBtn.disabled = false;
        signInBtn.disabled = false;
    })
})

createUserBtn.addEventListener("click", (event) => {
    enableBtns()
    hideModal(event.target.parentElement.parentElement)
})

loginBtn.addEventListener("click", (event) => {
    enableBtns()
    hideModal(event.target.parentElement.parentElement)
})

function displayGenericModal(type) {
    const modal = document.getElementById(`${type}-modal`)

    buttonsArr.forEach(button => {
        button.disabled = true;
    });

    modal.style.display = "grid"
}

function hideModal(selectedModal) {
    selectedModal.style.display = "none"
}

function enableBtns() {
    buttonsArr.forEach(button => {
        button.disabled = false;
    });
}