
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useSettings } from "../context/SettingsContext";

function Contact() {
  const { t } = useSettings();

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const contacts = [
    {
      title: t.contact.whatsapp,
      value: "+20 1066956862",
      href: "https://wa.me/201066956862",
      Icon: FaWhatsapp,
      color: "bg-green-500",
    },
    {
      title: t.contact.email,
      value: "eldawoodymohamed683@gmail.com",
      href: "mailto:eldawoodymohamed683@gmail.com",
      Icon: MdEmail,
      color: "bg-red-500",
    },
    {
      title: t.contact.linkedin,
      value: "linkedin.com",
      href: "https://www.linkedin.com/in/mohamed-eldawoudy-336428364/",
      Icon: FaLinkedin,
      color: "bg-blue-600",
    },
    {
      title: t.contact.github,
      value: "github.com/mohamed-ayman123",
      href: "https://github.com/mohamed-ayman123",
      Icon: FaGithub,
      color: "bg-gray-700",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    const form = e.currentTarget;

    setIsSending(true);
    setStatus("");

    try {
      const formData = Object.fromEntries(
        new FormData(form).entries()
      );

      const response = await fetch(
        "https://formsubmit.co/ajax/eldawoodymohamed683@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (
        !response.ok ||
        String(result.success).toLowerCase() !== "true"
      ) {
        throw new Error(
          result.message || "Message sending failed."
        );
      }

      setStatus(
        t.contact.successMessage ||
          "تم إرسال رسالتك بنجاح!"
      );

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        "تعذر إرسال الرسالة. حاول مرة أخرى بعد قليل."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="Contact"
      className="theme-page scroll-mt-20 py-20"
    >
      <div className="mx-auto w-[90%] max-w-7xl">
        <h2 className="section-heading text-center text-3xl sm:text-5xl">
          {t.contact.title}
        </h2>

        <p className="theme-muted mb-14 mt-5 text-center leading-7">
          {t.contact.subtitle}
        </p>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2">
            <h3 className="theme-text mb-4 text-2xl font-bold sm:text-3xl">
              {t.contact.getInTouch}
            </h3>

            <p className="theme-muted mb-8 leading-8">
              {t.contact.description}
            </p>

            <div className="space-y-6">
              {contacts.map(
                ({ title, value, href, Icon, color }) => (
                  <div
                    key={title}
                    className="flex items-center gap-4"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color}`}
                    >
                      <Icon
                        className="text-2xl text-white"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0">
                      <h4 className="theme-text font-semibold">
                        {title}
                      </h4>

                      <a
                        href={href}
                        target={
                          href.startsWith("mailto:")
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          href.startsWith("mailto:")
                            ? undefined
                            : "noreferrer"
                        }
                        className="theme-muted break-all text-sm hover:text-orange-500"
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form
              // onSubmit={handleSubmit}
              action="https://mail.google.com/mail/u/0/?hl=ar#inbox" 
              className="theme-card space-y-5 rounded-2xl p-5 sm:p-7"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  placeholder={t.contact.name}
                  aria-label={t.contact.name}
                  autoComplete="name"
                  required
                  className="theme-input rounded-lg p-4"
                />

                <input
                  name="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  aria-label={t.contact.emailPlaceholder}
                  autoComplete="email"
                  required
                  className="theme-input rounded-lg p-4"
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder={t.contact.phone}
                  aria-label={t.contact.phone}
                  autoComplete="tel"
                  className="theme-input rounded-lg p-4"
                />

                <input
                  name="subject"
                  type="text"
                  placeholder={t.contact.subject}
                  aria-label={t.contact.subject}
                  required
                  className="theme-input rounded-lg p-4"
                />
              </div>

              <textarea
                name="message"
                rows="6"
                placeholder={t.contact.message}
                aria-label={t.contact.message}
                required
                className="theme-input resize-y rounded-lg p-4"
              />

              <button
                type="submit"
                disabled={isSending}
                className="accent-button w-full rounded-lg py-4 font-bold disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending
                  ? "Sending..."
                  : t.contact.send}
              </button>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className="theme-muted text-sm leading-6"
                >
                  {status}
                </p>
              )}

              <p className="theme-muted text-xs leading-6">
                {t.contact.email}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;