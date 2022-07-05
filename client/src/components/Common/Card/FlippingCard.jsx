export default function FlippingCard(props) {
  const { date_start, team_1, team_2, tickets_url, venue } = props?.item;

  return (
    props?.item && (
      <div className="flipping-card cfl-col__3">
        <div className="flipping-card__content">
          <div className="flipping-card__front">
            <span className="flipping-card__date">
              <span className="card-date-day">
                {new Date(date_start).getUTCDate()}
              </span>
              <span className="card-date-month">
                {new Date(date_start).toLocaleString('en-us', {
                  month: 'short',
                })}
              </span>
            </span>
            <h3 className="flipping-card__title">{`${team_2.abbreviation} - ${team_2.nickname}`}</h3>
            <p className="flipping-card__subtitle">vs</p>
            <h3 className="flipping-card__title">{`${team_1.abbreviation} - ${team_1.nickname}`}</h3>
          </div>

          <div className="flipping-card__back">
            <a href={tickets_url} className="slide-btn from-left">
              Buy tickets
            </a>
            <p className="flipping-card__body">
              This would be some longer text that gives a description of the
              things from the other side I guess
            </p>
          </div>
        </div>
      </div>
    )
  );
}
