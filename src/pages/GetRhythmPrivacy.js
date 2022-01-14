import React from "react";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

function GetRhythmPrivacy() {
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
                <h2 className="h2 text-white">Get Rhythm Privacy Policy</h2>
              </div>
              <div className="text-sm text-gray-200 text-left mt-3">
                <h3 className="h3">General</h3>
                <br />
                <p>
                  Get Rhythm was developed by Coe Code LLC as a free app. This
                  app is provided through Apple's App Store and is intended for
                  use as is.
                </p>
                <br />
                <h3 className="h3">Data storage</h3>
                <br />
                <p>
                  Get Rhythm does not collect nor share any PII from its users.
                  All data provided to Get Rhythm is stored locally on the
                  user's device. In order to provide users access to paid
                  features, anonymous purchase data is sent to and processed by
                  RevenueCat. RevenueCat is a third-party service and their
                  privacy policy can be found{" "}
                  <a href="https://www.revenuecat.com/privacy">here</a>.
                </p>
                <br />
                <h3 className="h3">Contact information</h3>
                <br />
                <p>
                  Any questions regarding this policy may be directed to{" "}
                  <a href="mailto:privacy@coecode.io">privacy@coecode.io</a>
                </p>
                <br />
                <h3 className="h3">Changes to this policy</h3>
                <br />
                <ul>
                  <li>
                    <b>01/13/2022</b> - Policy V1
                  </li>
                </ul>
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

export default GetRhythmPrivacy;
