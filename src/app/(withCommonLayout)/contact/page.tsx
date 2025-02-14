import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
    return (
        <div className="pt-10">
            {/* Section Title */}
            <div className="mb-10 animate-fade-in">
                <p className="section-sub-text">Get in touch</p>
                <h2 className="section-head-text">Contact.</h2>
            </div>

            {/* Description */}
            <div className="w-full flex">
                <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]  animate-fade-in delay-200">
                
                </p>
            </div>

            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 gap-8 ">
                {/* Left Side - Illustration */}
                <div className="flex items-center justify-center">
                    <img src="/doodle.png" alt="Doodle" className="w-80 h-80 object-contain" />
                </div>

                {/* Right Side - Form */}
                <div className="bg-black-100  p-4 rounded-xl shadow-lg">

                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;