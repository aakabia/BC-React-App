import React, { useState } from "react";

// Above, we import use state to handle changes on this page.

function Contact() {
  const [showNotification, setNotification] = useState({
    show: false,
    fieldId: null,
    message: "",
  });

  // Above, we create a variable for showing notifications.
  // We give this variable two properties show and fieldId.

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Above, we create a variable for our formData.
  // We give this variable three properties name, email, and message.

  const handleChange = (event) => {
    const { name, value } = event.target; // Destructure name and value from the event target
    setFormData((prev) => ({ ...prev, [name]: value })); // Update the formData state
  };

  // Description:
  // The handleChange function is triggered whenever there's a change in the input fields.
  // It extracts the name (input field identifier) and value (current input value) from the event target.
  // Then it updates the formData state using setFormData, which takes the previous state (prev) and:
  // - Spreads the previous state to preserve existing properties.
  // - Uses [name] as a dynamic key to update the corresponding field in the state with the new value.

  const handleBlur = (id) => {
    if (!formData[id]) {
      // Show notification only if the field is empty
      setNotification({ show: true, fieldId: id });
      setTimeout(() => {
        setNotification({ show: false, fieldId: null });
      }, 3000); // Notification will disappear after 3 seconds
    }
  };

  // Above, we use handle blur to show the notification only if a value of form data exisits.
  // Also we use setNotification to show and hide the notification.

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Above is a regular expression to verify a email address.

  const handleEmailBlur = (id) => {
    const value = formData[id];

    if (!value) {
      setNotification({
        show: true,
        fieldId: id,
        message: "Please enter email",
      });
    } else if (!isValidEmail(value)) {
      // Show an error message if the email is invalid
      setNotification({
        show: true,
        fieldId: id,
        message: "Please enter a valid email",
      });
    } else {
      // Clear the notification if the email is valid
      setNotification({ show: false, fieldId: null, message: "" });
    }

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, fieldId: null, message: "" });
    }, 3000);
  };

  // Above, we use handleEmail blur to show the notification only if a value of form data exisist.
  // Also, the second check of the if statment validates a proper email is given.
  // Also we use setNotification to show and hide the notification.

  return (
    <section className="container-fluid black ">
      <div className="row">
        <div className="contactHeader">
          <h3 className="projectTitle"> Please Contact</h3>
        </div>

        <form className="contactForm" action="">
          <div className="formSection col-12">
            <label className="formSpace formLabel" htmlFor="name">
              Name:
            </label>
            <input
              className="formSpace formInput formField max col-11 col-sm-10"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              // Above, we set initial value to formData.name

              onChange={handleChange}
              // Above, handleChnge handles when our input value changes

              onBlur={() => handleBlur("name")}
              // Above, on blur  uses handle blur and we pass in " name" to give it a fieldId of name.

              onFocus={() => setNotification({ show: false, fieldId: null })}

              // Above, we make the notification dissapper on focus.
            />

            {showNotification.show && showNotification.fieldId === "name" && (
              <div className="notification-bubble">Please enter your name!</div>
            )}
            {/* Above, is where we display the notification */}
            {/* if show notification is ture and the fieldId equals "name" then we will display the message. */}
          </div>

          <div className="formSection col-12">
            <label className="formSpace formLabel" htmlFor="email">
              Email:
            </label>
            <input
              className="formSpace formInput  formField max col-11 col-sm-10 "
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleEmailBlur("email")}
              // Above, we use handle email blue to and pass in email to get the current value of email in our form data
              // After, the proper notification will render due the value.

              onFocus={() => setNotification({ show: false, fieldId: null })}
            />

            {showNotification.show && showNotification.fieldId === "email" && (
              <div className="notification-bubble">
                {showNotification.message}
                {/* Above, we render the proper notification message.*/}
              </div>
            )}
          </div>

          <div className="formSection col-12">
            <label className="formSpace formLabel" htmlFor="message">
              Message:
            </label>
            <textarea
              className="formSpace formInput  formField max tall col-11 col-sm-10"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur("message")}
              onFocus={() => setNotification({ show: false, fieldId: null })}
            ></textarea>
            {showNotification.show &&
              showNotification.fieldId === "message" && (
                <div className="notification-bubble">
                  Please enter a message!
                </div>
              )}
          </div>
          <div className="button">
            <button
              className="  formSpace formLabel formInput  col-4 col-md-3 col-lg-2"
              id="submitBtn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
// Above, we create our header and add our Navbar to it as well.

export default Contact;
