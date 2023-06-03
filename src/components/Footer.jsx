import '../styles/footer.css';

export default function Footer() {
  return (
    <footer>
      <section className="contact" id="jump-contact">
        <header className="contact__header-container">
          <div className="contact__header">Contact</div>
          <span className="contact__line" />
        </header>

        <section className="contact__email containers">
          <p className="contact-text2">If you want to say hello:</p>
          <a className="contact__anchor" href="mailto:juansan1993@hotmail.com">
            Get in touch 👋📧
          </a>
        </section>

        <section className="contact__signature-container">
          <p className="contact__signature">Designed and built by</p>
          <p>Juan Sanchez</p>
        </section>
      </section>
    </footer>
  );
}
