import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

function ProfileForm() {

  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      skills: [{ name: "" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills"
  });

  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    alert("Profile Submitted");
  };

  return (
    <div>
      <h2>Profile Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Full Name</label>
        <input placeholder="Enter your name" {...register("name")} />

        <label>Age</label>
        <input type="number" placeholder="Enter age" {...register("age")} />

        <label>Date of Birth</label>
        <input type="date" {...register("dob")} />

        <label>Country</label>
        <select {...register("country")}>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
        </select>

        <label>Bio</label>
        <textarea placeholder="Write something about yourself" {...register("bio")} />

        <h3>Upload Profile Image</h3>

        <input
          type="file"
          {...register("image")}
          onChange={handleImage}
        />

        {preview && (
          <img src={preview} alt="preview" width="120" />
        )}

        <h3>Skills</h3>

        {fields.map((field, index) => (
          <div className="skill-row" key={field.id}>
            <input
              {...register(`skills.${index}.name`)}
              placeholder="Skill"
            />

            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={() => append({ name: "" })}>
          Add Skill
        </button>

        <br /><br />

        <button type="submit">
          Submit Profile
        </button>

      </form>
    </div>
  );
}

export default ProfileForm;