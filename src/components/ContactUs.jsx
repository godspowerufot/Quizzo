import { useState } from 'react';

import { Form, TextInput } from './';

import showAlert from './AlertList';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    showAlert('success', 'mail-sent');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <div className="mb-28 mt-10 w-[85%] max-w-2xl">
      <p className="mb-14 text-center text-4xl font-bold uppercase tracking-wider lg:text-5xl">
        Contact Us
      </p>
      <Form className="card mx-auto" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col gap-4">
          <TextInput
            required
            icon="account_circle"
            placeholder="Enter Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            required
            icon="mark_as_unread"
            placeholder="Enter Email ID"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            required
            icon="subject"
            placeholder="Enter Subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <div className="flex w-full items-center rounded-md border border-black/30 bg-white p-2 outline-none dark:border-white/30 dark:bg-black/50">
            <textarea
              required
              className="ml-1 h-[100px] w-full resize-none rounded-lg border-none bg-transparent font-medium tracking-wide text-black outline-none dark:text-white lg:text-xl"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span className="material-symbols-outlined mx-1 mb-auto mt-1 flex cursor-pointer items-center justify-center text-black dark:text-white md:text-3xl">
              comment
            </span>
          </div>
          <div className="flex gap-5">
            <button
              className="fill-button mt-1 w-full bg-red-500 hover:bg-red-400"
              onClick={() => {
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
              }}
            >
              Cancel
            </button>
            <button className="fill-button mt-1 w-full" type="submit">
              Send
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default ContactUs;
