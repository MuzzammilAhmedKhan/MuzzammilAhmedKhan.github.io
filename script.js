document.addEventListener("DOMContentLoaded", function(){
  const enquiryForm = document.getElementById("enquiryForm");
  if(enquiryForm) {
    enquiryForm.addEventListener("submit", function(e){
      e.preventDefault();
      
      // Collect form data
      const fullName = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
      
      // Simulate a backend call – replace this with an actual AJAX request if needed
      console.log("Enquiry submitted:", { fullName, email, phone, subject, message });
      alert("Thank you for your enquiry, " + fullName + "!");
      
      // Reset the form after submission
      enquiryForm.reset();
    });
  }
});
