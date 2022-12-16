import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList, mockedAuthorsList } from '../../constants.js';

const CorseCardElements = mockedCoursesList.map((el) => (
  <CourseCard
    id={el.id}
    title={el.title}
    description={el.description}
    creationDate={el.creationDate}
    duration={el.duration}
    authors={el.authors}
    key={el.id}
    mockedAuthorsList={mockedAuthorsList}
  />
));

const Courses = () => {
  return (
    <div>
      <div>{CorseCardElements}</div>
    </div>
  );
};

export default Courses;
