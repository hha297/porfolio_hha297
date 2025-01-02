/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants.js';
import { FaArrowRight } from 'react-icons/fa';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
//template_xoimikn
//service_25w23lo

//g3G308cal1-cetmlY

//UNKEoFM61Ahlk7QQUBgAC
const Contact = () => {
        const formRef = useRef();
        const [form, setForm] = useState({
                name: '',
                email: '',
                subject: '',
                message: '',
        });

        const [loading, setLoading] = useState(false);

        const handleSubmit = (e) => {
                e.preventDefault();
                setLoading(true);
                emailjs.send(
                        'service_25w23lo',
                        'template_xoimikn',
                        {
                                from_name: form.name,
                                to_name: 'Dang Hoang Ha',
                                from_email: form.email,
                                to_email: 'ha.dh290702@gmail.com',
                                message: form.message,
                        },
                        'g3G308cal1-cetmlY',
                ).then(
                        () => {
                                setLoading(false);
                                toast.success('Thank you. I will get back to you as soon as possible.');
                                setForm({
                                        name: '',
                                        email: '',
                                        subject: '',
                                        message: '',
                                });
                        },
                        (error) => {
                                setLoading(false);
                                console.log(error);
                                toast.error('Something went wrong.');
                        },
                );
        };

        return (
                <div className="h-full bg-primary/30">
                        <div className="container mx-auto py-36 text-center xl:text-left flex items-center justify-center h-full">
                                <div className="flex flex-col w-full max-w-[700px] items-center gap-x-8">
                                        {/* Text */}
                                        <motion.h2
                                                variants={fadeIn('up', 0.2)}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="h2 text-center"
                                        >
                                                Let's <span className="text-accent">Connect.</span>
                                        </motion.h2>
                                        <motion.p
                                                variants={fadeIn('up', 0.4)}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="mb-12 max-w-[400px] mx-auto lg:mx-0 text-lg"
                                        >
                                                I am currently looking for new opportunities and would love to hear
                                                about yours.
                                        </motion.p>
                                        {/* Form */}
                                        <motion.form
                                                className="flex flex-1 flex-col gap-6 w-full mx-auto"
                                                ref={formRef}
                                                onSubmit={handleSubmit}
                                        >
                                                {/* Input Group */}
                                                <div className="flex gap-x-6 w-full">
                                                        <input
                                                                type="text"
                                                                required
                                                                className="input mb-4"
                                                                placeholder="Name"
                                                                value={form.name}
                                                                onChange={(e) =>
                                                                        setForm({ ...form, name: e.target.value })
                                                                } // Update state
                                                        />
                                                        <input
                                                                type="email"
                                                                required
                                                                className="input mb-4"
                                                                placeholder="Email"
                                                                value={form.email}
                                                                onChange={(e) =>
                                                                        setForm({ ...form, email: e.target.value })
                                                                } // Update state
                                                        />
                                                </div>
                                                <input
                                                        type="text"
                                                        className="input"
                                                        placeholder="Subject"
                                                        value={form.subject}
                                                        onChange={(e) => setForm({ ...form, subject: e.target.value })} // Update state
                                                />
                                                <textarea
                                                        placeholder="Message"
                                                        className="textarea"
                                                        required
                                                        value={form.message}
                                                        onChange={(e) => setForm({ ...form, message: e.target.value })} // Update state
                                                ></textarea>
                                                <button
                                                        type="submit"
                                                        className="btn rounded-full border border-white/50 xl:max-w-[200px] max-w-full px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:bg-accent hover:border-accent group"
                                                >
                                                        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                                                Let's Talk
                                                        </span>
                                                        <FaArrowRight className="-translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:flex group-hover:opacity-100 transition-all duration-500 absolute text-xl" />
                                                </button>
                                        </motion.form>
                                </div>
                        </div>
                </div>
        );
};

export default Contact;
