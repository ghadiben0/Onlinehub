
import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import  '../css/custom.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
    <header class="heroBanner"> 
  <div className="container">
    <h1 className="hero__title">{siteConfig.title}</h1>
    <p className="hero__subtitle">{siteConfig.tagline}</p>
    <div className={styles.buttons}>
      <button
        className="button button--primary button--lg"
        onClick={openModal}
      >
        To Consider 📄
      </button>
    </div>
  </div>
</header>
      {/* Modal overlay OUTSIDE of banner */}
      {showModal && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <h2>To Consider 📄</h2>
            <p>
              <strong>ZUMConnect</strong> online documentation is private and proprietary information of <strong>ZUMEU</strong> Company.
            </p>

            <p>
              All copied and or modified contents included in this site is considererd a violation to the Company Content Terms of Use.
            </p>

            <p>
              <strong>@2025 ZUMConnect. inc. All rights reserved</strong>.<br />
            </p>
            <button
              className={styles.ctaButton}
              onClick={closeModal}
              style={{ marginTop: '1rem' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Modal styles (floating center screen)
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(245, 221, 12, 0)',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '480px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
    textAlign: 'center',
    color: '#333',
  },
};

function UISelection() {
  return (
    <Layout
      title="ZUMConnect Documentation"
      description="Welcome to ZUMConnect Knowledge Base"
    >
      <HomepageHeader />

      <main>
        {/* Two Cards Section */}
        <section className="container margin-vert--xl">
          <div className="row" style={{ justifyContent: 'center' }}>
            {/* First Card - Admin */}
            <div className="col col--5">
              <div
                className="card"
                style={{
                  height: '100%',
                  textAlign: 'center',
                  border: '1px solid  #f0e5e1ff',
                  borderRadius: '12px',             // rounded corners
                  boxShadow: '0 8px 20px rgba(224, 81, 81, 0.15)', // floating effect
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
               }}
               onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.2)';
               }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                }}
              >
                <div className="card__header">
                  <h2>Admin</h2>
                </div>
                <div className="card__body">
                  <p style={{ fontSize: '1.1rem' }}>
                    Technical setup, system configuration, and implementation guides.
                  </p>
                  <div
                    style={{
                      background: 'transparent',
                      padding: '1rem',
                      borderRadius: '6px',
                      margin: '1rem 0',
                    }}
                  >
                    <strong>What's inside:</strong>
                    <ul style={{ textAlign: 'left', margin: '0.5rem 0' }}>
                      <li>Portal Setup</li>
                      <li>System Integration</li>
                      <li>Technical Configuration</li>
                    </ul>
                  </div>
                </div>
                <div className="card__footer">
                  <Link
                    className={styles.ctaButton}
                    to="/docs/tst/intro"
                  >
                    Access to documentation
                  </Link>
                </div>
              </div>
            </div>

            {/* Second Card - Business Partners */}
            <div className="col col--5">
              <div
                className="card"
                style={{
                  height: '100%',
                  textAlign: 'center',
                  border: '1px solid  #f0e5e1ff',
                  borderRadius: '12px',             // rounded corners
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)', // floating effect
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
               }}
               onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.2)';
                }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                }}
              >
                <div className="card__header">
                  <h2>Business Partners</h2>
                </div>
                <div className="card__body">
                  <p style={{ fontSize: '1.1rem' }}>
                    End-User manuals, FAQs, and how-to guides for daily e-procurement operations.
                  </p>
                  <div
                    style={{
                      background: 'transparent',
                      padding: '1rem',
                      borderRadius: '6px',
                      margin: '1rem 0',
                    }}
                  >
                    <strong>What's inside:</strong>
                    <ul style={{ textAlign: 'left', margin: '0.5rem 0' }}>
                      <li>User Manuals</li>
                      <li>FAQs</li>
                      <li>How-to Guides</li>
                      <li>Daily Operations</li>
                    </ul>
                  </div>
                </div>
                <div className="card__footer">
                  <Link
                    className={styles.ctaButton}
                    to="/docs/partners"
                  >
                    Access to documentation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}  

export default UISelection;

 
