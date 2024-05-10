import React from 'react'

import PropTypes from 'prop-types'

import './contact31.css'

const Contact31 = (props) => {
  return (
    <div className="contact31-contact20 thq-section-padding">
      <div className="contact31-max-width thq-section-max-width">
        <div className="contact31-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact31-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="contact31-text2 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact31-row">
          <div className="contact31-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact31-contact-info">
              <div className="contact31-content2">
                <h3 className="contact31-text3 thq-heading-3">Email</h3>
                <p className="contact31-text4 thq-body-large">
                  {props.content3}
                </p>
              </div>
              <span className="contact31-email thq-body-small">
                {props.email1}
              </span>
            </div>
          </div>
          <div className="contact31-content3">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact31-contact-info1">
              <div className="contact31-content4">
                <h3 className="contact31-text5 thq-heading-3">Phone</h3>
                <p className="contact31-text6 thq-body-large">
                  {props.content4}
                </p>
              </div>
              <span className="contact31-phone thq-body-small">
                {props.phone1}
              </span>
            </div>
          </div>
          <div className="contact31-content5">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact31-contact-info2">
              <div className="contact31-content6">
                <h3 className="contact31-text7 thq-heading-3">Office</h3>
                <p className="contact31-text8 thq-body-large">
                  {props.content5}
                </p>
              </div>
              <span className="contact31-address thq-body-small">
                {props.address1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact31.defaultProps = {
  heading1: 'Contact Us',
  phone1: '+1-123-456-7890',
  content2: 'Get in touch with us today!',
  email1: 'info@fiitwell.com',
  content5:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  content3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  address1: '123 Wellness Street, Cityville, State, Zip Code',
  content4:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
}

Contact31.propTypes = {
  heading1: PropTypes.string,
  phone1: PropTypes.string,
  content2: PropTypes.string,
  email1: PropTypes.string,
  content5: PropTypes.string,
  content3: PropTypes.string,
  address1: PropTypes.string,
  content4: PropTypes.string,
  content1: PropTypes.string,
}

export default Contact31
