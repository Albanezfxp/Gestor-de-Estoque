import "./Dashboard.css";

export default function Dashboard(props: any) {
  return (
    <div className="dashboardItem">
      <div className="dashboardTitleContainer">
        <h2>{props.title}</h2>
      </div>
      <div className="dashboardNumberContainer">
        <p>{props.number}</p>
      </div>
    </div>
  );
}
