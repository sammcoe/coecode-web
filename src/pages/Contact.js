import React from "react";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <section className="">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10">
                <h2 className="h2 text-white">Contact</h2>
              </div>
              <div className="text-sm text-gray-200 text-left mt-3">
                <h3 className="h3">App Support</h3>
                <br />
                <p>
                  Any questions or concerns may be directed to{" "}
                  <a href="mailto:support@coecode.io">support@coecode.io</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Contact;
