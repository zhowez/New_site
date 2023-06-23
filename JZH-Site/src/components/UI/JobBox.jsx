import style from "./JobBox.module.css";
import ContentBox from "./ContentBox";
import data from "../../data/jobs.json";

const JobBox = (props) => {
  return (
    <div className={style.text}>
      {data.map((job) => {
        const details = job.details;
        return (
          <ContentBox key={job.id} className={style.box}>
            <h2>{job.title + " - " + job.company}</h2>
            <h3>{job.startDate + " - " + job.endDate}</h3>
            <ul>
              {details.map((d) => {
                {
                  return <li key={d}>{<span>{d}</span>}</li>;
                }
              })}
            </ul>
          </ContentBox>
        );
      })}
    </div>
  );
};

export default JobBox;
