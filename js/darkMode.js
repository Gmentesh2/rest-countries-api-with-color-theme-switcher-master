// dark mode & light mode

const themeModeBtn = document.querySelector("#theme-mode-span")
const themeModeIcon = document.querySelector(".theme-mode-icon")

const themeSwitcherBtn = document.querySelector("#theme-switch-btn");

themeSwitcherBtn.addEventListener(("click"), () =>{
    document.body.classList.toggle("dark")

    if(document.body.classList.contains("dark")){
        themeModeBtn.textContent = "Light Mode";
        themeModeIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`
        // themeModeBtn.style.color = "hsl(0, 0%, 100%)"
        // themeModeIcon.style.color = "hsl(0, 0%, 100%)"
    }else{
        themeModeBtn.textContent = "Dark Mode"
        themeModeIcon.innerHTML = `<i class="fa-regular fa-moon">`
        // themeModeIcon.style.color = "hsl(200, 15%, 8%)"
        // themeModeBtn.style.color = "hsl(200, 15%, 8%)"
    }
})