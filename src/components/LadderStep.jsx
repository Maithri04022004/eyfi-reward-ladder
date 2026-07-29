function LadderStep({ title, milestone, description, side }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{milestone}</p>
      <p>{description}</p>
      <p>{side}</p>
    </div>
  );
}

export default LadderStep;