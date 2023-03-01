function FoodBox(props) {
  const { food } = props;
  return (
    <div>
      <img src={food.image} height={60} alt={food.name} />
      <h3>{food.name}</h3>
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>
          Total Calories: {food.calories} * {food.servings}{' '}
        </b>{' '}
        kcal
      </p>
      <button>Delete</button>
    </div>
  );
}

export default FoodBox;
