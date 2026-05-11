import { Layout } from "@/components/Layout";
import { useEffect } from "react";

const sections: { title: string; body: string[] }[] = [
  {
    title: "Legal Notice",
    body: [
      "All notices from Bellgoo to You may be posted on our Web site and will be deemed delivered within thirty (30) days after posting. Notices from You to Bellgoo shall be made either by regular mail, sent to the address we provide on our Web site, or first class mail to our address at:",
      "Delivery shall be deemed to have been made by You to Bellgoo five (5) days after the date sent.",
    ],
  },
  {
    title: "Copyright Notice",
    body: [
      "All content appearing on this Web site is the property of Bellgoo.",
      "Copyright © 2026, Bellgoo. All rights reserved. As a user, you are authorized only to view, copy, print, and distribute documents on this Web site so long as (1) the document is used for informational purposes only, and (2) any copy of the document (or portion thereof) includes the following copyright notice: Copyright © 2026, Bellgoo. All rights reserved.",
    ],
  },
  {
    title: "Trademarks",
    body: [
      "All brand, product, service, and process names appearing on this Web site are trademarks of their respective holders. Reference to or use of a product, service, or process does not imply recommendation, approval, affiliation, or sponsorship of that product, service, or process by Bellgoo. Nothing contained herein shall be construed as conferring by implication, estoppel, or otherwise any license or right under any patent, copyright, trademark, or other intellectual property right of Bellgoo or any third party, except as expressly granted herein.",
    ],
  },
  {
    title: "Terms of Use",
    body: [
      "This site may contain other proprietary notices and copyright information, the terms of which must be observed and followed. Information on this site may contain technical inaccuracies or typographical errors. Information, including product pricing and availability, may be changed or updated without notice. Bellgoo and its subsidiaries reserve the right to refuse service, terminate accounts, and/or cancel orders in its discretion, including, without limitation, if Bellgoo believes that customer conduct violates applicable law or is harmful to the interests of Bellgoo and its subsidiaries.",
    ],
  },
  {
    title: "Privacy Policy",
    body: [
      "This site may contain other proprietary notices and copyright information, the terms of which must be observed and followed. Information on this site may contain technical inaccuracies or typographical errors. Information, including product pricing and availability, may be changed or updated without notice. Bellgoo and its subsidiaries reserve the right to refuse service, terminate accounts, and/or cancel orders in its discretion, including, without limitation, if Bellgoo believes that customer conduct violates applicable law or is harmful to the interests of Bellgoo and its subsidiaries.",
    ],
  },
  {
    title: "Shipping and Delivery",
    body: [
      "At this time, Bellgoo ships merchandise to locations within the United States and U.S. territories, including Alaska, Hawaii, Puerto Rico, Guam, and the US Virgin Islands. Additionally, Bellgoo ships merchandise to Canada and Mexico, but not to other international locations. The risk of loss and title for all merchandise ordered on this Web site pass to you when the merchandise is delivered to the shipping carrier.",
    ],
  },
  {
    title: "International",
    body: [
      "Customs and import duties may be applied to International orders when the shipment reaches its destination. Such charges are the responsibility of the recipient of your order and vary from country to country. Contact your local customs office for details.",
      "Shipping laws are different in each country. It is your responsibility to check with your Customs office to verify whether the country to which you are shipping permits the shipment of your products. Bellgoo is not responsible for any direct, indirect, punitive, or consequential damages that arise from improper international shipping practices.",
    ],
  },
  {
    title: "Sales Tax",
    body: [
      "Bellgoo charges sales tax for merchandise ordered on this Web site based on the applicable state sales tax rate and the location to which the order is being shipped.",
    ],
  },
  {
    title: "Warranties",
    body: [
      "The Content included in this Web site has been compiled from a variety of sources and is subject to change without notice as are any products, programs, offerings, or technical information described in this Web site. Bellgoo makes no representation or warranty whatsoever regarding the completeness, quality, or adequacy of the Web site or Content, or the suitability, functionality, or operation of this Web site or it's Content. By using this Web site, you assume the risk that the Content on this Web site may be inaccurate, incomplete, offensive, or may not meet your needs and requirements.",
      "Bellgoo SPECIFICALLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT WITH RESPECT TO THESE WEB PAGES AND CONTENT. IN NO EVENT WILL Bellgoo BE LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES EVEN IF COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
      "-- OR Depending on State --",
      "The information and content on this server is provided \"as is\" with no warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Any warranty that is provided in connection with any of the products and services described on this Web site is provided by the advertiser or manufacturer only, and not by Bellgoo.",
      "The references and descriptions of products or services within the Web site materials are provided \"as is\" without any warranty of any kind, either express or implied. Bellgoo is not liable for any damages, including any consequential damages, of any kind that may result to the user from the use of the materials on this Web site or of any of the products or services described hereon.",
      "The descriptions of, and references to, products, services and companies on this Web site are the sole responsibility of the companies providing the information (\"advertisers\"), and not Bellgoo. The inclusion of material on this server does not imply any endorsement by Bellgoo, which makes no warranty of any kind with respect to the subject matter of the server materials advertised.",
      "A possibility exists that the server materials could include inaccuracies or errors. Additionally, a possibility exists that unauthorized additions, deletions, and alterations could be made by third parties to the server materials. Although Bellgoo tries to ensure the integrity and the accurateness of the server materials, it makes no guarantees about their correctness or accuracy. Before relying on any representation made in any of the server materials, check with the advertiser of the product or service to ensure that the information you are relying upon is correct.",
    ],
  },
  {
    title: "Return Policy",
    body: [
      "You may purchase merchandise from this Web site by using any one of the payment options listed in (link to Payment Options). Bellgoo reserves the right to change its payment procedures at any time without prior notice to you.",
    ],
  },
  {
    title: "Miscellaneous",
    body: [
      "VOID WHERE PROHIBITED: Although the information on this Web site is accessible worldwide, not all products or services discussed in this Web site are available to all persons or in all geographic locations or jurisdictions. Bellgoo and the advertisers each reserve the right to limit the provision of their products or services to any person, geographic area, or jurisdiction they so desire and to limit the quantities of any products or services that they provide. Any offer for any product or service made in the materials on this Web site is void where prohibited.",
      "GOVERNING LAW: In the event of litigation both parties agree that the Law of the State of business registration of Bellgoo shall apply and both parties shall consent to the jurisdiction of said State's courts, or in the event of diversity of citizenship, the United States District Court for the (District). Both parties expressly waive a trial by jury.",
      "MISCELLANEOUS: The Terms and Conditions constitute the entire agreement between you and Bellgoo with respect to this Web site. The Terms and Conditions supersede all prior or contemporaneous communications and proposals, whether electronic, oral or written between you and Bellgoo with respect to this Web site. No modification of the Terms and Conditions shall be effective unless it is authorized by Bellgoo. If any provision of the Terms and Conditions is found to be contrary to law, then such provision(s) shall be constructed in a manner to closely reflect, as much as possible, the intentions of the parties, with the other provisions remaining in full force and effect.",
    ],
  },
];

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service · Bellgoo";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", "Bellgoo Terms of Service — legal notices, copyright, trademarks, shipping, warranties, and governing law.");
  }, []);

  return (
    <Layout>
      <section className="container pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Legal</p>
          <h1 className="font-display text-5xl md:text-6xl text-gradient-gold mb-6">Our Terms of Service</h1>
          <div className="gold-divider w-32 mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map((s) => (
            <article key={s.title} className="glass-panel rounded-2xl p-8">
              <h2 className="font-display text-2xl md:text-3xl text-gold mb-4">{s.title}</h2>
              <div className="space-y-4 text-foreground/75 text-sm md:text-base leading-relaxed">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
