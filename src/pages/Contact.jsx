import emailjs from "@emailjs/browser";
import {  useRef } from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import ContactFooter from "../features/Contact/ContactFooter";


const Contact = () => {
  const fromRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { alert, showAlert, hideAlert } = useAlert();
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Wasih",
          from_email: form.email,
          to_email: "aftababu35@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Something went wrong",
          type: "danger",
        });
      });
  };

  return (
    <>
       <section className="max-container" id="contact">
      {alert.show&& <Alert {...alert} />}
      <div className="max-w-[80vw] md:max-w-[70vw] lg:max-w-[50vw] flex flex-col mx-auto mb-3">
       
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 "
        >
          <label className="text-gray-700 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="wasih"
              required
              onChange={handleChange}
         
              value={form.name}
            />
          </label>
          <label className="text-gray-700 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="wasih@gmail.com"
              required
              onChange={handleChange}
          
              value={form.email}
            />
          </label>
          <label className="text-gray-700 font-semibold">
            Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="wasih"
              required
              onChange={handleChange}
        
              value={form.message}
            />
          </label>
          <button
            type="submit"
            className="btn w-full py-2"
            disabled={isLoading}
            // onClick={() => setIsLoading(true)}

          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
      <ContactFooter/>
    
    </>
 
  );
};

export default Contact;
