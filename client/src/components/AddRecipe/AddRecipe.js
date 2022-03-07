import React from "react";

const AddRecipe = () => {
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-40-l mw9-ns center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Adaugă Rețetă</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Nume rețetă
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="ingredients">
                Ingrediente
              </label>
              <textarea
                name="ingredients"
                class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                rows="15"
                cols="100"
              ></textarea>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="preparation">
                Mod de preparare
              </label>
              <textarea
                name="preparation"
                class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                rows="15"
                cols="100"
              ></textarea>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="image">
                Adaugă Imagine
              </label>
              <input type="file" accept="image/*" name="image" />
            </div>
          </fieldset>
          <div className="tc mt3">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Adaugă"
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default AddRecipe;
