// toggling options for the job cards
let currentTab = "all";

function toggleTab(tab) {
    // const allTab = document.getElementById("all-tab");
    // const appliedTab = document.getElementById("applied-tab");
    // const interviewTab = document.getElementById("interview-tab");
    // const offerTab = document.getElementById("offer-tab");
    console.log(tab);
    const tabs = ["all", "interview", "rejected"];
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
}