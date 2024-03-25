import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, { message: "Tytuł jest wymagany" }),
  description: z.string().min(1, { message: "Opis jest wymagany" }),
});

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        alert("Przepis dodany pomyślnie!");
        reset(); // Reset formularza
      }, 2000); // Symulacja asynchronicznego zapisu
    });
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
        {errors?.title && <p>{errors.title.message}</p>}
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
        {errors?.description && <p>{errors.description.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        Wyślij
      </button>
    </form>
  );
};
export default App;
