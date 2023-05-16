import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      <div className={classes.imageContainer}>
        <img src="https://source.unsplash.com/random/?Arts&Culture" alt="nature" />
      </div>
    </section>
  );
};

export default StartingPageContent;
