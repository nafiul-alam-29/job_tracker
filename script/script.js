// toggling options for the job cards
let currentTab = "all";

const allContainer = document.getElementById('all-container')
const interviewContainer = document.getElementById('interview-container')
const rejectContainer = document.getElementById('reject-container')


console.log(allContainer,interviewContainer,rejectContainer)

// toggling tab function
function toggleTab(tab) {
    
    const tabs = ["all", "interview", "rejected"];
    // toggle style
    for (const t of tabs) {
        const tabName = document.getElementById(`tab-${t}`);
        if (t === tab) {
            tabName.classList.add("bg-blue-400", "text-white");
            tabName.classList.remove("bg-gray-300");
        } else {
            tabName.classList.remove("bg-blue-400", "text-white");
            tabName.classList.add("bg-gray-300");
        }
    }
    const pagesSection = [allContainer,interviewContainer,rejectContainer]
    for (const pages of pagesSection) {
        pages.classList.add('hidden')
    }
    // show card according to tab selected
    if(tab ==='all')
    {
        allContainer.classList.remove('hidden')
    }
    else if(tab ==='interview')
    {
        interviewContainer.classList.remove('hidden')
    }
    else{
        rejectContainer.classList.remove('hidden')
    }
}

// stat update

const statCount = document.getElementById('stat-total')
const statInterview = document.getElementById('stat-interview')
const statReject = document.getElementById('stat-reject')
// const totalJobs = document.getElementById('total-jobs')

statCount.innerText = allContainer.children.length
// totalJobs.innerText = allContainer.children.length

// call toggle function for select all tab

toggleTab(currentTab)

// getting btn functionatility

document.getElementById('avaliable-jobs-container').addEventListener('click', function(e) {
    const eventElemetn = e.target;

    if(eventElemetn.classList.contains("interview")){
        console.log('interview clicked')
    }

    if(eventElemetn.classList.contains("reject")){
        console.log('reject clicked');
    }

    if(eventElemetn.classList.contains("delete")){
        console.log('delete clicked')
    }
})



