import { FC, useState, ChangeEvent, FormEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./App.css";

interface IFormData {
  name: string;
  email: string;
  message: string;
}

const App: FC = () => {
  const [step, setStep] = useState<number>(1);
  // const [formData, setFormData] = useState<IFormData>({
  //   name: "",
  //   email: "",
  //   message: "",
  // }); //To remove warning uncontrolled to controlled

  const { register, handleSubmit } = useForm<IFormData>();
  const onSubmit: SubmitHandler<IFormData> = (data) => console.log(data);

  const handleNext = (): void => {
    // switch (step) {
    //   case 1:
    //     if (!formData.name) {
    //       alert("Please fill in the Name field.");
    //       return;
    //     }
    //     break;
    //   case 2:
    //     if (!formData.email) {
    //       alert("Please fill in the Email field.");
    //       return;
    //     }
    //     break;
    //   case 3:
    //     if (!formData.message) {
    //       alert("Please fill in the Message field.");
    //       return;
    //     }
    //     break;
    //   default:
    //     break;
    // }

    console.log(step);
    setStep(step + 1);
  };

  const handlePrevious = (): void => {
    console.log(step);
    setStep(step - 1);
  };

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center px-20 pt-4 pb-4"
    >
      <div className="flex items-center">
        {step > 1 && (
          <button
            onClick={handlePrevious}
            className="bg-blue-500 mx-5 px-4 py-1 rounded-lg text-white"
          >
            Previous
          </button>
        )}

        {step === 1 && (
          <>
            <label className="text-white mr-5" htmlFor="Name">
              Name
            </label>

            <input
              className="py-1 rounded-lg pl-3"
              {...register("name", { required: true, maxLength: 20 })}
            />
          </>
        )}

        {step === 2 && (
          <>
            <label htmlFor="Name" className="text-white mr-5">
              Email
            </label>

            <input
              className="py-1 rounded-lg pl-3"
              {...register("email", {required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
            />
          </>
        )}

        {step === 3 && (
          <>
            <label htmlFor="Name" className="text-white mr-5">
              Message
            </label>

            <input
              className="py-1 rounded-lg pl-3"
              {...register("message", { required: true, maxLength: 50 })}
            />
          </>
        )}

        {step < 3 ? (
          <button
            onClick={handleNext}
            className="bg-blue-500 ml-5 px-4 py-1 rounded-lg text-white"
          >
            Next
          </button>
        ) : (
          step === 3 && (
            <button className="bg-green-600 ml-5 px-4 py-1 rounded-lg text-white">
              Submit
            </button>
          )
        )}
      </div>
    </form>
  );
};

export default App;
