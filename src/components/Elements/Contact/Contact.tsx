import { Container } from "@/components/LayoutComponents";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit] = useForm("mpzepwen");

  return (
    <div className="bg-slate-100">
      <Container>
        <div className="mx-auto flex flex-col items-center justify-center  ">
          <h5 className="mt-4">Contact</h5>
          <h2 className="mt-2 mb-4">Get In Touch</h2>
          {state.succeeded ? (
            <div
              className="flex flex-col justify-center
            "
            >
              <h4 className="text-center text-black">
                Thanks for your message!
              </h4>
              <p>We will be in touch as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-2xl">
              <div className="flex w-full flex-col gap-2 sm:flex-row ">
                <div className="flex w-full flex-col ">
                  <label htmlFor="name">
                    <p className="xsmall text-gray-500">Full Name</p>
                  </label>
                  <input
                    required
                    id="name"
                    type="text"
                    name="name"
                    className="rounded-md border-2 border-gray-300 py-1 px-2"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="flex w-full flex-col ">
                  <label htmlFor="email">
                    <p className="xsmall text-gray-500">Email Address</p>
                  </label>
                  <input
                    required
                    id="email"
                    type="email"
                    name="email"
                    className="rounded-md border-2 border-gray-300 py-1 px-2"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="mt-2 flex flex-col">
                <label htmlFor="message">
                  <p className="xsmall text-gray-500">Message</p>
                </label>
                <textarea
                  className="h-32 rounded-md border-2 border-gray-300 py-1 px-2"
                  id="message"
                  required
                  name="message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                className="mt-2 flex w-full cursor-pointer justify-center rounded-md bg-cyan-600 py-2  text-white transition-colors duration-150 hover:bg-cyan-800"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3"></div>
      </Container>
    </div>
  );
}
