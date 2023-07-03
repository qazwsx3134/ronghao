import { component$, useVisibleTask$, $ } from "@builder.io/qwik";
import { routeLoader$, z } from "@builder.io/qwik-city";
import type { InitialValues, SubmitHandler } from "@modular-forms/qwik";
import { formAction$, useForm, zodForm$ } from "@modular-forms/qwik";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const contactSchema = z.object({
  name: z.string().nullable(),
  email: z
    .string()
    .min(1, "Please enter your email.")
    .email("The email address is badly formatted."),
  phoneNumber: z.string().nullable(),
  description: z.string(),
  preferredContact: z.string().nullable(),
});

type ContactForm = z.infer<typeof contactSchema>;

export const useFormLoader = routeLoader$<InitialValues<ContactForm>>(() => ({
  name: null,
  email: "",
  phoneNumber: null,
  description: "",
  preferredContact: null,
}));

export default component$(() => {
  const [contactForm, { Form, Field, FieldArray }] = useForm<ContactForm>({
    loader: useFormLoader(),
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
      <div class="hero-content flex-col lg:flex-row">
        <div class="text-center lg:text-left whitespace-nowrap">
          <h1 class="text-4xl font-bold">聯絡我們 Now!</h1>
          <p class="py-6 text-xl">
            幫您打造一個與眾不同的網站，
            <br />
            從平凡中脫穎而出．
          </p>
          <p class="py-6 text-xl font-mono">qazwsx3134@gmail.com</p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
          <div class="card-body">
            <Form>
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
                      required
                      {...props}
                      value={field.value}
                    />
                  </div>
                )}
              </Field>
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
                    <select
                      class="select w-full max-w-xs"
                      {...props}
                      value={field.value}
                    >
                      <option disabled selected>
                        偏好聯絡方式
                      </option>
                      <option>Line</option>
                      <option>Email</option>
                      <option>電話</option>
                    </select>
                  </div>
                )}
              </Field>
            </Form>

            <div class="form-control">
              <button class="btn btn-info">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
