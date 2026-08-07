import "./App.css";

function PhoneCard({ image, title }) {
  return (
    <div className="phone-card">
      <div className="phone-frame">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
    </div>
  );
}

function Section({ title, desc, children }) {
  return (
    <section className="section">
      <div className="heading">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>

      <div className="phone-grid">
        {children}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">

      <header className="hero">
        <h1>Fire Equipment Maintenance</h1>
        <p>
          Modern React UI inspired by the provided mobile application design.
        </p>
      </header>

      <Section
        title="Sign In"
        desc="Login and Reset Password Screens"
      >
        <PhoneCard
          image="https://picsum.photos/300/600?1"
          title="Login"
        />

        <PhoneCard
          image="https://picsum.photos/300/600?2"
          title="Reset Password"
        />
      </Section>

      <Section
        title="Home Page"
        desc="Dashboard and Fire Equipment List"
      >
        <PhoneCard
          image="https://picsum.photos/300/600?3"
          title="Dashboard"
        />

        <PhoneCard
          image="https://picsum.photos/300/600?4"
          title="Equipment"
        />

        <PhoneCard
          image="https://picsum.photos/300/600?5"
          title="Progress"
        />

        <PhoneCard
          image="https://picsum.photos/300/600?6"
          title="Details"
        />
      </Section>

      <Section
        title="Work Orders"
        desc="Assigned Work Orders"
      >
        <PhoneCard
          image="https://picsum.photos/300/600?7"
          title="Orders"
        />

        <PhoneCard
          image="https://picsum.photos/300/600?8"
          title="Timer"
        />

        <PhoneCard
          image="https://picsum.photos/300/600?9"
          title="Order Details"
        />
      </Section>

      <Section
        title="More Options"
        desc="Menu, Chat and Profile"
      >
        <PhoneCard
          image="https://picsum.photos/300/600?10"
          title="Menu"
        />

        <PhoneCard
          image="https://picsum.photos/300/600?11"
          title="Chat"
        />

        <PhoneCard
          image="https://picsum.photos/300/600?12"
          title="Profile"
        />
      </Section>

      <footer>
        <h2>Thanks For Watching ❤️</h2>
      </footer>

    </div>
  );
}