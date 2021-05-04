export default function FlippingCard(props) {
  const { title, subtitle, content } = props;
  return (
    <div class="cfl-card">
      <div class="cfl-card__content">
        <div class="cfl-card__front">
          <h3 class="cfl-card__title">The Fair</h3>
          <p class="cfl-card__subtitle">vs</p>
          <h3 class="cfl-card__title">The Fair</h3>
        </div>

        <div class="cfl-card__back">
          <p class="cfl-card__body">
            This would be some longer text that gives a description of the
            things from the other side I guess
          </p>
        </div>
      </div>
    </div>
  );
}
