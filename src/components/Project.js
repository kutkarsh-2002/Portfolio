import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gitHub from "../images/gitHub finder.jpg";
import form_validation from "../images/form_validations.jpg";
import Portfolio from "../images/portfolios.jpg";

const Project = () => {
  return (
    <div id="project">
      <section class="wrapper">
        <div class="container-fostrap">
          <div>
            <h1 class="heading">MY PROJECT</h1>
          </div>
          <div class="content">
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-sm-4">
                  <div class="card">
                    <a
                      class="img-card"
                      href="https://githubfinder-utkarsh.netlify.app/"
                    >
                      <img src={gitHub} />
                    </a>
                    <div class="card-content">
                      <h4 class="card-title">Github Finder</h4>
                      <p class="para">
                        Vanilla JavaScript, Bootstrap, HTML, CSS and concept of
                        fetch API has used to build this project. I have used
                        the asynchronous method of sending response. I
                        registered the GitHub application to generate client Id
                        and client secret. If the user inputs the GitHub
                        username of a random person into the input field. It
                        returns his profile along with his 5 latest
                        repositories.
                      </p>
                    </div>
                    <div class="card-read-more">
                      <a
                        href="https://githubfinder-utkarsh.netlify.app/"
                        class="btn btn-link btn-block"
                      >
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                  <div class="card">
                    <a
                      class="img-card"
                      href="https://form-validation-utkarsh.netlify.app/"
                    >
                      <img src={form_validation} />
                    </a>
                    <div class="card-content">
                      <h4 class="card-title">Form Validation</h4>
                      <p class="para">
                        I have used the Javascript, Boostrap, CSS and HTML. In
                        Javascript the error handling and regular expressions
                        concept was used to create this form validation project.
                        If the user typed into the input fields which is
                        unmatched with the defined set expressions. It throws an
                        error. To reslove this error, input the right text into
                        the fields and submit it.
                      </p>
                    </div>
                    <div class="card-read-more">
                      <a
                        href="https://form-validation-utkarsh.netlify.app/"
                        class="btn btn-link btn-block "
                      >
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                  <div class="card">
                    <a
                      class="img-card"
                      href="https://kutkarsh-2002.github.io/portfolio/"
                    >
                      <img src={Portfolio} />
                    </a>
                    <div class="card-content">
                      <h4 class="card-title">Portfolio website</h4>
                      <p class="para">
                        I have used the React Js, CSS, Boostrap, and HTML to
                        create this responsive Portfolio website. Array
                        destructuring helped me to write the cleaner code. It
                        has avoided in writing the same code for the multiple
                        times. I installed the react-icons and react-doms and
                        then imported into the component of my JavaScript file
                        to use the icons. I have used the router to defined its
                        routing path.
                      </p>
                    </div>
                    <div class="card-read-more">
                      <a
                        href="https://kutkarsh-2002.github.io/portfolio/"
                        class="btn btn-link btn-block"
                      >
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
