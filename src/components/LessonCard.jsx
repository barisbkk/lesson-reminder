import { data } from "../helper/data";
import lessonStyle from "./lessonCard.module.css";

const LessonCard = () => {
  return (
    <div className={lessonStyle["container"]}>
      {data.map((item) => (
        <div className={lessonStyle["inner-container"]} key={item.id}>
          <img className={lessonStyle.img} src={item.image} alt="lesson-logo" />
          <div className={lessonStyle.p}>
            <p>Lesson Name: {item.name} </p>
            <p>Lesson Hour: {item.hour} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonCard;
