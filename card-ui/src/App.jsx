function App() {

  // Card data (dynamic)
  const cardData = [
    {
      title: "Web Development",
      text: "Learn HTML, CSS, JavaScript, and React."
    },
    {
      title: "Data Science",
      text: "Analyze data using Python and Machine Learning."
    },
    {
      title: "UI/UX Design",
      text: "Design beautiful and user-friendly interfaces."
    }
  ]

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Card Based UI Using Bootstrap
      </h2>

      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <button className="btn btn-primary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
