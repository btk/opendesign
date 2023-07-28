import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SEO from '@/components/SEO'
import Layout from '@/components/layout';

export default function Home() {
  return (
    <Layout isHome={true}>
      <SEO
        title="Open Design - License for Design" isHome={true}
        description="VRUX is an open-source software that makes prototyping VR experiences crazy fast and intuitive, express interest below."
      />
      <div>

      <main className={styles.main}>
        <h1 style={{display: "none"}}>Open Design</h1>
        <h2 className={styles.tagline}>Open Design License 1.0</h2>

        <div class="container">
        <h2>Open Design 2.1</h2>

        <p>Version 2.1</p>

        <p>The Open Design makes precise the meaning of “open” with respect to knowledge, promoting a robust commons in which anyone may participate, and interoperability is maximized.</p>

        <p><strong>Summary:</strong> <em>Knowledge is open if anyone is free to access, use, modify, and share it — subject, at most, to measures that preserve provenance and openness.</em></p>

        <p>This essential meaning matches that of “open” with respect to software as in the <a href="https://en.wikipedia.org/wiki/The_Open_Source_Definition">Open Source Definition</a> and is synonymous with “free” or “libre” as in the <a href="https://en.wikipedia.org/wiki/The_Free_Software_Definition">Free Software Definition</a> and <a href="https://en.wikipedia.org/wiki/Definition_of_Free_Cultural_Works">Definition of Free Cultural Works</a>.</p>

        <p>The term <strong>work</strong> will be used to denote the design or piece of visual art being transferred.</p>

        <p>The term <strong>license</strong> refers to the legal conditions under which the work is provided.</p>

        <p>The term <strong>public domain</strong> denotes the absence of copyright and similar
        restrictions, whether by default or waiver of all such conditions.</p>

        <p>The key words “must”, “must not”, “should”, and “may”
        in this document are to be interpreted as described in
        <a href="https://tools.ietf.org/html/rfc2119">RFC2119</a>.</p>

        <h2 id="1-open-works">1. Open Works</h2>

        <p>An open <strong>work</strong> <em>must</em> satisfy the following requirements in its distribution:</p>

        <h3 id="11-open-license-or-status">1.1 Open License or Status</h3>

        <p>The <strong>work</strong> <em>must</em> be in the <strong>public domain</strong> or provided under an open
        <strong>license</strong> (as defined in Section 2).  Any additional terms accompanying
        the work (such as a terms of use, or patents held by the licensor)
        <em>must not</em> contradict the work’s public domain status or terms of the license.</p>

        <h3 id="12-access">1.2 Access</h3>

        <p>The <strong>work</strong> <em>must</em> be provided as a whole and at no more than a reasonable
        one-time reproduction cost, and <em>should</em> be downloadable via the Internet without charge.
        Any additional information necessary for license compliance (such as names of
        contributors required for compliance with attribution requirements) <em>must</em> also
        accompany the work.</p>

        <h3 id="13-machine-readability">1.3 Machine Readability</h3>

        <p>The <strong>work</strong> <em>must</em> be provided in a form readily processable by a computer and where the individual elements of the work can be easily accessed and modified.</p>

        <h3 id="14-open-format">1.4 Open Format</h3>

        <p>The <strong>work</strong> <em>must</em> be provided in an open format. An open format is
        one which places no restrictions, monetary or otherwise, upon its use and can be fully processed
        with at least one free/libre/open-source software tool.</p>

        <h2 id="2-open-licenses">2. Open Licenses</h2>

        <p>A <strong>license</strong> <em>should</em> be compatible with other open licenses.</p>

        <p>A <strong>license</strong> is open if its terms satisfy the following conditions:</p>

        <h3 id="21-required-permissions">2.1 Required Permissions</h3>

        <p>The <strong>license</strong> <em>must</em> irrevocably permit (or allow) the following:</p>

        <h4 id="211-use">2.1.1 Use</h4>

        <p>The <strong>license</strong> <em>must</em> allow free use of the licensed work.</p>

        <h4 id="212-redistribution">2.1.2 Redistribution</h4>

        <p>The <strong>license</strong> <em>must</em> allow redistribution of the licensed work,
        including sale, whether on its own or as part of a collection made from
        works from different sources.</p>

        <h4 id="213-modification">2.1.3 Modification</h4>

        <p>The <strong>license</strong> <em>must</em> allow the creation of derivatives of the licensed
        work and allow the distribution of such derivatives under the same
        terms of the original licensed work.</p>

        <h4 id="214-separation">2.1.4 Separation</h4>

        <p>The <strong>license</strong> <em>must</em> allow any part of the work
        to be freely used, distributed, or modified separately from any other part
        of the work or from any collection of works in which it was originally
        distributed. All parties who receive any distribution of any part of
        a work within the terms of the original license <em>should</em> have the same rights
        as those that are granted in conjunction with the original work.</p>

        <h4 id="215-compilation">2.1.5 Compilation</h4>

        <p>The <strong>license</strong> <em>must</em> allow the licensed work to be distributed along
        with other distinct works without placing restrictions on these other works.</p>

        <h4 id="216-non-discrimination">2.1.6 Non-discrimination</h4>

        <p>The <strong>license</strong> <em>must not</em> discriminate against any person or group.</p>

        <h4 id="217-propagation">2.1.7 Propagation</h4>

        <p>The rights attached to the work <em>must</em> apply to all to whom it is redistributed
        without the need to agree to any additional legal terms.</p>

        <h4 id="218-application-to-any-purpose">2.1.8 Application to Any Purpose</h4>

        <p>The <strong>license</strong> <em>must</em> allow use, redistribution, modification, and
        compilation for any purpose. The license <em>must not</em> restrict anyone
        from making use of the work in a specific field of endeavor.</p>

        <h4 id="219-no-charge">2.1.9 No Charge</h4>

        <p>The <strong>license</strong> <em>must not</em> impose any fee arrangement, royalty, or other
        compensation or monetary remuneration as part of its conditions.</p>

        <h3 id="22-acceptable-conditions">2.2 Acceptable Conditions</h3>

        <p>The <strong>license</strong> <em>must not</em> limit, make uncertain, or otherwise diminish the permissions
        required in Section 2.1 except by the following allowable conditions:</p>

        <h4 id="221-attribution">2.2.1 Attribution</h4>

        <p>The <strong>license</strong> <em>may</em> require distributions of the work to include attribution
        of contributors, rights holders, sponsors, and creators as long as
        any such prescriptions are not onerous.</p>

        <h4 id="222-integrity">2.2.2 Integrity</h4>

        <p>The <strong>license</strong> <em>may</em> require that modified versions of a licensed work
        carry a different name or version number from the original work or
        otherwise indicate what changes have been made.</p>

        <h4 id="223-share-alike">2.2.3 Share-alike</h4>

        <p>The <strong>license</strong> <em>may</em> require distributions of the work to remain
        under the same license or a similar license.</p>

        <h4 id="224-notice">2.2.4 Notice</h4>

        <p>The <strong>license</strong> <em>may</em> require retention of copyright notices and identification of the license.</p>

        <h4 id="225-source">2.2.5 Source</h4>

        <p>The <strong>license</strong> <em>may</em> require that anyone distributing the work provide recipients with access to the preferred form for making modifications.</p>

        <h4 id="226-technical-restriction-prohibition">2.2.6 Technical Restriction Prohibition</h4>

        <p>The <strong>license</strong> <em>may</em> require that distributions of the work remain free of any technical measures that would restrict the exercise of otherwise allowed rights.</p>

        <h4 id="227-non-aggression">2.2.7 Non-aggression</h4>

        <p>The <strong>license</strong> <em>may</em> require modifiers to grant the public additional permissions (for example, patent licenses) as required for exercise of the rights allowed by the license. The license may also condition permissions on not aggressing against licensees with respect to exercising any allowed right (again, for example, patent litigation).</p>

        <p><em>The Open Design was initially derived from the Open Source Definition, which in turn was derived from the original Debian Free Software Guidelines, and the Debian Social Contract of which they are a part, which were created by Bruce Perens and the Debian Developers. Bruce later used the same text in creating the Open Source Definition. This definition is substantially derivative of those documents and retains their essential principles. Richard Stallman was the first to push the ideals of software freedom which we continue.</em></p>


      </div>

            </main>

      <footer className={styles.footer}>
          <p style={{opacity: 0.5}}>&copy; {new Date().getFullYear()} &middot; <a href="https://dreamoriented.org" target="_blank" rel="noreferrer" style={{fontWeight: "normal"}}>Dream Oriented Limited</a></p>
      </footer>
      </div>
    </Layout>
  )
}
