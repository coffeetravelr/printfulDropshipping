import NewsletterSubscribe from "../components/NewsletterSubscribe";


function TermsPage() {
  return (
    <div className="max-w-xl mx-auto prose prose-blue">
      <h2>Welcome</h2>
      <p>
        You're visiting the Coffeetravelr merch store.
        Find cool, high quality coffee products that fits your personality!  
      </p>

      <h3>Pssst!</h3>
      <p>
        Don't miss out on the latest news, updates and special offers.<br/> 
        Join our newsletter!
      </p>
        <NewsletterSubscribe/>
    
    </div> 
  );
}

export default TermsPage;
