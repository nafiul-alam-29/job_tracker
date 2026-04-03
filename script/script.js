// toggling options for the job cards
let currentTab = "all";

const allContainer = document.getElementById('all-container')
const interviewContainer = document.getElementById('interview-container')
const rejectContainer = document.getElementById('reject-container')
const emptystat = document.getElementById('no-jobs')



console.log(allContainer,interviewContainer,rejectContainer)

// toggling tab function
function toggleTab(tab) {
    
    const tabs = ["all", "interview", "rejected"];
    // toggle style
    currentTab = tab
    for (const t of tabs) {
       
        const tabName = document.getElementById(`tab-${t}`);
        if (t === tab) {
             
             {  
                tabName.classList.add("bg-blue-400", "text-white");
                tabName.classList.remove("bg-gray-300");
             }
            
        } else {
            tabName.classList.remove("bg-blue-400", "text-white");
            tabName.classList.add("bg-gray-300");
        }
    }
    const pagesSection = [allContainer,interviewContainer,rejectContainer]
    for (const pages of pagesSection) {
        pages.classList.add('hidden')
    }
    emptystat.classList.add('hidden')
    // show card according to tab selected
    if(tab ==='all')
    {
        allContainer.classList.remove('hidden')
        
        if(allContainer.children.length < 1)
        {
           emptystat.classList.remove('hidden') 
        }
        
    }
    else if(tab ==='interview')
    {
        interviewContainer.classList.remove('hidden')
        if(interviewContainer.children.length < 1)
    {
        emptystat.classList.remove('hidden') 
    }
    } 
    else{
        rejectContainer.classList.remove('hidden')
        if(rejectContainer.children.length < 1){
            emptystat.classList.remove('hidden')
        }
    }
    updatestat();
}

// stat update

const statCount = document.getElementById('stat-total')
const statInterview = document.getElementById('stat-interview')
const statReject = document.getElementById('stat-reject')
const totalJobs = document.getElementById('total-jobs')


statCount.innerText = allContainer.children.length
// totalJobs.innerText = allContainer.children.length

// call toggle function for select all tab

toggleTab(currentTab)

function updatestat(){
    // statCount.innerText = allContainer.children.length
    // statInterview.innerText = interviewContainer.children.length
    // statReject.innerText = rejectContainer.children.length

    const count = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectContainer.children.length
    }
    statCount.innerText = count['all'];
    statInterview.innerText = count['interview']
    statReject.innerText = count['rejected']
    totalJobs.innerText = count[currentTab]

    if(count[currentTab]< 1)
    {
        emptystat.classList.remove('hidden')
    }
    else{
        emptystat.classList.add('hidden')
    }

}



updatestat()

// getting btn functionatility

document.getElementById('avaliable-jobs-container').addEventListener('click', function(e) {
    const clickElement = e.target;
    const card = clickElement.closest('.card')
    const parent = card.parentNode;
    const status = card.querySelector('.status')

    if(clickElement.classList.contains("interview")){
        status.innerText ="Interviewed"
        status.classList.add('text-green-500')
        interviewContainer.appendChild(card)
        
    }

    if(clickElement.classList.contains("reject")){
        status.innerText ="Rejected"
        status.classList.add('text-red-500')
        rejectContainer.appendChild(card)
       
    }

    if(clickElement.classList.contains("delete")){
        parent.removeChild(card)
        
    }
    updatestat()
})



