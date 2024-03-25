import { useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => setSubmittedData(data);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <input
          name="firstName"
          {...register("firstName", { required: "Imię jest wymagane" })}
          placeholder="Imię"
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <input
          name="lastName"
          {...register("lastName", { required: "Nazwisko jest wymagane" })}
          placeholder="Nazwisko"
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
        <input
          name="email"
          {...register("email", {
            required: "Email jest wymagany",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Nieprawidłowy format adresu email",
            },
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          name="password"
          {...register("password", {
            required: "Hasło jest wymagane",
            minLength: {
              value: 8,
              message: "Hasło musi zawierać co najmniej 8 znaków",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              message:
                "Hasło musi zawierać jedną wielką literę, jedną małą literę i jedną cyfrę",
            },
          })}
          placeholder="Hasło"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Zarejestruj</button>
      </form>
      {submittedData && (
        <div>
          <h2>Dane zarejestrowanego użytkownika:</h2>
          <p>Imię: {submittedData.firstName}</p>
          <p>Nazwisko: {submittedData.lastName}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </>
  );
};
export default App;
