import CourseCardStyles from './CourseCard.module.css';
import Button from '../../../../common/Button/Button';

const btnOnChange = () => {
  console.log(444);
};

const CourseCard = ({
  id,
  title,
  description,
  creationDate,
  duration,
  authors,
  mockedAuthorsList,
}) => {
  console.log(mockedAuthorsList);

  const findAuthors = (authors, mockedAuthorsList) => {
    const names = authors.map((idAuthor) =>
      mockedAuthorsList.find((objAuthor) => idAuthor === objAuthor.id)
    );

    return names.map((el) => el?.name).join(', ');
  };

  return (
    <div className={CourseCardStyles.card}>
      <div className={CourseCardStyles.left}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={CourseCardStyles.right}>
        <div className={CourseCardStyles.info}>
          <p className={CourseCardStyles.authors}>
            Authors: {findAuthors(authors, mockedAuthorsList)}
          </p>
          <p>Duration: {duration}</p>
          <p>Created: {creationDate}</p>
        </div>
        <div className={CourseCardStyles.right__button}>
          <Button btnOnChange={btnOnChange} btnColor='rgb(0, 105, 197)' />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
