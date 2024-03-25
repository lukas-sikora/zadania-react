import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: true })}
        placeholder="Imię"
      />
      <input
        {...register("lastName", { required: true })}
        placeholder="Nazwisko"
      />
      <input {...register("email", { required: true })} placeholder="Email" />
      <input
        {...register("password", { required: true })}
        placeholder="Hasło"
      />
      <button type="submit">Zarejestruj</button>
    </form>
  );
};

export default App;
