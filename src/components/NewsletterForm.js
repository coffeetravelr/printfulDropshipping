import { useState } from 'react';
import { decode } from 'html-entities';

const NewsletterForm = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
     return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
     return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode( formattedMessage ) : null;
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row focus:outline-none">
        <div className="mb-3 sm:mb-0 mc-field-group w-full md:w-auto">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Your email here"
            className="md:mr-3 py-2 px-4 border border-gray-300 rounded w-full md:w-auto"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
          <button  onClick={handleFormSubmit} className="w-full md:w-auto transition flex-shrink-0 py-2 px-4 border border-gray-300 hover:border-transparent shadow-sm text-sm font-medium bg-white text-gray-900 focus:text-white hover:bg-coffee hover:text-white focus:bg-coffee focus:outline-none rounded">
            Join The List!
          </button>
      </div>
      <div className="newsletter-form-info text-green-500">
        {status === "sending" && <div>Sending...</div>}
        {status === "error" || error ? (
          <div
            className="newsletter-form-error text-red-500"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {status === "success" && status !== "error" && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </div>
    </>
  );
}

export default NewsletterForm