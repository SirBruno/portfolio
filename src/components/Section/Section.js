import './Section.css'

function Section(props) {
  return (
    <section className="section">
      <div className="section__inner">
        <h2 className="section__title">{props.title}</h2>
        <p>{props.children}</p>
      </div>
    </section>
  )
}

export default Section