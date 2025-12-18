import Navbar from "../component/navbar.jsx";
import ContactForm from "../component/contactForm.jsx";
import Footer from "../component/footer.jsx";
import { ToastContainer } from "react-toastify";

export default function ContactUs() {
    return (
        <>
            <Navbar/>
            <div className="pt-20 pb-10 min-h-screen">
                <ContactForm/>
            </div>
            <Footer/>
            <ToastContainer position="top-right" autoClose={4000} theme="light" />
        </>
    );
}