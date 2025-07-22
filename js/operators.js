// /*

//  Input : 
//     - الاسم
//     - العمر
//     - الخبرة (سنوات)
//     - المهارات (مصفوفة من المهارات)
//     - الشهادات (مصفوفة من الشهادات)
//     - اللغة (مصفوفة من اللغات)
//     - المشاريع (مصفوفة من المشاريع)
//     -----------------------------
// logic :
//     - المعيار	الوزن	طريقة الحساب
//     - التعليم	20%	بكالوريوس = 10، ماجستير = 15، دكتوراه = 20
//     - الخبرة	25%	كل سنة خبرة = 5 نقاط
//     - المهارات	20%	كل مهارة = 3 نقاط
//     - الشهادات	10%	كل شهادة = 2 نقاط
//     - اللغات	10%	كل لغة = 4 نقاط
//     - المشاريع	15%	كل مشروع = 5 نقاط


//         المرشح أحمد:

//     التعليم: ماجستير (15 نقطة)

//     الخبرة: 4 سنوات (4 × 5 = 20 نقطة)

//     المهارات: [Python, Django, SQL] (3 × 3 = 9 نقاط)

//     الشهادات: 2 شهادة (2 × 2 = 4 نقاط)

//     اللغات: [العربية، الإنجليزية] (2 × 4 = 8 نقاط)

//     المشاريع: 7 مشاريع (7 × 5 = 35 نقاط)

//     الحساب النهائي:

//     (15×0.20) + (20×0.25) + (9×0.20) + (4×0.10) + (8×0.10) + (35×0.15)
//     = 3 + 5 + 1.8 + 0.4 + 0.8 + 5.25
//     = 16.25 نقطة (من 20)
//     🎯 مستويات التقييم الجديدة:
//     النسبة	التقييم
//     90-100%	★★★★★ (ممتاز)
//     75-89%	★★★★ (جيد جداً)
//     60-74%	★★★ (مقبول)
//     40-59%	★★ (يحتاج تطوير)
//     <40%	★ (غير مؤهل)
// */


// Old code
// // Button to calculate the score
// let Name = document.getElementById("name");
// let Age = document.getElementById("age");
// let Experience = document.getElementById("experience");
// let Skills = document.getElementById("skills");
// let Certifications = document.getElementById("certifications");
// let Languages = document.getElementById("languages");
// let Projects = document.getElementById("projects");
// let calculateButton = document.getElementById("calculate");
// let Delete = document.getElementById("calculate-Delete");

// Name.addEventListener("change", function() {
//     console.log(  Name.value);
// });

// Age.addEventListener("change", function() {
//     console.log(  Age.value);
// });

// Experience.addEventListener("change", function() {
//     console.log( Experience.value);
// });

// Skills.addEventListener("change", function() {
//     console.log( Skills.value);
// });

// Certifications.addEventListener("change", function() {
//     console.log( Certifications.value);
// });

// Languages.addEventListener("change", function() {
//     console.log( Languages.value);
// });

// Projects.addEventListener("change", function() {
//     console.log( Projects.value);
// });

// let Input = [Name, Age, Experience, Skills, Certifications, Languages, Projects];
// Delete.addEventListener("click", function() {
//     Input.forEach(function(input) {
//         input.value = "";
//     });
//     result.style.display = "none";

// });


// // Button to calculate the score
// let resName = document.getElementById("res-name");
// let resAge = document.getElementById("res-age");
// let resExperience = document.getElementById("res-experience");
// let resSkills = document.getElementById("res-skills");
// let resCertifications = document.getElementById("res-certifications");
// let resLanguages = document.getElementById("res-languages");
// let resProjects = document.getElementById("res-projects");
// let resTotal = document.getElementById("res-total");
// let result = document.getElementById("evaluation-result")

// calculateButton.addEventListener("click", function() {
//     let nameValue = Name.value.trim();
//     let ageValue = Age.value.trim();

//     if (!nameValue || !ageValue) {
//         alert("من فضلك أدخل الاسم والعمر");
//         return;
//     }else {
//         result.style.display = "block";
//     }

//     resName.textContent =  nameValue;
//     resAge.textContent =  ageValue;

//     console.log("Name:", nameValue);
//     console.log("Age:", ageValue);

    
// });


// New code

const formFields = {
    name: document.getElementById("name"),
    age: document.getElementById("age"),
    experience: document.getElementById("experience"),
    skills: document.getElementById("skills"),
    certifications: document.getElementById("certifications"),
    languages: document.getElementById("languages"),
    projects: document.getElementById("projects"),

};

const resultFields = {
    name: document.getElementById("res-name"),
    age: document.getElementById("res-age"),
    experience: document.getElementById("res-experience"),
    skills: document.getElementById("res-skills"),
    certifications: document.getElementById("res-certifications"),
    languages: document.getElementById("res-languages"),
    projects: document.getElementById("res-projects"),
    total: document.getElementById("res-total"),    
    stars: document.getElementById("res-stars"), 
};

const result = document.getElementById("evaluation-result");
const calculateButton = document.getElementById("calculate");
const deleteButton = document.getElementById("calculate-Delete");


calculateButton.addEventListener("click", () => {
    const name = formFields.name.value.trim();
    const age = formFields.age.value.trim();

    resultFields.name.textContent = name;
    resultFields.age.textContent = age;

    if (!name || !age || !formFields.experience.value || !formFields.skills.value || !formFields.certifications.value || !formFields.languages.value || !formFields.projects.value) {
        alert("من فضلك أدخل  البيانات");
        return;
    }
     result.style.display = "block";
 
    const experienceScore = Number(formFields.experience.value) * 5;
    const skillsScore = formFields.skills.value.split(",").filter(Boolean).length * 3;
    const certificationsScore = formFields.certifications.value.split(",").filter(Boolean).length * 2;
    const languagesScore = formFields.languages.value.split(",").filter(Boolean).length * 4;
    const projectsScore = Number(formFields.projects.value) * 5;

    let educationScore = 0;
    const educationLevel = document.getElementById("certifications").value;
    if (educationLevel === "bachelor") educationScore = 10;
    if (educationLevel === "master") educationScore = 15;
    if (educationLevel === "phd") educationScore = 20;


    const totalScore = (
        (educationScore * 0.20) + 
        (experienceScore * 0.25) +
        (skillsScore * 0.20) +
        (certificationsScore * 0.10) +
        (languagesScore * 0.10) +
        (projectsScore * 0.15)
    ).toFixed(2);

    let stars = "★☆☆☆☆";
    if (totalScore >= 18) stars = "★★★★★";
    else if (totalScore >= 15) stars = "★★★★☆";
    else if (totalScore >= 12) stars = "★★★☆☆";
    else if (totalScore >= 8)  stars = "★★☆☆☆";
    else stars = "★☆☆☆☆";
    
    resultFields.name.textContent = formFields.name.value ;
    resultFields.age.textContent = formFields.age.value;
    resultFields.experience.textContent = `${experienceScore} point`;
    resultFields.skills.textContent =  `${skillsScore} point`;
    resultFields.certifications.textContent = `${educationScore} point` ;
    resultFields.languages.textContent = `${languagesScore} point`  ;
    resultFields.projects.textContent = `${projectsScore} point`   ;
    resultFields.total.textContent = totalScore;
    resultFields.stars.textContent = stars;

 + ''

});

deleteButton.addEventListener("click", () => {
    Object.values(formFields).forEach(input => input.value = "");

    const educationInput = document.getElementById("education");
    if (educationInput) educationInput.value = "";

    Object.values(resultFields).forEach(el => el.textContent = "");

    result.style.display = "none";
});
