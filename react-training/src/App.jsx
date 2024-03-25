import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (data) => {
    // Tutaj symulacja zapisu danych
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label htmlFor="title">Tytuł</label>
        </div>
        <input
          {...register("title")}
          type="text"
          id="title"
          placeholder="Tytuł"
        />
      </div>
      <div>
        <div>
          <label htmlFor="description">Opis</label>
        </div>
        <textarea
          {...register("description")}
          id="description"
          placeholder="Opis"
          rows={4}
        />
      </div>
      <button type="submit" disabled={isSubmitting}>
        Wyślij
      </button>
    </form>
  );
};

export default App;
