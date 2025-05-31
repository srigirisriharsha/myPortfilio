import { useState } from "react";
import { assets, MyEmail } from "../../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    try {
      const formData = new FormData(event.target);
      const object = Object.fromEntries(formData);

      // Add required Web3Forms fields
      object.access_key = "YOUR_ACCESS_KEY_HERE"; // Replace this with the key you received in email
      object.from_name = formData.get("name");
      object.subject = "New Contact Form Submission - Portfolio";
      object.to = MyEmail;

      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (response.status === 200) {
        setResult("Thank you for your message! I'll get back to you soon.");
        event.target.reset();
      } else {
        console.log("Error details:", data);
        throw new Error(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult(
        `Sorry, there was an error sending your message. Please try emailing me directly at ${MyEmail}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      id="contact"
      className="w-full py-16 sm:py-20 scroll-mt-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-3 text-lg md:text-xl font-Ovo text-gray-600 dark:text-gray-300"
        >
          Connect with me
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="text-center text-5xl font-Ovo font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
        >
          Get in touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="text-center max-w-4xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          Feel free to reach out if you're interested in discussing software
          development opportunities, technical collaborations, or just want to
          connect! You can also reach me directly at{" "}
          <a
            href="mailto:srigirisriharsha@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
          >
            srigirisriharsha@gmail.com
          </a>{" "}
          or through{" "}
          <a
            href="https://www.linkedin.com/in/sri-harsha-srigiri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
          >
            LinkedIn
          </a>
          .
        </motion.p>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="max-w-5xl mx-auto bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl dark:shadow-gray-900/50"
          onSubmit={onSubmit}
        >
          {/* Hidden spam protection */}
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <motion.label
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.25 }}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 ml-1"
              >
                Name
              </motion.label>
              <motion.input
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.25 }}
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
                className="flex-1 p-4 outline-none border border-gray-200 dark:border-gray-600 rounded-xl bg-white/70 dark:bg-gray-700/50 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <motion.label
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.25 }}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 ml-1"
              >
                Email
              </motion.label>
              <motion.input
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.25 }}
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="flex-1 p-4 outline-none border border-gray-200 dark:border-gray-600 rounded-xl bg-white/70 dark:bg-gray-700/50 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <motion.label
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 ml-1"
            >
              Message
            </motion.label>
            <motion.textarea
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              name="message"
              rows={4}
              placeholder="Enter Your Message"
              required
              className="w-full p-4 outline-none border border-gray-200 dark:border-gray-600 rounded-xl bg-white/70 dark:bg-gray-700/50 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-y min-h-[120px]"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.15 }}
            type="submit"
            disabled={isSubmitting}
            className={`group py-4 px-8 w-full sm:w-max flex items-center justify-center sm:justify-between gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl mx-auto hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Submit Message"}
            <Image
              src={assets.right_arrow_white}
              alt="Submit arrow"
              className="w-4 dark:invert"
            />
          </motion.button>
          <p
            className={`mt-6 text-center ${
              result.includes("error")
                ? "text-red-500 dark:text-red-400"
                : "text-green-500 dark:text-green-400"
            } font-medium`}
          >
            {result}
          </p>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
