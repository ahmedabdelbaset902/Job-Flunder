function generateCV() {
    document.getElementById("cvName").innerText = document.getElementById("name")?.value || "N/A";
    document.getElementById("cvJobTitle").innerText = document.getElementById("jobTitle")?.value || "N/A";
    document.getElementById("cvPhone").innerText = document.getElementById("phone")?.value || "N/A";
    document.getElementById("cvEmail").innerText = document.getElementById("email")?.value || "N/A";
    document.getElementById("cvAddress").innerText = document.getElementById("address")?.value || "N/A";
    document.getElementById("cvExperience").innerText = document.getElementById("experience")?.value || "N/A";
    document.getElementById("cvDob").innerText = document.getElementById("dob").value || "N/A";
    document.getElementById("cvMaritalStatus").innerText = document.getElementById("maritalStatus").value || "N/A";
    document.getElementById("cvMilitaryService").innerText = document.getElementById("militaryService").value || "N/A";
    document.getElementById("cvNativeLanguage").innerText = document.getElementById("nativeLanguage").value || "N/A";
    document.getElementById("cvFluentLanguages").innerText = document.getElementById("fluentLanguages").value || "N/A";

    // التعليم
    let degree = document.getElementById("degree").value;
    let college = document.getElementById("college").value;
    let department = document.getElementById("departments").value;
    let grade = document.getElementById("overallGrade").value;
    document.getElementById("cvEducation").innerText = `${degree} in ${department}, ${college} - ${grade}`;

    // المهارات
    document.getElementById("cvSkills").innerText = document.getElementById("skills").value || "N/A";

    // الشهادات
    let certs = "";
    const certNames = document.getElementsByName("certificateName[]");
    const certDetails = document.getElementsByName("certificateDetails[]");
    const certDates = document.getElementsByName("certificateDate[]");
    const certLinks = document.getElementsByName("certificateLink[]");

    for (let i = 0; i < certNames.length; i++) {
        if (certNames[i].value.trim() !== "") {
            certs += `• ${certNames[i].value} - ${certDates[i].value}<br>${certDetails[i].value}`;
            if (certLinks[i].value.trim() !== "") {
                certs += ` (<a href="${certLinks[i].value}" target="_blank">Link</a>)`;
            }
            certs += "<br><br>";
        }
    }
    document.getElementById("cvCertificates").innerHTML = certs || "N/A";

    // عرض المعاينة
    document.getElementById("cvPreview").style.display = "block";
}
function addCertificate() {
    const container = document.getElementById("certificatesContainer");
    const newEntry = document.createElement("div");
    newEntry.classList.add("certificate-entry");
    newEntry.innerHTML = `
        <input type="text" class="form-control mb-2" placeholder="Certificate Name" name="certificateName[]">
        <textarea class="form-control mb-2" placeholder="Certificate Details" rows="2" name="certificateDetails[]"></textarea>
        <input type="date" class="form-control mb-2" name="certificateDate[]">
        <input type="url" class="form-control mb-2" placeholder="Certificate Link (optional)" name="certificateLink[]">
        <button type="button" class="btn btn-danger mt-2" onclick="removeCertificate(this)">Remove</button>
    `;
    container.appendChild(newEntry);
}

function removeCertificate(button) {
    button.parentElement.remove();
}

function downloadPDF() {
    const element = document.getElementById("cvPreview");

    const options = {
        margin: 1,
        filename: "My_CV.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    if (element && element.innerHTML.trim() !== "") {
        html2pdf().from(element).set(options).save();
    } else {
        alert("يرجى تعبئة البيانات أولاً.");
    }
}
