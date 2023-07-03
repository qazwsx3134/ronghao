import { component$, useVisibleTask$, $, QRL } from "@builder.io/qwik";

import type { SubmitHandler } from "@modular-forms/qwik";
import { useForm } from "@modular-forms/qwik";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  type ContactForm,
  useContactFormLoader,
  useFormAction,
  validateContactForm,
} from "~/routes";

export default component$(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactForm, { Form, Field }] = useForm<ContactForm>({
    loader: useContactFormLoader(),
    action: useFormAction(),
    validate: validateContactForm,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit: QRL<SubmitHandler<ContactForm>> = $((values, event) => {
    // Runs on client
    // show user success message or error message
  });

  useVisibleTask$(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".chat-1", {
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".chat-1",
        start: "top 50%",
        end: "bottom top",
      },
    });

    gsap.to(".chat-2", {
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".chat-2",
        start: "top 50%",
        end: "bottom top",
      },
    });

    gsap.to([".chat-3", ".chat-4"], {
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".chat-3",
        start: "top 50%",
        end: "bottom top",
      },
    });

    gsap.to(".chat-5", {
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".chat-5",
        start: "top 50%",
        end: "bottom top",
      },
    });

    gsap.to(".chat-6", {
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".chat-6",
        start: "+=100 50%",
      },
    });
  });
  return (
    <div class="hero min-h-screen max-w-[960px]">
      <div class="hero-content flex-col lg:flex-row min-w-[500px]">
        {/* <div class="text-center lg:text-left whitespace-nowrap">
          <h1 class="text-4xl font-bold">聯絡我們 Now!</h1>
          <p class="py-6 text-xl">
            幫您打造一個與眾不同的網站，
            <br />
            從平凡中脫穎而出．
          </p>
          <p class="py-6 text-xl font-mono">qazwsx3134@gmail.com</p>
        </div> */}
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
          <div class="card-body">
            {contactForm.response.status === "success" && (
              <div class="alert alert-info">
                {contactForm.response.message}
              </div>
            )}
            <Form onSubmit$={handleSubmit}>
              {/* Name */}
              <Field name="name">
                {(field, props) => (
                  <div class="form-control">
                    <label class="label" for={field.name}>
                      <span class="label-text">姓名</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      class="input input-bordered"
                      {...props}
                      value={field.value}
                    />
                  </div>
                )}
              </Field>
              {/* Email */}
              <Field name="email">
                {(field, props) => (
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      class="input input-bordered"
                      {...props}
                      value={field.value}
                    />
                    {field.error && <div>{field.error}</div>}
                  </div>
                )}
              </Field>
              {/* phone */}
              <Field name="phoneNumber">
                {(field, props) => (
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">聯絡電話</span>
                    </label>
                    <input
                      type="text"
                      placeholder="phone-number"
                      class="input input-bordered"
                      {...props}
                      value={field.value}
                    />
                  </div>
                )}
              </Field>
              <Field name="description">
                {(field, props) => (
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">夢想中網站描述</span>
                    </label>
                    <textarea
                      class="textarea textarea-bordered h-24"
                      placeholder="description"
                      {...props}
                      value={field.value}
                    ></textarea>
                  </div>
                )}
              </Field>
              <Field name="preferredContact">
                {(field, props) => (
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">偏好聯絡方式</span>
                    </label>
                    <select class="select w-full max-w-xs" {...props}>
                      <option disabled selected key="default" value="default">
                        偏好聯絡方式
                      </option>
                      <option
                        key="line"
                        value="line"
                        selected={field.value === "line"}
                      >
                        Line
                      </option>
                      <option
                        key="email"
                        value="email"
                        selected={field.value === "email"}
                      >
                        Email
                      </option>
                      <option
                        key="phone"
                        value="phone"
                        selected={field.value === "phone"}
                      >
                        電話
                      </option>
                    </select>
                  </div>
                )}
              </Field>
              <div class="form-control mt-4">
                <button
                  class="btn btn-info"
                  type="submit"
                  disabled={contactForm.submitting}
                >
                  {contactForm.submitting ? "loading" : "Submit"}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
});
